import ConvertStringToNumber from "../controllers/StringToNumberController";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { width } from "dom-helpers";
import { useState } from "react";

export default function StringToNumberComponent(props) {
    const [result, setResult] = useState("");

    return <div class="card">
        <h5>String to number</h5>
        <div class="field">
            <InputText className="col-8 m-3 p-inputtext-lg" keyfilter="alpha" placeholder="Insert string" onChange={(e) => {
                //change the value to uppercase, also limit it to 20 characters, we don't really need more than that (arbitrarily at least)
                e.target.value = e.target.value.toUpperCase();
                if (e.target.value.length < 20) {
                    setResult(ConvertStringToNumber(e.target.value));
                }
                else {
                    e.target.value = e.target.value.substring(0, 20);
                    setResult(ConvertStringToNumber(e.target.value));
                }
            }} />
            {result != "" &&
                < Card title="Result">
                    <p className="m-3 text-4xl text-primary" style={{ whiteSpace: "pre-wrap" }}>
                        {result}
                    </p>
                </Card>
            }
        </div>
    </div >
}