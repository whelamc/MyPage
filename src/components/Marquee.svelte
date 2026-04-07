<script lang="ts">
  export let mqcontent: string;
  export let reverse = false;
  export let repeat = 6;
  export let duration = "24s";

  $: items = Array.from({ length: repeat }, () => mqcontent);
</script>

<div class="marquee" style={`--duration: ${duration};`}>
  <div class="marquee-track" class:reverse>
    <div class="marquee-group">
      {#each items as item}
        <span>{item}</span>
      {/each}
    </div>
    <div class="marquee-group" aria-hidden="true">
      {#each items as item}
        <span>{item}</span>
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
  :root {
    --size: clamp(10rem, 1rem + 40vmin, 30rem);
    --gap: calc(var(--size) / 14);
    --duration: 24s;
  }

  .marquee {
    width: 100%;
    height: 100%;
    overflow: hidden;
    white-space: nowrap;
    font-size: 5rem;
    user-select: none;
  }

  .marquee-track {
    display: inline-flex;
    width: max-content;
    height: 100%;
    animation: marquee var(--duration) linear infinite;
  }

  .marquee-group {
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    gap: var(--gap);
    padding-right: var(--gap);
  }

  .reverse {
    animation-direction: reverse;
  }

  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  @media (max-width: 768px) {
    .marquee {
      font-size: 3rem;
    }
  }
</style>
