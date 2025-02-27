"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var utils_2 = require("./utils");
var RJSState_1 = __importDefault(require("./RJSState"));
var RJSLoadingScreen_1 = __importDefault(require("../components/RJSLoadingScreen"));
var PreloadStory = /** @class */ (function (_super) {
    __extends(PreloadStory, _super);
    function PreloadStory() {
        var _this = _super.call(this) || this;
        _this.readyToStart = false;
        return _this;
    }
    PreloadStory.prototype.init = function () {
        this.loadingScreen = new RJSLoadingScreen_1.default(this.game);
    };
    PreloadStory.prototype.preload = function () {
        var _this = this;
        this.loadingScreen.setLoadingBar(this.game);
        // wait a minimal amount of time in the loading loadingScreen
        // to use as splash screen
        if (this.game.config.loadingScreen.minTime) {
            setTimeout(function () {
                if (_this.readyToStart) {
                    _this.initGame();
                }
                else {
                    _this.readyToStart = true;
                }
            }, this.game.config.loadingScreen.minTime);
        }
        else {
            this.readyToStart = true;
        }
        // preload gui assets
        for (var _i = 0, _a = this.game.gui.assets; _i < _a.length; _i++) {
            var asset = _a[_i];
            if (asset.type === 'spritesheet') {
                this.game.load.spritesheet(asset.key, utils_1.preparePath(asset.file, this.game), asset.w, asset.h);
            }
            else {
                this.game.load[asset.type](asset.key, utils_1.preparePath(asset.file, this.game));
            }
        }
        if (this.game.setup.lazyloading) {
            // when lazy loading, game assets will be loaded while playing the story
            return;
        }
        // preload backgrounds
        if ('backgrounds' in this.game.setup) {
            for (var bg in this.game.setup.backgrounds) {
                utils_2.preloadBackground(bg, this.game);
            }
        }
        // preload cgs
        if ('cgs' in this.game.setup) {
            for (var cg in this.game.setup.cgs) {
                utils_2.preloadCGS(cg, this.game);
            }
        }
        // preload background music
        if ('music' in this.game.setup) {
            for (var music in this.game.setup.music) {
                utils_2.preloadAudio(music, "music", this.game);
            }
        }
        // preload sfx
        if ('sfx' in this.game.setup) {
            for (var sfx in this.game.setup.sfx) {
                utils_2.preloadAudio(sfx, "sfx", this.game);
            }
        }
        // preload characters
        if ('characters' in this.game.setup) {
            for (var name_1 in this.game.setup.characters) {
                utils_2.preloadCharacter(name_1, this.game);
            }
        }
        if ('extra' in this.game.setup) {
            var _loop_1 = function (type) {
                Object.keys(this_1.game.setup.extra[type]).forEach(function (asset) {
                    utils_2.preloadExtra(asset, type, _this.game);
                });
            };
            var this_1 = this;
            for (var _b = 0, _c = Object.keys(this.game.setup.extra); _b < _c.length; _b++) {
                var type = _c[_b];
                _loop_1(type);
            }
        }
    };
    PreloadStory.prototype.create = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // game finished loading, now has to build game
                        // we add a tween to the loading bar to make it a bit less static
                        this.loadingScreen.waitingScreen();
                        return [4 /*yield*/, this.game.initStory()];
                    case 1:
                        _a.sent();
                        if (this.readyToStart) {
                            this.initGame();
                        }
                        else {
                            this.readyToStart = true;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    PreloadStory.prototype.initGame = function () {
        this.loadingScreen.destroy(this.game);
        this.game.gui.showMenu('main');
    };
    return PreloadStory;
}(RJSState_1.default));
exports.default = PreloadStory;
//# sourceMappingURL=PreloadStory.js.map