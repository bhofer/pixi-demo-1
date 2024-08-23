import * as PIXI from "pixi.js";
import { App } from "../system/App";

export class StartButton extends PIXI.Container {
    constructor() {
        super();

        this.bg = new PIXI.Graphics();
        this.bg.beginFill(0x42654D);
        this.bg.drawRoundedRect(0, 0, 300, 100, 10);
        this.bg.endFill();
        this.bg.x = -150;
        this.bg.y = -50;
        this.addChild(this.bg);

        this.text = new PIXI.Text("Start Game", {
            fontFamily: "Verdana",
            fontWeight: "bold",
            fontSize: 44,
            fill: ["#FFFFFF"],
        });
        this.text.anchor.set(0.5);
        this.addChild(this.text);

        this.x = App.app.view.width / 2;
        this.y = App.app.view.height / 2;
        this.interactive = true;
        this.buttonMode = true;
        
        this.on('pointerover', () => {
            this.bg.tint = 0x2f8f57;
        });
        this.on('pointerout', () => {
            this.bg.tint = 0xFFFFFF;
        });
        this.on('pointerdown', () => {
            this.bg.tint = 0x1e4e2f;
        });
        this.on('pointerup', () => {
            this.bg.tint = 0x2f8f57;
            App.scenes.start("Game");
        });
    }
}
