<script lang="ts">
  import { Icon } from 'svelte-icons-pack';
  import {
    SiFacebook,
    SiInstagram,
    SiLinkedin,
    SiGithub
  } from 'svelte-icons-pack/si';

  import JournalSection from '@/components/JournalSection.svelte';
  import PerfumeSection from '@/components/PerfumeSection.svelte';
  import ToolsSection from '@/components/ToolsSection.svelte';

  const src = new URL('@/assets/images/949BD2B7.png', import.meta.url).href;
  const issueDate = 'APR 2026';
  const issueNo = 'ISSUE 04';
  const coverTitle = 'WHELAM CHOI';
  const introduction = `A Web Developer based in NoWhere, loves Jazz🎷, addicted to watching TV
          shows📺, enjoy Pour-over coffee☕, a big fan of Liverpool Football
          Club⚽, have a social phobia but is passionate about live music
          including Livehouse and Music Festivals🔊, a romantic❤️, considers
          pets🐾 as friends and enjoy chill stuff.`;
</script>

<div class="home">
  <section class="cover">
    <div class="cover-topline">
      <span class="stamp">{issueNo}</span>
      <span class="stamp">{issueDate}</span>
      <span class="stamp">PERSONAL EDITION</span>
    </div>

    <div class="cover-grid">
      <div class="cover-main">
        <h1>{coverTitle}</h1>
        <p class="cover-intro">{introduction}</p>
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

      <div class="cover-shot">
        <div class="image">
          <img {src} alt="avatar" />
        </div>
        <p class="image-note">
          Cover Story: coder, collector of details, and maker of weird little
          internet things.
        </p>
      </div>
    </div>

  </section>

  <section class="feature feature-even">
    <header class="feature-head">
      <span>01 / FEATURE</span>
      <h2>Perfume Ranking</h2>
    </header>
    <PerfumeSection></PerfumeSection>
  </section>

  <section class="feature feature-odd">
    <header class="feature-head">
      <span>02 / FEATURE</span>
      <h2>Plan B</h2>
    </header>
    <ToolsSection></ToolsSection>
  </section>

  <section class="feature feature-even">
    <header class="feature-head">
      <span>03 / NOTEBOOK</span>
      <h2>Daily Mood & Signals</h2>
    </header>
    <JournalSection></JournalSection>
  </section>
</div>

<style lang="scss">
  .home {
    --ink: #111;
    --paper: #90ee90;
    --paper-alt: #bafca2;
    --paper-stripe: #82dd82;
    --panel: #d8f8bf;
    color: var(--ink);
    background: repeating-linear-gradient(
      -45deg,
      var(--paper),
      var(--paper) 24px,
      var(--paper-stripe) 24px,
      var(--paper-stripe) 48px
    );
    min-height: 100%;
  }

  .cover {
    max-width: 1400px;
    width: calc(100% - 100px);
    margin: 0 auto;
    min-height: calc(100dvh - 10rem);
    display: grid;
    grid-template-rows: auto 1fr;
    gap: 1rem;
    padding: 1rem 0 1rem;
  }

  .cover-topline {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .stamp {
    border: 2px solid var(--ink);
    border-bottom-width: 4px;
    border-right-width: 4px;
    background: var(--panel);
    padding: 0.3rem 0.6rem;
    font-family: 'Lexend Mega Thin', 'Lexend Mega', Arial, sans-serif;
    font-size: 0.8rem;
    letter-spacing: 0.08em;
  }

  .cover-grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(280px, 420px);
    gap: 1.2rem;
    align-items: stretch;
    min-height: 0;
    height: 100%;
  }

  .cover-main {
    border: 3px solid var(--ink);
    border-right-width: 6px;
    border-bottom-width: 6px;
    background: var(--panel);
    padding: 1rem;
    min-width: 0;
    min-height: 0;
    height: 100%;
    overflow: visible;
    h1 {
      font-family: 'Lexend Mega', 'Arial Black', sans-serif;
      font-size: clamp(2rem, 5vw, 4rem);
      line-height: 0.95;
      margin-bottom: 1rem;
    }
  }

  .cover-intro {
    line-height: 1.6;
    margin-bottom: 1rem;
    font-size: 1rem;
    font-family: 'Lexend Mega Thin', 'Lexend Mega', Arial, sans-serif;
  }

  .btn-group button {
    border: 2px solid var(--ink);
    border-bottom-width: 4px;
    border-right-width: 4px;
    padding: 0.2rem 0.45rem;
    cursor: pointer;
    margin-right: 0.35rem;
    margin-bottom: 0.35rem;
    font-size: 0.95rem;
    background: #f6f6f6;
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
    user-select: none;
  }

  .cover-shot {
    border: 3px solid var(--ink);
    border-right-width: 6px;
    border-bottom-width: 6px;
    background: var(--paper-alt);
    padding: 0.9rem;
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
    min-width: 0;
    min-height: 0;
    height: 100%;
  }
  .cover-shot .image {
    width: 100%;
    position: relative;
    min-height: 0;
    display: block;
  }
  .cover-shot .image img {
    width: auto;
    max-width: 100%;
    max-height: min(48svh, 480px);
    height: auto;
    border: 3px solid var(--ink);
    display: block;
    object-fit: contain;
  }
  .image-note {
    font-family: 'Lexend Mega Thin', 'Lexend Mega', Arial, sans-serif;
    font-size: 0.95rem;
    font-style: italic;
    line-height: 1.45;
    overflow-wrap: anywhere;
  }

  .feature {
    border-top: 4px solid var(--ink);
    padding: 1rem 0;
  }
  .feature-even {
    background-color: #7fdf7f;
  }
  .feature-odd {
    background-color: #90ee90;
  }
  .feature-head {
    width: calc(100% - 100px);
    max-width: 1400px;
    margin: 0 auto 0.8rem;
    span {
      display: inline-block;
      font-family: 'Lexend Mega Thin', 'Lexend Mega', Arial, sans-serif;
      font-size: 0.82rem;
      letter-spacing: 0.08em;
      border: 2px solid var(--ink);
      background: var(--panel);
      padding: 0.2rem 0.4rem;
      margin-bottom: 0.5rem;
    }
    h2 {
      font-family: 'Lexend Mega', 'Arial Black', sans-serif;
      font-size: clamp(1.4rem, 2.6vw, 2.3rem);
      line-height: 1.1;
    }
  }

  @media (max-width: 1400px) {
    .cover {
      width: calc(100% - 100px);
      min-height: calc(100dvh - 10rem);
    }
    .feature-head {
      width: calc(100% - 100px);
    }
  }

  @media (max-width: 768px) {
    .cover {
      width: 100%;
      min-height: calc(100dvh - 10rem);
      padding: 0.8rem 16px 1rem;
    }
    .cover-grid {
      grid-template-columns: 1fr;
      gap: 0.9rem;
    }
    .cover-shot .image img {
      width: 100%;
      max-height: none;
    }
    .feature-head {
      width: 100%;
      padding: 0 16px;
    }
  }
</style>
