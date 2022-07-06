import { useContext } from "react";
import { InputContext } from "../../App";
import { ValuesValidators, nextValue, idIndex } from "../FunctionCollection";
import { IFormInformation, State } from "../InterfaceCollection";

export const ButtonsSection: React.FC<{ information: IFormInformation, theReference: React.MutableRefObject<null | HTMLDivElement> }> = (props) => {
    const { information, theReference } = props;
    let { setInputState, setValues, inputState, values } = useContext(InputContext);

    const cancel = (): void => {
        theReference.current?.classList.add("close")
        setTimeout((): void => {
            setInputState != null && setInputState({
                values: {
                    title: "",
                    description: "",
                    state: State.TODO,
                    id: -1
                }, state: 0
            })
        }, 1500)
    }

    const remove = (): void => {
        if (setValues != null && values != null) {
            setValues((e: IFormInformation[]) => {
                const temp: IFormInformation[] = e.slice();
                temp.splice(idIndex(e, information.id), 1);
                return temp;
            });
            cancel();
        }
        else {
            alert("Please complete all inputs");
        }
    }

    const save = (): void => {
        if (values?.length === 0 && setValues != null) {
            setValues([information]);
            cancel();
        }
        else if (ValuesValidators(information) && setValues != null && values != null) {
            if (inputState?.state === 1) {
                information["id"] = nextValue(values);
                setValues((e: IFormInformation[]) => ([...e, information]));
            } else {
                setValues((e: IFormInformation[]) => {
                    const temp: IFormInformation[] = e.slice();
                    temp[idIndex(e, information.id)] = information;
                    return temp;
                });
            }
            cancel();
        } else {
            alert("Please complete all inputs");
        }
    }

    return (
        <div className="mb-3 d-flex justify-content-around">
            <button onClick={(): void => save()} className="btn btn-outline-primary">Save</button>
            <button onClick={(): void => cancel()} className="btn btn-outline-danger">Cancel</button>
            {
                inputState?.state === 2 && <button onClick={(): void => remove()} className="btn btn-outline-danger">Remove</button>
            }
        </div>
    );
}

export const ButtonToAdd: React.FC = () => {
    const { setInputState } = useContext(InputContext);
    const handleChange = (): void => {
        setInputState != null && setInputState({ values: null, state: 1 })
    }
    return (
        <>
            <div className="add__button" onClick={(): void => handleChange()}>
                <i className="fa-solid display-4 text-light fa-circle-plus">+</i>
            </div>
        </>
    );
}