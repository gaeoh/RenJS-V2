import RJS from '../core/RJS';
import {Sprite,Text} from 'phaser-ce';

export function getButtonFrames(total:number, pushed:boolean = false){
  // button frames -> over|out|down|up
  const buttonFrames = {
      1: {normal: [0,0,0,0],pushed:[1,1,1,1]},
      2: {normal: [1,0,1,0],pushed:[3,2,3,2]},
      3: {normal: [1,0,2,0],pushed:[4,3,5,3]},
      4: {normal: [1,0,2,3],pushed:[5,4,6,7]},
  }
  return buttonFrames[total][pushed ? 'pushed' : 'normal']
}

export function changeInputEnabled(displayObj,enabled){
  if (displayObj.input){
    displayObj.input.enabled = enabled;  
  }
  for (const child of displayObj.children){
    changeInputEnabled(child,enabled);
  }
  
}

// sets text styles tags in a phaser text object (but NOT the text itself)
// returns final text without tags, that has to be set to text object as text_obj.text 
export function setTextStyles(text:string,text_obj:Text): string {
  text_obj.clearFontValues();
  text_obj.clearColors()
  let styles = []
  while(true){
    let re = /\((color:((\w+|#(\d|\w)+))|italic|bold)\)/
    let match = text.match(re);
    if (match){
      let s = {
        start: text.search(re),
        style: match[1].includes("color") ? "color" : match[1],
        end: -1,
        color: null
      }
      if (s.style == "color"){
        s.color = match[2];
      }
      text = text.replace(re,"")
      let endIdx = text.indexOf("(end)");
      if (endIdx!=-1){
        text = text.replace("(end)","")
        s.end = endIdx;
        styles.push(s)
      }
    } else break;
  }
  styles.forEach(s=>{
    if (s.style=="italic"){
      text_obj.addFontStyle("italic", s.start);
      text_obj.addFontStyle("normal", s.end);
    }
    if (s.style=="bold"){
      text_obj.addFontWeight("bold", s.start);
      text_obj.addFontWeight("normal", s.end);
    }
    if (s.style=="color"){
      text_obj.addColor(s.color, s.start)
      text_obj.addColor(text_obj.fill, s.end)
    }
  })
  return text;
}

// convert hex color to number
export function toHexColor(color) {
    // eslint-disable-next-line no-bitwise
    return (parseInt(color.substr(1), 16) << 8) / 256;
}