import { FC } from "react";
import { IEventComponent, State } from "../InterfaceCollection";

//The input where the user should put the title of the task (NOT NULL)
export const TitleInput: FC<IEventComponent> = (props) => {
    const { handleChange, information } = props;
    return (
        <div className="form-floating mb-3">
            <input
                type="text"
                className="form-control"
                value={information.title}
                name="title"
                onChange={handleChange}
                id="floatingInput"
                placeholder="Title" />
            <label htmlFor="floatingInput">Title</label>
        </div>
    );
}

//The Textarea where the user should put the description of the task (NOT NULL)
export const DescriptionArea: FC<IEventComponent> = (props) => {
    const { handleChange, information } = props;
    return (
        <div className="form-floating mb-3">
            <textarea
                className="form-control"
                value={information.description}
                name="description"
                onChange={handleChange}
                placeholder="Description"
                id="floatingTextarea"></textarea>
            <label htmlFor="floatingTextarea">Description</label>
        </div>
    );
}

/*
    The select input [
        Todo, Doing, Done
    ] where the user sould select the state, what they want for these task, default: todo
 */
export const StateOption: FC<IEventComponent> = (props) => {
    const { handleChange, information } = props;
    return (
        <div className="input-group mb-3">
            <button className="btn btn-outline-secondary" type="button">State</button>
            <select
                className="form-select"
                value={information.state}
                name="state"
                onChange={handleChange}
                id="inputGroupSelect03">
                <option value={State.TODO}>TODO</option>
                <option value={State.DOING}>DOING</option>
                <option value={State.DONE}>DONE</option>
            </select>
        </div>
    );
}