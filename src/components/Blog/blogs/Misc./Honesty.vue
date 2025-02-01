<!-- this is hard coded while I work on setting up Auth 
 enjoy this absolute mess -->

<template>
  <br>
  <h3>Lately I’ve been thinking a lot about honesty. </h3>
  <p>I think it’s been sort of brewing in my head for the past year or so, but recently two things stirred the pot, so to speak. The first was a video from Theo Browne, aka t3dotgg on YouTube (three sentences into my first blog post and we already have a mention of Theo. That makes me a senior dev, I think). In Getting a Dev Job in 2025, he says at the 9:10 mark, “There's one key thing that has been going down since all of [the A.I. hype] started: trust. Trust is a hard-to-come-by commodity nowadays. Everybody is lying, everybody's AI generating and hallucinating shit. Every resume coming in is questionable at best. But you know what isn't? Your own experience, and the people that you have worked with. The best thing you can possibly have when looking for a job is trust.” (Browne, 2024)
  <br><br>
  I think it was the next day that I listened to the recorded version of a livestream from Michael Chan and Taylor Desseyn. They also bring up the importance of trust, with Chan quoting a man that had interviewed him: “Trust is, like, the most important thing when building a brand, building a company, making content, and you are a person that people trust because you open up and you talk honestly about a thing.” To drive home the point, five minutes later at the 30:30 mark, he talks about his experience interviewing at Netflix. “Turns out I wasn’t a good fit, and that came up in the interview process. I actually let him know, I was like, ‘You know what, this sounds like it's probably not the ideal fit for me.’ …It took him a second to recover. He’s like, ‘No one’s ever said that to me as a Netflix recruiter.’” (Chan, 2025)
  <br><br>
  These things really, really struck me. Trust and being trustworthy is so important, in life as a whole but more specifically in the software engineering industry. There truly is a lot of dishonesty, and that, as you’ll see, is a huge part of my story. 
  <br><br>
  This is the first of what I hope to be many blog posts. In the spirit of honesty, I’ll tell you that I got prepared last year to produce content but didn't have a manageable goal, and, in classic ADHD fashion, I could never get it rolling. This year, however, my goal is to make content and to do so consistently. More specifically, to put one out every month, and after 6 months do two per month. Whether or not I stick to that remains to be seen. For now, I thought a nice, easy place to start is who I am, how I got here, and how honesty ties into it all. This post will serve as a preface to those that follow. 
  </p>

  <h3>Context, if you will. </h3>

  <p>
  I was have always been the “why?” kid. From the moment I figured out words I pushed that question until I reached the proverbial dead end of “Cus that’s how God made it.” My grandmother always loves to cite the example of when I started asking questions about how lawyers work because of a TV commercial…when I was 3. So, naturally, science was the way to go. I was fascinated with dinosaurs and bugs, then weather, then linguistics, then astrophysics, then quantum mechanics. I began to go down the road of a Ph.D. in some sort of Physics, but after a year and a half in college I realized I couldn’t really provide for a family, monetarily or emotionally, if I pursued that path, and having a family that I can provide for is my #1 goal/passion, before any career choice.
  <br><br>
  That left me in the classic college quandary of “What do I want to do with my life?” 
  <br><br>
  I juggled a lot of ideas. Music? Didn’t pay enough. Finance? Too math heavy. Linguistics? Not enough job opportunities. I landed on Public Relations, because my strengths lie in giving presentations and professional writing, but I wasn’t excited by any means. I wouldn’t get to speak on interesting things, and it would be a long time before I could provide a house-and-picket-fence income. 
  <br><br>
  “Have you thought about programming?” my friend Tarek asked me at the conclusion of a handful of arcade game shenanigans. 
  <br><br>
  I knew immediately the answer to that question. “I have, but it’s so math heavy.” Little did he know it was actually the first result on a career quiz that I had taken in my EDUC-1300 course, one that aimed to help give a student ideas on what careers might be right for them. 
  <br><br>
  “You don’t have to be good at math. In fact, you don’t have to go to college at all,” he contended with a chuckle. Beer in hand, he went on to explain how he and both his brothers had gotten into programming through non-traditional means. “It literally feels like a cheat code to life..just go to a bootcamp for like..3 months, do some job searching for a couple months after that, and you'll be making 6 figures by this time in a couple years.” I was skeptical, and had a lot of questions for him, not the least of which was his thoughts on A.I. “That’s only going to root out garbage engineers and make good engineers better,” he said. “I will say, if you’re looking for a job by the end of this year [2023], it might be a little rough. But it will bounce back next year.” 
  <br><br>
  I took that and ran with it. I immediately began self studying through online resources, and attended one grand institution of infinite wisdom known as YouTube University (shoutout to Harvard’s CS50x). Right off the bat, I was able to tap into that love of the question “why?” I learned why green screens work, I learned why bits can be used to represent numbers. I learned about variables, strings, booleans, arrays. Then I learned about console.log and JavaScript array methods, and then…and THEN… I learned about…wait for it…functions. You’re telling me that I could basically make my OWN methods? That do whatever I want? And now..what’s this? I could put them inside an object? And I could name these things whatever I want?
  <br><br>
  All the while I was looking into what the “best”coding bootcamp was. Then, after – I kid you not – three weeks of research, including attending webinars and asking questions, I finally landed on one called Codesmith.
  </p>

  <h3>Let me tell you a bit about Codesmith.</h3>

  <p>
  Codesmith has a fairly rigorous technical interview to even attend their full-time program. Actually, that's something that really drew me to them. After the studying I had done up to the application deadline, I was able to pass after two out of three attempts.
  <br><br>
  In terms of educational curriculum, Codesmith is phenomenal. They really emphasize learning by doing, reading docs, and figuring things out without being handed step-by-step tutorials. As opposed to lots of bootcamps that have one project, such as a website or something, built by each student individually, it has a series of 4 projects, each more complex than the last, with only the first being a solo project. The rest are all done in groups of four, and they get more complex than simple websites. 
  <br><br>
  For instance, my team put together BuQL, a GraphQL caching solution for the Bun runtime environment.  Essentially, my team and I wanted to create a way to cache GraphQL query responses using a Redis cache, so that if the query was run again the response time was drastically reduced. While it’s a manageable task for a developer to write the code to do this themselves, we put together this NPM package as a way to have an easily accessible API that handles the code for you. There are some runtime-specific aspects, so we created it specifically with Bun in mind. 
  <br><br>
  At the end of this project, however, was the job search portion. When I was researching bootcamps, this portion really piqued my interests. Not only could I be given a great educational structure, a beefier portfolio than most grads, but I could be mentored through getting a job as well!
  <br><br>
  If you talk to any Codesmith grad these days, they will likely tell you that “Hiresmith,” as we call this job search portion, is…not great. As one grad I talked to put it, “Hiresmith was made during a bull market. We're in a bear market.” Codesmith has been going on since 2015, and it seems as if they iterated and iterated on their hiring advice until 2022 when all signs pointed to them having perfected it. Their students were getting hired left and right, what more advice could they give??
  <br><br>
  Then 2023 came, then 2024. Students were disappointed when cold emailing hiring managers at random companies wasn't working, even after following the instructions of how to hunt them down to a T. Grads had to face the fact that cover letters aren't being read like we were told, and that posting our TechTalks™ wouldn't have recruiters instantly flooding our DMs. I sat through hour-long lectures telling me that having only a few words on a line of my resume instead of filling the whole line would create whitespace that could be the difference of getting an interview or not. We had training sessions focused on keeping cover letters under 130 words, then perfecting the cold message to the hiring manager afterwards, then perfecting the follow-up (or “double down”) message after that. These took hours. Plural. 
  <br><br>
  I kept bouncing back and forth on whether this advice was good advice. Hell, I still do. Some people think it's the worst advice they've ever received, that grads should ignore any and all hiring advice coming from the mouth of a Codesmith employee. Others “drink the Kool aid,” per se, and will say that you should live and die by the hiring advice given by Codesmith because “it always works.” I'm not sure that either of these camps are completely right; the truth probably lies somewhere in between. 
  <br><br>
  What's more, the head of the Hiresmith portion told us to reject any junior roles we were offered; Codesmith only produces mid-level engineers, in his mind. He actually shamed anyone who took anything less than a $100k salary for not valuing themselves enough. And you know what? Maybe he was right. Maybe some people did undervalue themselves. 
  <br><br>
  But this is a good time to remind you, dear reader: I had no degree, I had no on-the-job experience. At the point he told all of us this, I had been learning programming for about 7 months. I had failed on the first project we were tasked with, and had to essentially retake every single test they had over each learning module. I didn't know how to get a local client or a local server up and running. I didn't know how to use git branching. I basically knew how to write the basics of HTML and CSS, and knew how to do easy to mid level algorithms in JS. That was about it. 
  <br><br>
  Then Codesmith ended. I had to go back to work to pay off the $11,000 in loans I owed and to afford groceries. My wife also worked full time, despite struggling with fibromyalgia, so I had to take care of most of the housework as well. While my cohort mates were applying for jobs, I was doing the dishes. While they were grinding leetcode, I was making Thundercloud sandwiches. While they got to think about and work on projects, I was making dinner for my wife and trying to think what we would have tomorrow. 
  </p>

  <h3>So, about that whole honesty thing. </h3>

  <p> If Tarek was a little more honest about how long it would really take to learn programming, I probably would have been more diligent about how I learned. If the webinars I attended before entering Codesmith had been more honest about how hard it would be for someone in my position, I would have been able to better prepare my wife for what we were up against. If the Codesmith staff had been more upfront about what was good to know/be skilled in for the first day on the job, I would have been able to better identify where and how I needed to improve throughout the course. If I had been told by the hiring portion that I might not be cut out for a senior position, I would have avoided looking like an idiot telling people I was a “mid-level engineer” with 0 years of industry experience. Instead, from beginning to end, I was drowned in positivity. “Don't worry about the job market!” “I've known people in a position like yours who went on to get a great job!” “Don't worry about the imposter monster, you're a bad ass engineer!” 
  <br><br>
  Don’t get me wrong, I think people as a whole need to be more encouraging and positive, but a spoonful of sugar is supposed to come with medicine. It’s not helpful to just be given constant spoonfuls of sugar. My stomach hurts. 
  <br><br>
  It wasn’t until I talked to lots of Codesmith grads and other engineers that I started to get some medicine. Honesty about how tough my position was, honesty about how to view Codesmith, honest about the expectations I should set for myself and for my career. None of these people did it in a rude or demeaning way, I could feel how much they were trying to just cut the bullshit for my benefit. One that stands out in particular was a guy named Reland; he was the first to really mentor me and tell me what I needed to know. 
  <br><br>
  There was also a third thing that added to my whole honesty thought train. Around the 49 minute mark of the Syntax podcast, episode 803, Glauber Costa talks about his experience working on Linux way back in the day. It was early on in his career, and he made a pull request that, in his mind, cleaned up some lines of code. The response he got? “This is the worst piece of code I've ever seen in my life. You managed to introduce 3 bugs in a single line of Node, and people like you should never be allowed to get close to a keyboard again.” 
  <br><br>
  Alright, maybe that was a bit harsh, but Glauber, now the founder and CEO of Turso, went on to say, “The way I saw the tech industry back then was this very fake place in which nobody's telling the truth at any time…And I just consider that attitude at the time [to] be just a breath of fresh air…This person is telling me that I should never get close to a keyboard again because he thinks I should never get close to a keyboard again. And in a sense, I did not like hearing that. But I like the fact that he was not telling me, ‘You know what? I wish, in future contributions, we should strive for a more synergetic approach to get our OKRs in a better place to [etc.]’ So I found that refreshing…”(Bos, 2024)
  <br><br>
  I’m definitely not seeking for someone to tell me to never approach a keyboard again. But I am declaring to the world here to feel welcome to critique me and point me in a better direction. Granted, I may decide not to go down that direction, but at least point it out to me. If someone’s got food in their teeth, let them know where it is! If someone smells bad, let them know to bring some deodorant next time! If my code or mentality is bad, tell me how it might be made better! Ugh!
  <br><br>
  I digress. Point is, </p>

  <h3>I really appreciate honesty, and I wish that was the standard. </h3>

  <p> I would like the message here to be “So let’s all go out and be brutally honest!” I mean, if you feel that conviction, hell yea! Do it! But, for now I know that’s just how the corporate world is. Interviewees will always put on a performance. Interviewers will do the same. Certain team leads, scrum masters, managers, etc. will dance around giving direct criticism. CEOs will continue to say that their company could do AGI if they wanted to and that a rival free product that's better than the CEO’s way too expensive product played unfairly and should be legally hunted down…. tale as old as time. 
  <br><br>
    A stereotypical-but-true lesson is that you can’t change the world, but you can change yourself. So, my promise to you, dear reader, is that I’m going forward as best I can in honesty. If I don’t know the answer, I will tell you. If I appreciate what you do, I will tell you. If I think what you’re doing could be done better, I will tell you. If you ask me “How are you doing?” I will tell you (don’t worry, I’ll keep it to a few words, I won’t trauma dump). I’m not going to avoid calling Codesmith a glorified bootcamp, despite what the advisors told me (it is glorified, don’t get me wrong; I think they’re still better, but they really are basically a bootcamp). I’m not going to put a label on what level engineer I am, because at this point I have no idea. 
  <br><br>
  Yeah, I want a job. Yeah, being honest might hinder that. I don’t know. I might get scared sometimes and mess up this whole honesty pursuit sometimes. There’s some honesty for you right there. But at the end of the day, I’m going to try. 
  <br><br>
  In the words of the great renown sage of unmatched wisdom and prophetic revelation, Hykeem Jamaal Carter Jr., “Let’s be honest.”  </p>
  <br>
  <div id="source-box">
    <p style="margin: 0%;"><b>Sources</b></p>
    <p id="sources">
      &nbsp;Bos, Wes, et al. “The SQLite Takeover with Turso’s Glauber Costa.” <i>Syntax.Fm</i>, Sentry, 2 Aug. 2024, 
      <br>https://syntax.fm/show/803/the-sqlite-takeover-with-turso-s-glauber-costa/transcript. Accessed 31 Jan. 2025. 
      <br><br>
      &nbsp;Browne, Theo, creator. <i>Getting a Dev Job in 2025.</i> YouTube, 26 Dec. 2024, 
      <br> &nbsp;https://youtube.com/shorts/bwye4wxQZXc?si=ltQfsqCys-L4-PjT. Accessed 1 Jan. 2025. 
      <br><br>
      &nbsp;Chan, Michael and Taylor Desseyn, creators. <i>Finding a Job Rn with Taylor Desseyn.</i> YouTube, 10 Jan. 2025, 
      <br> &nbsp;https://www.youtube.com/live/ESUkmtsTLI0?si=5JwtMkba4mYTGgpN. Accessed 31 Jan. 2025. 
    </p>
  </div>
</template>

<style scoped>

h3 {
  font-size: 1.6em;
  font-style: italic;
  font-family:Georgia, 'Times New Roman', Times, serif;
  font-weight: 500;
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

</style>