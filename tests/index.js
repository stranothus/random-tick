const { RandomTick } = require("../lib/index.js");

const tick = new RandomTick();

tick.on("tick", () => console.log(true));