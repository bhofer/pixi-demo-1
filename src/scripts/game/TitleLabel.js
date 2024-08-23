import * as PIXI from "pixi.js";
import { App } from "../system/App";

export class TitleLabel extends PIXI.Text {
    constructor() {
        super();
        this.x = App.app.view.width/2;
        this.y = 250;
        this.anchor.set(0.5, 0);
        this.style = {
            fontFamily: "Verdana",
            fontWeight: "bold",
            fontSize: 44,
            fill: ["#42654D"]
        };
        this.text = "Hero Jump";
    }
}