import React, { useState } from "react";
import { IFormInformation, State, IEventHandler, IEventComponent } from "../InterfaceCollection";
import { ButtonsSection } from "./FormsButtonsComponent";
import { TitleInput, StateOption, DescriptionArea } from "./FormsComponent";

export const Forms: React.FC<{ initialInformation: IFormInformation }> = (props) => {
    const { initialInformation } = props;
    const [information, setInformation] = useState<IFormInformation>(initialInformation);

    const handleInput = (element: IEventHandler): void => {
        const name: string = element.currentTarget.name;
        const value: string = element.currentTarget.value;
        setInformation((e: IFormInformation): IFormInformation => ({ ...e, [name]: value }))
    }

    return (
        <div className="w-25 p-2 forms">
            <p className="display-6 text-light">Add new program</p>
            <hr />
            <TitleInput handleChange={handleInput} information={information} />
            <DescriptionArea handleChange={handleInput} information={information} />
            <StateOption handleChange={handleInput} information={information} />
            <ButtonsSection information={information} />
        </div>
    );
}