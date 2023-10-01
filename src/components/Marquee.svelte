<script lang="ts">
</script>

<div class="marquee">
  <div class="marquee-content">
    <span>{$$props.mqcontent}</span>
    <span>{$$props.mqcontent}</span>
    <span>{$$props.mqcontent}</span>
  </div>
  <div class="marquee-content" aria-hidden="true">
    <span>{$$props.mqcontent}</span>
    <span>{$$props.mqcontent}</span>
    <span>{$$props.mqcontent}</span>
  </div>
</div>

<style lang="scss">
  :root {
    --size: clamp(10rem, 1rem + 40vmin, 30rem);
    --gap: calc(var(--size) / 14);
    --duration: 30s;
  }
  .marquee {
    width: 100%;
    height: 100%;
    white-space: nowrap;
    font-size: 5rem;
    overflow: hidden;
    display: flex;
    user-select: none;
    gap: var(--gap);
    .marquee-content {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: space-around;
      gap: var(--gap);
      min-width: 100%;
      animation: marquee var(--duration) linear infinite;
    }
  }

  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
</style>
