import * as PIXI from "pixi.js";
import { App } from "../system/App";

export class NewRecordLabel extends PIXI.Text {
    constructor() {
        super();
        
        this.x = App.app.view.width/2;
        this.y = 150;
        this.anchor.set(0.5, 0);
        this.style = {
            fontFamily: "Verdana",
            fontWeight: "bold",
            fontSize: 44,
            fill: ["#FF7F50"]
        };
        this.text = "New Record!";
    }

    rotateImage(delta) {
        this.image.rotation += 0.01 * delta;
    }
}