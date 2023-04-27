import ConvertStringToNumber from "../controllers/NumberToStringController";
import {InputText} from "primereact/inputtext";
export default function NumberToStringComponent(props) {
    return <div className="card flex justify-content-center">
        <InputText keyfilter="int" placeholder="Insert number" onChange={(e) => console.log("activated")} />
    </div>
}