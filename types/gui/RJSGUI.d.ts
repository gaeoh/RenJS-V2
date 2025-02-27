import RJS from '../core/RJS';
import { GUIAsset } from './elements/GUIAsset';
import RJSMenu from './RJSMenu';
import RJSHUD from './RJSHUD';
export interface RJSGUIInterface {
    init(): any;
    assets: GUIAsset[];
    fonts: string[];
    showMenu(menu: any): any;
    changeMenu(menu: any): void;
}
export default class RJSGUI implements RJSGUIInterface {
    protected game: RJS;
    bindingActions: {};
    config: any;
    assets: GUIAsset[];
    fonts: string[];
    menus: {
        string: typeof RJSMenu;
    };
    hud: RJSHUD;
    currentMenu: any;
    previousMenu: any;
    constructor(game: RJS);
    initAssets(gui: any): void;
    init(): Promise<void>;
    getCurrent(): any;
    showMenu(menu: any): Promise<void>;
    hideMenu(menu: any, mute: any, callback?: any): Promise<void>;
    changeMenu(menu: any): Promise<void>;
    initBindingActions(): void;
}
