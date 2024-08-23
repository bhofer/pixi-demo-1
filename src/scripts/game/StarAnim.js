import * as PIXI from "pixi.js";
import { App } from "../system/App";

export class StarAnim extends PIXI.Text {
    constructor() {
        super();

        this.image = App.sprite("star");
        this.image.anchor.set(0.5);
        this.image.x = App.app.view.width/2;
        this.image.y = 170;
        this.image.scale.set(2);
        this.addChild(this.image);
        App.app.ticker.add(this.rotateImage.bind(this));
    }

    rotateImage(delta) {
        this.image.rotation += 0.025 * delta;
    }
}