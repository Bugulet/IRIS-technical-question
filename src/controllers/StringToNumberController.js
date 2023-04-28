import { isNumber } from "lodash";

export default function ConvertStringToNumber(inputString) {
    if (isNumber(inputString) || !IsAlpha(inputString)) {
        return null;
    }
    let inputCopy = inputString.toUpperCase();

    let finalNumber=0;
    for(let i=0;i<inputCopy.length;i++){
        finalNumber*=26;
        finalNumber+=inputCopy.charCodeAt(i) - 64
    }
    
    return finalNumber;
}

function IsAlpha(inputString) {
    for (let i = 0; i < inputString.length; i++) {
        const asciiCode = inputString.charCodeAt(i);
        if (!(asciiCode > 64 && asciiCode < 91) && !(asciiCode > 96 && asciiCode < 123)) {
            //found character that's not alpha
            return false;
        }
    }
    // passed through all characters, return true
    return true;
}