import { Background } from "./Background";
import { Scene } from '../system/Scene';
import { TitleLabel } from "./TitleLabel";
import { StartButton } from "./StartButton";

export class StartScene extends Scene {
    create() {
        this.createBackground();
        this.createUI();
    }

    createUI() {

        this.titleLabel = new TitleLabel();
        this.container.addChild(this.titleLabel);

        this.startButton = new StartButton();
        this.container.addChild(this.startButton);
    }

    createBackground() {
        this.bg = new Background();
        this.container.addChild(this.bg.container);
    }

    destroy() {
        this.bg.destroy();
    }
}