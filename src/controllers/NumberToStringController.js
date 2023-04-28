import { isNumber } from "lodash";

export default function ConvertNumberToString(inputNumber) {
    if (!isFinite(inputNumber) || inputNumber < 0) {
        return null;
    }
    return inputNumber;
}