<script lang="ts">
  import Router from "svelte-spa-router";
  import routes from "@/routes";
  import Marquee from "@/components/Marquee.svelte";
  const mqcontent = "Whelam Choi";
</script>

<header>
  <Marquee {mqcontent} />
</header>
<section>
  <Router {routes} />
</section>
<footer>
  <Marquee {mqcontent} />
</footer>

<style lang="scss">
  header,
  footer {
    width: 100%;
    text-transform: uppercase;
    font-family: "Lexend Mega", Arial, sans-serif;
    padding: 0.5vh 0;
  }
  header {
    border-bottom: 4px solid #000;
  }
  footer {
    border-top: 4px solid #000;
  }
  section {
    flex: 1;
  }
</style>
