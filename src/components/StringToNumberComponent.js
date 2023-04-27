import ConvertStringToNumber from "../controllers/StringToNumberController";
import { InputText } from "primereact/inputtext";
export default function StringToNumberComponent(props) {
    return <div className="card flex justify-content-center">
        <InputText keyfilter="alpha" placeholder="Insert string" onChange={(e) => console.log("activated")} />
    </div>
}