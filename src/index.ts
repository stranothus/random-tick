import { EventEmitter } from "events";

export class RandomTick extends EventEmitter {
    tickSpeed:number = 60;
    chance:number = 50;
    loop:NodeJS.Timer;
    paused:boolean = true;
    constructor(tickSpeed:number = 60, chance:number = 50) {
        super();

        this.tickSpeed = tickSpeed;
        this.chance = chance;

        this.begin();
        this.emit("ready");
    }
    begin() {
        this.loop = setInterval(() => {
            this.emit("loop");
            if(Math.round(Math.random() / (1 / this.chance))) this.emit("tick");
        }, this.tickSpeed);
        this.paused = false;
    }
    pause() {
        clearInterval(this.loop);
        this.paused = true;
        this.emit("pause");
    }
    unpause() {
        if(this.paused) {
            this.emit("unpause")
            return this.begin();
        }

        this.emit("error");
    }
}