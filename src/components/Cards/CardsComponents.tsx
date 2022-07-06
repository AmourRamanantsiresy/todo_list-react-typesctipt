import { IFormInformation, State } from "../InterfaceCollection";
import { useContext, FC } from "react";
import { InputContext } from "../../App";

export const ThreeComponent: FC<{ title: string, className?: string, vals: IFormInformation[] }> = (props) => {
    const { title, className, vals } = props;
    return (
        <div className={"container bg-dark text-light mb-3 rounded-3 bg-gradient " + className}>
            <p className="display-6">{title}</p>
            <hr />
            <div className="container hv-75 overflow-auto">
                {
                    vals.map((e: IFormInformation, k: number): JSX.Element => {
                        return <ElementInThree
                            val={e}
                            k={k}
                            color={
                                e.state === State.TODO
                                    ? "bg-secondary"
                                    : e.state === State.DOING
                                        ? "bg-warning text-dark"
                                        : "bg-success"
                            } />
                    })
                }
            </div>
        </div>
    );
}

const ElementInThree: FC<{ val: IFormInformation, color: string, k: number }> = (props) => {
    const { setInputState } = useContext(InputContext);
    const { val, color, k } = props;
    const keys = val.title + color + k;

    const handleChange = (): void => {
        setInputState != null && setInputState({ values: { ...val }, state: 2 })
    }

    return (
        <div onClick={(): void => handleChange()} className={"mb-2 bg-gradient rounded-3 p-2 " + color} key={keys}>
            <p className="display-6" key={keys + "p1"}>{val.title}</p>
            <hr />
            <p className="fs-6" key={keys + "p2"}>
                {val.description}
            </p>
        </div>
    );
}
