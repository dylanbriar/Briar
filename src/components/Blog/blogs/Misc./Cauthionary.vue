<!-- this is hard coded while I work on setting up Auth 
 enjoy this absolute mess -->
 <script setup lang="ts">

 function scrollToTop (){
   window.scrollTo({ top: 0, behavior: 'smooth' });
 }
 
 function scrollToBottom (){
   window.scrollTo({ top: 105000, behavior: 'smooth' });
 }
 
 </script>

 <template>
    <p id="snap-down-button" @click="scrollToBottom()">Scroll to the end</p>
    <h1>A Cauthionary Tale from Another</h1><h1> Timeline</h1>
<br>
    <p>If you hadn't heard, (it's all over social media, people are raving about it), I'm currently
    working on a budgeting website. "Aren't there a lot of those?" I hear you ask. Yes, there are. But
    I like making stuff, especially stuff that I'll use, so that if I don't like something about it, I can
    just change it. I was raised not to be the selfish type, though, so I wanted to make sure anyone
    could use it if they were so inclined (purely out of kindness, not because I wanted hiring
    managers to have access to my work or anything). Since I'm not going to ask someone to locally
    install some GitHub repo, the only way to make other users possible is to have some sort of sign
    in feature.</p>

    <p>This is where the timeline split in twain. We are in the timeline where Dylan decided to
    just use Clerk. In the other timeline, things went a little bit differently. Dylan decided he wanted
    to learn the inner workings of authentication (not authorization, my website doesn't have
    different roles, just the one, in either timeline). After all, in both timelines, Dylan learned vanilla
    DOM manipulation, then jQuery first before learning React, so that he could truly understand the
    inner workings of frontend frameworks to truly appreciate the simplification they provide. "Why
    not learn the under-the-hood fundamentals of authentication so I can know how the
    authentication libraries function, and what they simplify?" other-timeline Dylan thought.</p>

    <p>This is his story. <i>*Law and Order Gung-Gung*</i></p>
<br>
    <h2>The Journey of Other-Timeline Dylan, and his Authentication Implementation</h2>

    <p>The initial thought, of course, is to have a username and password column in the SQL
    users table. Don't worry, Dylan knows better than that. That is awfully silly. So he hashes them
    first using <a href="https://nodejs.org/api/crypto.html">Node's built in crypto module</a>. At least, he was going to, but then he discovers the
    Web Cryptography API, and learns that it's a little more secure since it reduces server-side
    security responsibilities. He has to be very careful to <a href="https://blog.logto.io/migrate-to-web-crypto">spot differences between the two</a>, though.</p>

    <p>"Alright," he says. "My hashing function is all set up with a super secure MD5 hashing
    algorithm......wait a minute-" That's when he learns about different hashing algorithms, and how the most
    secure one these days is SHA-256. That's easy enough to implement; all he has to do is "tell" the
    Web Crypto API to use that algorithm specifically. It looks something like this:</p>

    <pre>
//im lazy and dont feel like adding color to this
async function hashPassword(password) {
  try {
    // Encode the password string as UTF-8
    const encoder = new TextEncoder();
    const data = encoder.encode(password);

    // Hash the password using SHA-256
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);

    // Convert the hash to a hexadecimal string
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');

    return hashHex;
  } catch (error) {
    console.error('Error hashing password:', error);
    return null; // Or throw an error, depending on your needs.
  }
}
</pre>

    <p>The only problem is that <a href="https://www.beyondidentity.com/glossary/rainbow-table-attack">rainbow tables exist</a>, so hackers can easily look up the most
    common passwords via the table, find the hash, and just use that key. For instance, if someone's
    password is "password" because they've spent their entire life being raised by roly-polys and
    have never touched a computer, the hash for that will always be the same thing, since he's using
    the same algorithm. After all, it's essentially just a fancy math equation; if you don't change x,
    you'll get the same y. So hackers can pull up the SHA-256 rainbow table, find the hash for
    "password," and hack in without ever knowing the algorithm.</p>

    <p>"Well," Dylan thinks, "that's not good." No worries, the first easy step is to require users to
    use a special character, a number, and a capital letter to encourage complexity (nothing could go
    wrong asking for special characters, surely). Then again, there's many passwords in rainbow
    tables that include all of these things.</p>
    
    <p>That's where the second step, called "salting," comes in.
    Salting works by creating a randomized value and, in simple terms, shoving it onto the password
    before it gets hashed, so that the hash is even extra random. Off Dylan goes to create his own
    salting algorithm, when he discovers <a href="https://www.vice.com/en/article/why-you-dont-roll-your-own-crypto/">how bad of an idea that is</a>. He says to himself, "Alright,
    guess we'll skip doing this part from scratch and just use bcrypt."</p>

    <p>Bcrypt is pretty cool, especially because it's slow; more specifically, it's slower than
    SHA-256. Being slow is normally bad in computer programs, but for this sort of thing you want
    it to land in the goldilocks zone of slowness: fast enough that UX doesn't tank, but slow enough
    that hackers with good GPUs can't compute as many billions of hashes per second. Bcrypt falls in that
    goldilocks zone. The code looks something like this:</p>

    <pre>
const bcrypt = require('bcrypt');
const saltRounds = 10; // Typically a value between 10 and 12

bcrypt.genSalt(saltRounds, (err, salt) => {
  if (err) {
    // Handle error
    return;
  }
});

const userPassword = 'user_password'; // Replace with the actual password

bcrypt.hash(userPassword, salt, (err, hash) => {
  if (err) {
    // Handle error
    return;
  }
});

const storedHashedPassword = 'hashed_password_from_database';
const userInputPassword = 'password_attempt_from_user';

bcrypt.compare(userInputPassword, storedHashedPassword, (err, result) => {
  if (err) {
    // Handle error
    console.error('Error comparing passwords:', err);
    return;
  }

  if (result) {
    // Passwords match, authentication successful
    console.log('Passwords match! User authenticated.');
  } else {
    // Passwords don't match, authentication failed
    console.log('Passwords do not match! Authentication failed.');
  }
});
</pre>
<p><a href="https://www.freecodecamp.org/news/how-to-hash-passwords-with-bcrypt-in-nodejs/#heading-how-to-install-bcrypt-in-nodejs">(source)</a></p>

    <p>Now that all this is in place, Dylan has a secure username and password system. Plus,
    Dylan implemented some helpful feedback for users: if their username is correct, and the
    problem is their password, they get a little red message that says, "Incorrect password." If the
    inverse is true, they get one that says, "Username does not exist." That is so helpful...... to hackers,
    he learns. Unfortunately, these messages open the door for <a href="https://www.upguard.com/blog/what-is-an-enumeration-attack">username enumeration attacks</a>;
    essentially, those conniving cyberthugs can use their fancy GPUs to throw a lot of usernames at
    the website in a matter of minutes, and use that little "Incorrect password" message to know each
    time they strike a valid username. Once they have a bunch of valid usernames, they run back
    through those, throwing thousands, if not tens of thousands, of the most popular passwords (which you can find from a quick Google search) at
    each username. Dylan scratches his head, feeling the pressure a little bit. "Whatever," he thinks,
    "non-helpful error messages instead." Simple enough. UX will just have to suffer.</p>

    <p>The next day, Dylan is scrolling through social media, as he is wont to do, and sees a
    <a href="https://www.reddit.com/r/ProgrammerHumor/comments/hji1ur/sql_injection/">meme about a genie</a>. The genie tells a man, "I have three rules," and explains them. The man
    says, "I wish for '; DROP TABLE RULES – ." The genie says, "There are no rules."</p>

    <p>"Oh god," Dylan mutters. "I forgot about SQL injection." (Remember those special characters he asked users for?)</p>

    <p>Thankfully, in both timelines, Dylan's actually used Regex for sanitation before for his
    GraphQL npm package. He knows how to set that up fairly well. He goes with an allowlist as
    opposed to a blocklist, since an allowlist is more restrictive, and he doesn't have to keep
    updating it for every character he suddenly remembers he needs to account for. He goes and
    finds what special characters to allow in a password, then writes this code:</p>

    <pre>
//this allows all letters, numbers, and these characters: !#$%&+,-./:;?@[]^_{}~
const allowedCharacters = /^[a-zA-Z0-9!#$%&+,./:;?@[\]^_`{|}~-]+$/; 

//if any character in the password is not defined in the allow list, return an error
if (!allowedCharacters.test(req.body.password)){
  return next({
    log:'Invalid character detected in the request body',
    status: 403,
    message: 'Invalid character, try again.'
  })
}
</pre>

    <p>That looks lovely. Users may want to use other special characters, but security is more
    important. Except, in making sure he has the right special characters allowed, he comes across
    <a href="https://security.stackexchange.com/questions/221924/which-symbols-can-i-whitelist-to-remain-safe-against-sql-injection-xss-and-all">this article</a>. 
    He exclaims "You've got to be kidding me!" shaking his fists angrily at the cyber
    gods. There needs to be something else. So he learns about <a href="https://www.sqlshack.com/using-parameterized-queries-to-avoid-sql-injection/">parameterized queries</a>, which
    separates user input from the SQL queries.</p>

    <p>With a sigh and a wipe of his brow, other-timeline Dylan takes a break. Finally, he can
    rest easy now that his site is secure. He logs in to his website, uses it, then closes it. A few
    minutes later, he remembers he forgot something, so he opens his website and….has to log in
    again. The second time is not so bad, but after the third, fourth, fifth- it gets tiring. This is not
    how modern websites roll. So he realizes he's going to have to implement sessions. He's got to
    decide between cookies, localStorage, or sessionStorage, which presents its own <a href="https://stytch.com/blog/localstorage-vs-sessionstorage-vs-cookies/">can of worms</a>.
    Of course, he also has to make sure whatever method he chooses is secure, too. Cookies are
    probably the most secure. Actually, storing JWTs <i>as</i> cookies is probably the most secure.</p>

    <p>Weeks go by. Dylan gets JWTs set up, and even takes into account Cross-Site Request
    Forgery. He writes yet another checkmark next to the massive cluster of scribbled out ones by the
    to-do list item, "Implement Secure Sign-In." A text comes to his phone. It's his friend Julien.
    "Hey man," it says. "Your website is really cool, I've loved using it, but I forgot my password
    and you don't have a way to recover passwords."</p>

    <p>Dylan takes a deep inhale. It is not wise to cuss out your friends when they're asking such
    simple questions. He scribbles over the checkmark he just made, and replies, "No worries, bro,
    I'll get that implemented. You'll definitely have to just make a new one for now, though."</p>

    <p>"I can't do that either," Julien says. But Julien does not know that the phone is now set on
    Do Not Disturb so that Dylan can listen to "Meditation for Inner Peace 7 | Relaxing Music for
    Meditation, Yoga, Studying | Fall Asleep Fast" on YouTube without interruption.</p>

    <p>After a while, Dylan has password recovery figured out, and users can have emails sent
    to them. Could users change their emails during the account recovery process and ruin
    everything? "Absolutely," Dylan answers, breaking the fourth wall, "And for that they will suffer
    by never recovering their account." Dylan moves on, ready to just enjoy his app.</p>

    <p>But Dylan cannot enjoy his app, because, in a quick glance at some server logs, he
    notices a spike in failed login attempts. He sighs, recognizing the spike as a telltale sign of brute
    force attacks. "Forgot about rate-limiting," he thinks. (Now someone <i>does</i> know Julien's
    password, and it's not Julien.) Thankfully, a lot of far more experienced programmers have
    developed some great <a href="https://www.geeksforgeeks.org/rate-limiting-algorithms-system-design/#rate-limiting-algorithms">rate-limiting algorithms</a> that Dylan can use. But will he do memory or
    database rate limit tracking? Oh boy, another fun decision to make.</p>

    <p>Did you know that cybercriminals can use botnets or rotate VPNs or proxies to get past
    rate limiting? Other-timeline Dylan sure didn't. That's when he discovers the magic of temporary
    account lockouts. You know how trying to sign in to a phone over and over results in a lock out
    of a few seconds, or minutes, or hours? Yes, that. He puts that into his website. Now,
    theoretically, if a hacker wanted to keep someone from using the site, they could use temporary
    account lockouts against Dylan by trying to sign in to their victim's account a bunch. They could
    also do that for every account they could find and practically shut down the whole site. That
    could be especially malicious if a user was in the middle of a very important task. There should
    be a name for that sort of attack, an attack that results in a denial of services. Hm.</p>

    <p>Dylan has now returned to his phone and turned off Do Not Disturb, to see a message
    from his friend Joe. "Hey Dylan," it says, "This guy Jake stole my password. If you had
    Multi-Factor Authentication, I think that could solve it. Also, I can't see the little checkbox that
    says 'Remember Me,' you do have one of those, right?"</p>

    <p>Back to Do Not Disturb the phone goes. MFA is complicated, but not impossible. All
    Dylan has to do is use Time-based One Time Passwords (TOTP). Then again, <a href="https://security.stackexchange.com/questions/242932/securely-detecting-and-correcting-time-drift-for-totp">time drift is a
      problem</a> to account for. As for 'Remember Me' functionality, that just requires some good ol'
    <a href="https://auth0.com/docs/secure/tokens/refresh-tokens/refresh-token-rotation">refresh token rotation</a>. Token theft and revocation could be an issue there, but Dylan really just
    wants to get on with his life.</p>

    <p>It's been years since that initial commit, but Dylan finally has a production-ready
    application that is nice and secure. Wait, it's been years. That means the cybersecurity rules have
    changed since he began this project. After patching a mysterious hole that showed up in the
    drywall of his house, Dylan takes a couple months to go through and patch the holes in the security of his website.</p>

    <p>Finally done, he ships it out into the world, shouting from the rooftops with what little
    energy he has left the link to his digital pride and joy. Users start trickling in. Things are looking
    good. But other timeline Dylan made a mistake, you see. Not so much a security mistake, but the
    mistake of having a "Have any questions or comments?" email in fine print at the bottom of the
    website.</p>

    <p>They do, Dylan. They do have questions and comments:</p>

    <p>"I lost access to my email so I can't recover my password."<br>
    "I changed my phone number, so I can't recover my password."<br>
    "I'd like to log in using Facebook, I don't really trust your website."<br>
    "I'd like to log in using Google, I use my google account for everything."<br>
    "I'd like to log in using Trello. You know what trello is, right?"<br>
    "I left my laptop open in starbucks while I walked to the bathroom. Somebody came up
    and erased all my budgeting info on there. You should probably have a time out or something
    like my bank does. Tell your software engineers to do that."<br>
    "I'm trying to log in on my phone, laptop, watch, fridge, and toaster, but i'm getting some
    weird message. Can you fix that?"</p>

    <p>Thankfully, Dylan can phone a friend. He doesn't have many, but the ones he has are very
    smart. "Reland," he says over the phone. "I've got a unique opportunity for you. It's an
    equity-based role, hope that's okay."</p>

    <p>Reland takes Dylan's laptop, and notices some cybersecurity threats going on (still). "You
    do have a system in place to log all the authentication events, right? I mean there's some security
    you'd have to take into account with it but you've done such a great job with that so far."</p>

    <p>Years go by. Decades, actually. Dylan has nothing left but his website, a laptop, and his wife. With
    the heartbeat monitor's <i>BEEP, BEEP, BEEP</i> as his only music, Dylan lifts his shriveled, withered hand and presses the
    "Merge branch" button for the last time. All security has been accounted for, even the security
    rules that have changed over the years. He can finally rest.</p>

    <p>His wife takes his hand; her hair is gray but it hasn't fallen out like Dylan's has. "Dylan,
    dear," she says. "I'm so proud of you for shipping your website… I just wanted to ask if you've
    considered allowing teams to use the same account, and having an admin over it all?"</p>

    <p>The nurse nods. "That's a great idea! I'm also curious to hear what kind of security you
    have in place now that LLMs are writing quantum code that is-"</p>

    <p><i>BEEEEEEEEEEP</i></p>
    <br>

    <p>Thankfully, we are not in that timeline. We are in the timeline where, before writing a letter of sign-in code, Dylan watched a
    <a href="https://www.youtube.com/watch?v=lxslnp-ZEMw">Theo video</a>, in which Theo says, "User password is a
    scourge and it needs to die." We are in the timeline where Dylan just reached for Clerk, then wrote a blog post about the other timeline.</p>

    <p>Thank god.</p>

    <p id="fineprint">(In case it wasn't clear, I'm not sponsored, it just looks like Clerk is genuinely the best option for me :) )</p>
    <p id="snap-up-button" @click="scrollToTop()">Back to Top</p>
</template>

<style scoped>

pre {
  border-radius: 10px;
  background-color: #7a7a7a36;
}

#snap-down-button {
  cursor: help;
  display: inline-block;
  margin-top: 7%;
  margin-bottom: 0%;
  opacity: .75;
  font-size: .9em;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-style: italic;
  text-decoration-line: underline;
}

#back-to-top {
  display: none;
  position: fixed;
  top: 20px;
  right: 45%;
  z-index: 99;
  border: none;
  outline: none;
  background-color: rgba(255, 255, 255, 0.82);
  color: white;
  cursor: pointer;
  padding: 15px;
  border-radius: 10px;
  font-size: 18px;
}

h3 {
  font-size: 1.6em;
  font-style: italic;
  font-family:Georgia, 'Times New Roman', Times, serif;
  font-weight: 500;
  margin-top: 3%;
}

p {
  font-size: 1.3em;
}

#sources {
  font-size: 1em;
  margin-top: .5em;
}

#source-box {
  border-style: double;
  border-radius: 2%;
}

#snap-up-button {
  cursor: help;
  display: inline-block;  
  margin-top: 4%;
  margin-bottom: 3%;
  opacity: .75;
  font-size: .9em;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-style: italic;
  text-decoration-line: underline;
}

#fineprint {
  font-size: .9em;
  text-align: center;
}

</style>
