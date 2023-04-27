import { TabView, TabPanel } from "primereact/tabview";
import NumberToStringComponent from "../components/NumberToStringComponent";
import StringToNumberComponent from "../components/StringToNumberComponent";
export default function MainApplicationPage() {
    return <div>
        <TabView>
            <TabPanel header="Header I">
                <StringToNumberComponent />
            </TabPanel>

            <TabPanel header="Header II">
                <NumberToStringComponent/>
            </TabPanel>
            <TabPanel header="Header III">
                <p className="m-0">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                    quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                    culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                    Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                </p>
            </TabPanel>
        </TabView>
    </div>;
}