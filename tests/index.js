import RandomTick from "../lib/index.js";

const tick = new RandomTick();

tick.on("tick", () => console.log(true));