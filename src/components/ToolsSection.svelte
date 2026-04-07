<script lang="ts">
  const src = new URL('@/assets/images/pika-1726654121977.png', import.meta.url)
    .href;
</script>

<div class="mag-card">
  <div class="media">
    <img {src} alt="planb-preview" />
  </div>
  <div class="content">
    <p class="kicker">FEATURE STORY</p>
    <a href="https://webchoi.eu.org/" target="_blank">Plan B</a>
    <p>
      This project as a platform to showcase alternative solutions available on
      the internet. Whether you're seeking alternatives to websites, tools, or
      services, we provide a wide range of options.
    </p>
  </div>
</div>

<style lang="scss">
  .mag-card {
    width: calc(100% - 100px);
    max-width: 1400px;
    min-height: 68vh;
    margin: 0 auto;
    padding: 1rem;
    border: 3px solid #000;
    border-right-width: 6px;
    border-bottom-width: 6px;
    background: #d8f8bf;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;
  }

  .media,
  .content {
    width: 50%;
  }

  .media img {
    display: block;
    width: 100%;
    border: 3px solid #000;
    border-right-width: 5px;
    border-bottom-width: 5px;
    background: #fff;
  }

  .kicker {
    display: inline-block;
    margin-bottom: 0.7rem;
    padding: 0.18rem 0.45rem;
    border: 2px solid #000;
    background: #bafca2;
    font-family: 'Lexend Mega Thin', 'Lexend Mega', Arial, sans-serif;
    font-size: 0.8rem;
    letter-spacing: 0.08em;
  }

  a {
    display: inline-block;
    font-size: 1.45rem;
    color: #000;
    font-weight: 700;
    font-family: 'Lexend Mega', Arial, sans-serif;
    line-height: 1.1;
    margin-bottom: 0.75rem;
  }

  .content p:last-child {
    line-height: 1.6;
    font-size: 1rem;
    font-family: 'Lexend Mega Thin', 'Lexend Mega', Arial, sans-serif;
  }

  @media (max-width: 1400px) {
    .mag-card {
      width: calc(100% - 100px);
    }
  }

  @media (max-width: 900px) {
    .mag-card {
      flex-direction: column;
      min-height: auto;
    }
    .media,
    .content {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    .mag-card {
      width: calc(100% - 32px);
      padding: 0.85rem;
    }
    a {
      font-size: 1.2rem;
    }
  }
</style>
