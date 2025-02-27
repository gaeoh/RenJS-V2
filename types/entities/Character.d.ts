export interface CharacterInterface {
    keyName: string;
    name: string;
    speechColour: any;
    lastScale: number;
    currentLook?: any;
    voice: any;
    nameBox: string;
}
export default class Character implements CharacterInterface {
    keyName: string;
    name: string;
    speechColour: any;
    currentLook: any;
    lastScale: number;
    voice: any;
    nameBox: string;
    constructor(keyName: any, name?: any, speechColour?: any, voice?: any, nameBox?: string);
}
