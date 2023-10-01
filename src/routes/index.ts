import Home from "@/pages/Home/index.svelte";
import Journal from "@/pages/Journal/index.svelte";
import Watching from "@/pages/Watching/index.svelte";

const routes = {
  "/": Home,
  "/journal": Journal,
  "/watching": Watching,
};

export default routes;
