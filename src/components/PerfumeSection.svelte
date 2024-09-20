<script lang="ts">
  const src = new URL('@/assets/images/pika-1726654102225.png', import.meta.url)
    .href;
</script>

<div class="perfume">
  <div class="left">
    <div class="image"><img {src} alt="perfume-preview" /></div>
  </div>
  <div class="right">
    <a href="https://perfume.whelam.com/" target="_blank">Perfume Ranking</a>
    <p>
      Discover luxury perfumes for every occasion. From niche fragrances to
      commercial scents, find your perfect aroma.
    </p>
  </div>
</div>

<style lang="scss">
  .perfume {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    gap: 10px;
    margin: 0 auto;
    padding: 5px;
    min-height: 80vh;
    .left,
    .right {
      width: 50%;
      font-style: italic;
      font-size: 1rem;
      padding: 5px 0;
    }
    .left {
      .image {
        border-radius: 5px;
        border: 2px solid #000;
        border-bottom: 4px solid #000;
        border-right: 4px solid #000;
        overflow: hidden;
        width: 80%;
        margin: 0 auto;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
    a {
      font-size: 1.2rem;
      padding: 4px 0;
      margin-right: 8px;
      color: #000;
      font-style: italic;
      padding-bottom: 1px;
      font-weight: bold;
      border-bottom: 1px solid#000;
    }
    p {
      margin-top: 1rem;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
        sans-serif;
      font-size: 1rem;
    }
  }
  @media (max-width: 1400px) {
    .perfume {
      flex-direction: column;
      width: calc(100% - 10px);
      .left {
        width: 100%;
      }
      .right {
        width: 100%;
      }
    }
  }
  @media (max-width: 768px) {
    .perfume {
      flex-direction: column;
      width: calc(100% - 10px);
      .left {
        width: 100%;
      }
      .right {
        width: 100%;
      }
    }
  }
</style>
