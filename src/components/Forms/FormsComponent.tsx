import { IEventComponent, State } from "../InterfaceCollection";
export const TitleInput: React.FC<IEventComponent> = (props) => {
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

export const DescriptionArea: React.FC<IEventComponent> = (props) => {
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

export const StateOption: React.FC<IEventComponent> = (props) => {
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