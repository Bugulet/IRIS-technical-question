import { isNumber } from "lodash";

export default function ConvertNumberToString(inputNumber) {
    if (!isFinite(inputNumber) || inputNumber < 0) {
        return null;
    }
    let finalString = "";
    while (inputNumber > 0) {
        // exlanation for (inputNumber-1)%26+65
        // since our index starts at 1, 1 being A, we will have a boundary case where 26 which should be Z will instead 
        // first be seen as 26%26 -> 0, which will break our algorithm a bit, so we instead substract one from it to 
        // get back the index to the proper 0, after which we add 65, which is corresponding to the "A" value in the ascii table
        let currentLetter = String.fromCharCode((inputNumber - 1) % 26 + 65);
        finalString = currentLetter + finalString;
        inputNumber = Math.floor((inputNumber - 1) / 26);
    }
    return finalString;
}

ConvertNumberToString(27);