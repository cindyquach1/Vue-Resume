<template>
  <div>
    <h1>Contact Me</h1>
    <a class="social social-mail" href="https://gmail.com" target="_blank">
      <v-icon name="envelope" />
        <div class="front">
            <v-icon name="envelope" />
        </div>
        <div class="back">
          <v-icon name="envelope" />
        </div>
    </a>
    <a class="social social-github" href="https://github.com/cindyquach1" target="_blank">
      <v-icon name="brands/github" />
      <div class = "front">
        <v-icon name="brands/github" />
      </div>
      <div class="back">
        <v-icon name="brands/github" />
      </div>
    </a>
    <a class="social social-linkedin" href="https://www.linkedin.com/in/cindy-quach-83b0b0113/" target="_blank">
      <v-icon name="brands/linkedin" />
        <div class="front">
          <v-icon name="brands/linkedin" />
        </div>
        <div class="back">
          <v-icon name="brands/linkedin" />
        </div>
    </a>

  </div>
</template>

<script>
export default {
  name: 'Contact',
  data(){
    return {
      components: {
        'v-icon': Icon
      }
    }
  }
}
</script>
<style>
.fa-icon {
  width: auto;
  height: 2.5em;
  /* You would have to include the following two lines to make this work in Safari */
  max-width: 100%;
  max-height: 100%;
}

a.social,a.social:visited { color: #fff; }
a.social:hover { color: #fff; }

.social {
	margin: 1em 1em; width: 50px; height: 40px;
  display: inline-block; line-height: 7px; color: #fff;
	transform:rotateY(0deg);
	transition:transform .25s ease-out;
	transform-style:preserve-3d;
}

.social > div {
	width: 50px; background: rgb(24, 24, 24);;
  position: absolute; top: 0; left: 0; right: 0; bottom: 0;
  border-radius: 5%;
}

.social >.front {
  transform:translateZ(19px);
}

.social >.back {
	background: #3B5998; font-size: 2em;
	transform:rotateY(-100deg) translateZ(19px);
}
  
.social.social-github > .back { background: #f3f3f3; color: rgb(24, 24, 24); }
.social.social-linkedin > .back { background: #4875B4; }
.social.social-mail > .back {background: #f3f3f3; color: rgb(24, 24, 24); }

/* Hover */
.social:hover {
	transform: rotateY(100deg);
}
</style>