<script lang="ts">
  import Icon from "svelte-icons-pack/Icon.svelte";
  import SiFacebook from "svelte-icons-pack/si/SiFacebook";
  import SiInstagram from "svelte-icons-pack/si/SiInstagram";
  import SiLinkedin from "svelte-icons-pack/si/SiLinkedin";
  import SiGithub from "svelte-icons-pack/si/SiGithub";

  import { link } from "svelte-spa-router";

  const src = new URL("@/assets/images/949BD2B7.png", import.meta.url).href;
  const introduction = `A Web Developer based in NoWhere, loves Jazz🎷, addicted to watching TV
          shows📺, enjoy Pour-over coffee☕, a big fan of Liverpool Football
          Club⚽, have a social phobia but is passionate about live music
          including Livehouse and Music Festivals🔊, a romantic❤️, considers
          pets🐾 as friends and enjoy chill things.`;
</script>

<div class="container">
  <div class="left">
    <p class="introduction">
      {introduction}
    </p>
    <div class="contact">
    <!-- todo -->
      <a use:link href="/journal">Know My Life</a>
      <!--<a use:link href="/watching">Im Watching</a> -->
      <a href="mailto:i@whelam.com">Contact Me</a>
    </div>
    <div class="btn-group">
      <button
        on:click={() => window.open("https://www.facebook.com/guangdouzi/")}
        ><Icon src={SiFacebook} className="custom-icon" /><span
          >@WhelamChoi</span
        ></button
      >
      <button
        on:click={() => window.open("https://www.instagram.com/whelamchoi/")}
        ><Icon src={SiInstagram} className="custom-icon" /><span
          >@whelamchoi</span
        ></button
      >
      <button
        on:click={() => window.open("https://www.linkedin.com/in/whelamc/")}
        ><Icon src={SiLinkedin} className="custom-icon" /><span>@Whelam</span
        ></button
      >
      <button on:click={() => window.open("https://github.com/whelamc")}
        ><Icon src={SiGithub} className="custom-icon" /><span>@whelamc</span
        ></button
      >
    </div>
  </div>
  <div class="right">
    <div class="image">
      <img {src} alt="avatar" />
    </div>
  </div>
</div>

<style lang="scss">
  .container {
    max-width: 1400px;
    width: calc(100% - 100px);
    margin: 0 auto;
    height: 100%;
    clear: both;
    display: flex;
    padding: 1.5vh 0;
    .left,
    .right {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .introduction,
    .contact,
    .btn-group {
      width: 100%;
      margin-bottom: 2vh;
      line-height: 1.5;
    }
    .introduction {
      font-weight: bold;
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
      font-size: 1rem;
    }
    .contact a {
      font-size: 1.2rem;
      padding: 4px 0;
      margin-right: 8px;
      color: #000;
      font-style: italic;
      padding-bottom: 1px;
      font-weight: bold;
      border-bottom: 1px solid#000;
    }
    .btn-group button {
      border-radius: 5px;
      border: 2px solid #000;
      padding: 4px 8px;
      cursor: pointer;
      position: relative;
      border-bottom: 4px solid #000;
      border-right: 4px solid #000;
      margin-right: 4px;
      margin-bottom: 4px;
      font-size: 1.2rem;
    }
    .btn-group button:hover {
      background-color: #bafca2;
    }
    :global(.custom-icon) {
      vertical-align: middle;
      margin-right: 4px;
    }
    .btn-group button span {
      vertical-align: middle;
    }
    .right {
      padding: 20px;
    }
    .right .image {
      margin: 0 auto;
      width: 350px;
      height: auto;
      position: relative;
      z-index: 1;
    }
    .right .image img {
      width: 100%;
      min-height: 18vw;
      border: 4px solid #000;
    }
    .right .image::after {
      content: "";
      border: 4px solid #000;
      background-color: #faf2ee;
      position: absolute;
      width: 100%;
      height: 100%;
      left: 1.2vw;
      top: 1.2vw;
      z-index: -1;
    }
  }

  @media (max-width: 1400px) {
    .container {
      width: calc(100% - 100px);
      .right .image {
        max-width: 100%;
      }
    }
  }
  @media (max-width: 768px) {
    .container {
      width: 100%;
      padding: 0 20px;
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      .left,
      .right {
        width: 100%;
      }
      .left {
        order: 2;
      }
      .right {
        order: 1;
        padding: 2vh 0;
      }
      .right .image {
        width: 60%;
      }
      .right .image::after {
        left: 4px;
        top: 4px;
      }
      .right .image img {
        min-height: 10vw;
      }
      .introduction,
      .contact,
      .btn-group {
        margin-bottom: 1vh;
      }
      .introduction,
      .btn-group button {
        font-size: 14px;
      }
      .contact a {
        font-size: 16px;
      }
    }
  }
</style>
