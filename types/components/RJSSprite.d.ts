import { Sprite } from 'phaser-ce';
export default class RJSSprite extends Sprite {
    background?: Sprite;
    config?: any;
    text?: {
        text?: any;
        fill?: any;
    };
    constructor(game: Phaser.Game, x: number, y: number);
    destroy(): void;
}
