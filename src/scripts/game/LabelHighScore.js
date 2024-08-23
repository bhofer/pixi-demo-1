import * as PIXI from "pixi.js";
import { App } from "../system/App";

export class LabelHighScore extends PIXI.Text {
    constructor() {
        super();
        this.x = App.config.highscore.x;
        this.y = App.config.highscore.y;
        this.anchor.set(App.config.highscore.anchor);
        this.style = App.config.highscore.style;
        this.renderScore();
    }

    renderScore(highscore = 0) {
        this.text = `High Score: ${App.config.highscore.pr}`;
    }
}