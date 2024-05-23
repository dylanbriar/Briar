<script setup lang="ts"> 



</script>

<template>
  <div class="switcher switcher-1">
    <input type="checkbox" id="labeled">
    <label for="labeled"></label>
  </div>
</template>

<style scoped lang="scss">

// Define variables
$switch-width: 150px;
$switch-height: 40px;
$switch-radius: 25px;
$label-radius: 20px;

$white: var(--white);
$black: var(--black);
$grey: var(--grey);

// Mixin for shared styles
@mixin switch-base {
  position: relative;
  width: $switch-width;
  height: $switch-height;
  border-radius: $switch-radius;
}

// Styles for the switcher container
div.switcher {
  @include switch-base;

  &.switcher-1 {
    input {
      transition: 0.25s -0.1s;

      &:checked {
        &:before {
          color: $white;
          transition: color 0.6s -0.2s;
        }

        // Outer shape color from black to white (light mode)
        background-color: $white;
        transition: 0.6s -0.1s;

        // Inner shape color from light to dark
        + label {
          left: 15px;
          right: 90px;
          background: $black;
          transition: left 0.6s, right 0.4s 0.2s;
        }

        // Change 'Dark' text color during light mode
        &:after {
          color: $grey;
          transition: color 0.6s;
        }
      }

      &:not(:checked) {
        // Outer shape color from white to black (dark mode)
        background: $black;
        transition: 0.6s -0.1s;

        // Change 'Light' text color during dark mode
        &:before {
          color: $grey;
          transition: color 0.6s;
        }

        // Change 'Dark' text color during dark mode
        &:after {
          color: $black;
          transition: color 0.6s 0.2s;
        }

        // Inner shape color from dark to light
        + label {
          left: 102px;
          right: 10px;
          background: $white;
          transition: left 0.4s 0.2s, right 0.6s, background 0.45s -0.1s;
        }
      }
    }
  }

  label {
    position: absolute;
    top: 11px;
    bottom: 5px;
    border-radius: $label-radius;
  }

  input {
    @include switch-base;
    appearance: none;
    font-family: Garamond, Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;

    &:before,
    &:after {
      z-index: 2;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      color: $white;
    }

    &:before {
      content: 'Light';
      left: 20px;
    }

    &:after {
      content: 'Dark';
      right: 20px;
    }
  }
}
</style>