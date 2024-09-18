<script lang="ts">
  import { Icon } from 'svelte-icons-pack';
  import {
    SiFacebook,
    SiInstagram,
    SiLinkedin,
    SiGithub
  } from 'svelte-icons-pack/si';
  import { SlArrowDownCircle } from 'svelte-icons-pack/sl';

  import JournalSection from '@/components/JournalSection.svelte';
  import PerfumeSection from '@/components/PerfumeSection.svelte';
  import ToolsSection from '@/components/ToolsSection.svelte';

  const src = new URL('@/assets/images/949BD2B7.png', import.meta.url).href;
  const introduction = `A Web Developer based in NoWhere, loves Jazz🎷, addicted to watching TV
          shows📺, enjoy Pour-over coffee☕, a big fan of Liverpool Football
          Club⚽, have a social phobia but is passionate about live music
          including Livehouse and Music Festivals🔊, a romantic❤️, considers
          pets🐾 as friends and enjoy chill stuff.`;
</script>

<div class="container">
  <div class="left">
    <p class="introduction">
      {introduction}
    </p>
    <div class="btn-group">
      <button
        on:click={() => window.open('https://www.facebook.com/guangdouzi/')}
        ><Icon src={SiFacebook} className="custom-icon" /><span
          >@WhelamChoi</span
        ></button
      >
      <button
        on:click={() => window.open('https://www.instagram.com/whelamchoi/')}
        ><Icon src={SiInstagram} className="custom-icon" /><span
          >@whelamchoi</span
        ></button
      >
      <button
        on:click={() => window.open('https://www.linkedin.com/in/whelamc/')}
        ><Icon src={SiLinkedin} className="custom-icon" /><span>@Whelam</span
        ></button
      >
      <button on:click={() => window.open('https://github.com/whelamc')}
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
  <div class="go-down-btn">
    <Icon src={SlArrowDownCircle} className="down-icon" />
  </div>
</div>
<div class="section-even"><PerfumeSection></PerfumeSection></div>
<div class="section-odd"><ToolsSection></ToolsSection></div>
<div class="section-even"><JournalSection></JournalSection></div>

<style lang="scss">
  .container {
    max-width: 1400px;
    width: calc(100% - 100px);
    margin: 0 auto;
    height: 100%;
    clear: both;
    display: flex;
    position: relative;
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
    .btn-group {
      width: 100%;
      margin-bottom: 2vh;
      line-height: 1.5;
      color: #000;
    }
    .introduction {
      font-weight: bold;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
        sans-serif;
      font-size: 1rem;
    }
    .btn-group button {
      border-radius: 5px;
      border: 2px solid #000;
      padding: 2px 4px;
      cursor: pointer;
      position: relative;
      border-bottom: 4px solid #000;
      border-right: 4px solid #000;
      margin-right: 4px;
      margin-bottom: 4px;
      font-size: 1rem;
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
      content: '';
      border: 4px solid #000;
      background-color: #faf2ee;
      position: absolute;
      width: 100%;
      height: 100%;
      left: 1.2vw;
      top: 1.2vw;
      z-index: -1;
    }
    .go-down-btn {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 1rem;
      margin: 0 auto;
      text-align: center;
      font-size: 3rem;
      animation: bounce 1s infinite;
      @keyframes bounce {
        0%,
        100% {
          transform: translateY(-25%);
          animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
        }
        50% {
          transform: translateY(0);
          animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
        }
      }
    }
  }

  .section-even {
    background-color: #77dd77;
    padding: 1rem 0;
  }
  .section-odd {
    background-color: transparent;
    padding: 1rem 0;
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
      .btn-group {
        margin-bottom: 1vh;
      }
      .introduction,
      .btn-group button {
        font-size: 14px;
      }
    }
  }
</style>
