import React, { useRef, useState } from "react";
import { IFormInformation, IEventHandler } from "../InterfaceCollection";
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

    const divForm: React.MutableRefObject<null | HTMLDivElement> = useRef<null | HTMLDivElement>(null);
    return (
        <div ref={divForm} className="forms w-100 d-flex align-items-center justify-content-center ">
            <div className="p-2">
                <p className="display-6 text-light">Add new program</p>
                <hr />
                <TitleInput handleChange={handleInput} information={information} />
                <DescriptionArea handleChange={handleInput} information={information} />
                <StateOption handleChange={handleInput} information={information} />
                <ButtonsSection information={information} theReference={divForm} />
            </div>
        </div>
    );
}