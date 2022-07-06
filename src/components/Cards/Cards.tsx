import React from "react";
import { FormatValues } from "../FunctionCollection";
import { IFormattedValues, IFormInformation, State } from "../InterfaceCollection";
import { ThreeComponent } from "./CardsComponents";
import "./cards_module.css";

export const Cards: React.FC<{ val: IFormInformation[] }> = (props) => {
    const { val } = props;
    const newVal: IFormattedValues = FormatValues(val);

    return (
        <>
            <div className="w100 gridCss">
                <ThreeComponent vals={newVal.todo} title="Todo" />
                <ThreeComponent vals={newVal.doing} title="Doing" />
                <ThreeComponent vals={newVal.done} title="Done" />
            </div>
        </>
    );
}

