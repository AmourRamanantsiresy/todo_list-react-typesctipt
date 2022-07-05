import { IFormattedValues, IFormInformation, State } from "./InterfaceCollection";

export const FormatValues = (values: IFormInformation[]): IFormattedValues => {
    let todo: IFormInformation[] = [];
    let doing: IFormInformation[] = [];
    let done: IFormInformation[] = [];
    let i: IFormInformation;
    for (i of values) {
        if (i.state === State.TODO) {
            todo.push(i);
        } else if (i.state === State.DOING) {
            doing.push(i);
        } else {
            done.push(i);
        }
    }
    return { todo, doing, done }
}


export const ValuesValidators = (val: IFormInformation): boolean => {
    if (val.description.length === 0 || val.title.length === 0) {
        return false;
    } return true;
}

export const nextValue = (val: IFormInformation[]): number => {
    let temp = val.slice();
    temp = temp.sort((a: IFormInformation, b: IFormInformation) => { return a.id - b.id })
    return temp[temp.length - 1].id + 1;
}

export const idIndex = (val: IFormInformation[], id: number): number => {
    let i: number = 0;
    for (i; i < val.length; i++) {
        if (val[i].id === id) {
            return i;
        }
    } return -1;
}


