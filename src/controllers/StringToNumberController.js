import { isNumber } from "lodash";

export default function ConvertStringToNumber(inputString) {
    //check if the input is made out only of letters
    if (isNumber(inputString) || !IsAlpha(inputString)) {
        return null;
    }

    //convert the input to uppercase 
    let inputCopy = inputString.toUpperCase();

    let finalString = "";
    let finalNumber = 0;

    //each character is basically a digit out of a number, in our case the number system is base26
    //each digit can be seen as 26 to the power of (string.length-i)*(character value in base26)
    //example:
    //AB->28
    //A=26^^1 * A -> 26 * 1 -> 26
    //B=26^^0 * B -> 1  * 2 -> 2
    //26+2=28

    for (let i = 0; i < inputCopy.length; i++) {
        finalNumber *= 26;
        finalNumber += inputCopy.charCodeAt(i) - 64;
        //possible use for more detailed explanation step by step
        // finalString+=`Step ${i+1}: ${finalNumber} \n`;
    }

    return finalNumber;
}

//helper function to find out if the string is only made out of letters
export function IsAlpha(inputString) {
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