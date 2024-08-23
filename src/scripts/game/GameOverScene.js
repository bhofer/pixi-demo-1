import { App } from '../system/App';
import { Background } from "./Background";
import { Scene } from '../system/Scene';
import { TitleLabel } from "./TitleLabel";
import { StartButton } from "./StartButton";
import { LabelHighScore } from "./LabelHighScore";
import { NewRecordLabel } from "./NewRecordLabel";
import { StarAnim } from "./StarAnim";

export class GameOverScene extends Scene {
    create() {
        this.createBackground();
        this.createUI();
    }

    createUI() {

        this.titleLabel = new TitleLabel();
        this.titleLabel.text = "Game Over";
        this.container.addChild(this.titleLabel);

        if (App.config.highscore.newRecord)
        {
            this.starAnim = new StarAnim();
            this.container.addChild(this.starAnim);

            this.newRecordLabel = new NewRecordLabel();
            this.container.addChild(this.newRecordLabel);
            App.config.highscore.newRecord = false;
        }

        this.labelHighScore = new LabelHighScore();
        this.labelHighScore.anchor.set(0.5, 0.5);
        this.labelHighScore.x = App.app.view.width/2;
        this.labelHighScore.y = 350;
        this.container.addChild(this.labelHighScore);

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