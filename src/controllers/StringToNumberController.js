import { isNumber } from "lodash";

export default function ConvertStringToNumber(inputString) {
    if (isNumber(inputString) || !IsAlpha(inputString)) {
        return null;
    }
    let inputCopy = inputString.toUpperCase();
    
    return inputCopy.charCodeAt(0) - 64;
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