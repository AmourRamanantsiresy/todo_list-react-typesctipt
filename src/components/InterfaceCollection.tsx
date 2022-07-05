export enum State {
    "TODO" = "todo", "DOING" = "doing", "DONE" = "done",
}

export interface IFormInformation {
    title: string;
    description: string;
    state: State | string;
    id: number;
}

export interface IEventComponent {
    handleChange: (element: IEventHandler) => void;
    information: IFormInformation;
}

export interface IFormattedValues {
    todo: IFormInformation[];
    doing: IFormInformation[];
    done: IFormInformation[];
}

export interface IInput {
    state: number;
    values: (IFormInformation | null);
}

export interface IInputContext {
    inputState: IInput | null,
    setInputState: React.Dispatch<React.SetStateAction<IInput>> | null;
    values: IFormInformation[] | null;
    setValues: React.Dispatch<React.SetStateAction<IFormInformation[]>> | null;
}

export type IEventHandler = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;