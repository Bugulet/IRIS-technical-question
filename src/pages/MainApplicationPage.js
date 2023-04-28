import "../pages/MainApplicationPage.css"
import { TabView, TabPanel } from "primereact/tabview";
import NumberToStringComponent from "../components/NumberToStringComponent";
import StringToNumberComponent from "../components/StringToNumberComponent";
import { Menubar } from 'primereact/menubar';
import { useState } from "react";

export default function MainApplicationPage() {
    const [firstComponentActive, setFirstComponentActive] = useState(true);

    const items = [
        {
            label: 'String to number',
            icon: 'pi pi-fw pi-file',
            command: () => { setFirstComponentActive(true); }
        },
        {
            label: 'Number to string',
            icon: 'pi pi-fw pi-pencil',
            command: () => { setFirstComponentActive(false); }
        }
    ];

    const start = <img alt="logo" src="https://www.iris.co.uk/wp-content/uploads/2021/05/IRIS-logo-190x60.png" height="40" className="mr-2"></img>;

    return <div >
        <Menubar model={items} start={start} />

        <div className="content card grid">
            <div className="col" />
            <div className="col" >
                {/* using this is less overkill than routing */}
                {firstComponentActive ? <StringToNumberComponent /> : <NumberToStringComponent />}
            </div>
            <div className="col" />
        </div>
    </div>;
}