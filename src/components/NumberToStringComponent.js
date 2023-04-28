import {InputText} from "primereact/inputtext";
import ConvertNumberToString from "../controllers/NumberToStringController";
import { integer } from "check-types";
import { MAX_INT } from "node-int64";
import { Card } from "primereact/card";
import { width } from "dom-helpers";
import { useState } from "react";
import { max } from "prelude-ls";
import { MAX_SAFE_INTEGER } from "core-js/es/number";
export default function NumberToStringComponent(props) {
    const [result, setResult] = useState("");
    return <div class="card">
        <h5>Number to string</h5>
        <div class="field">
            <InputText className="col-8 m-3 p-inputtext-lg" keyfilter="int" placeholder="Insert number" onChange={(e) => {
                if(e.target.value<MAX_SAFE_INTEGER){
                setResult(ConvertNumberToString(e.target.value));
                }
                else{
                    e.target.value=MAX_SAFE_INTEGER
                    setResult(ConvertNumberToString(e.target.value));
                }
            }} />
            {/* <Button label="Submit" className="col-5 m-3" onClick={() => { setResult("asdf") }} /> */}
            {result != "" &&
                < Card title="Result">
                    <p className="m-3 text-4xl text-primary" style={{whiteSpace:"pre-wrap"}}>
                        {result}
                    </p>
                </Card>
            }
        </div>
    </div >
}