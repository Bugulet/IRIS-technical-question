import { isNumber } from "lodash";

export default function ConvertStringToNumber(inputString) {
    if (isNumber(inputString)) { 
        return null; 
    }

    

    return inputString.charCodeAt(0)-64;
}