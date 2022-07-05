import React, { useEffect, useMemo, useState } from 'react';
import { Cards } from './components/Cards/Cards';
import { Forms } from './components/Forms/Forms';
import { IFormInformation, IInput, IInputContext, State } from './components/InterfaceCollection';
import data from "./components/data.json";
import { ButtonToAdd } from './components/Forms/FormsButtonsComponent';
const initialInput: IFormInformation = {
  title: "",
  description: "",
  state: State.TODO,
  id: -1
}

const InputGlobalState: IInputContext = { inputState: null, setInputState: null, values: null, setValues: null };


export const InputContext = React.createContext(InputGlobalState);


const App: React.FC = () => {
  const [values, setValues] = useState<IFormInformation[]>(data);
  const [inputState, setInputState] = useState<IInput>({ state: 0, values: null });
  const inputGlobalStateController = { inputState, setInputState, values, setValues };

  return (
    <div>
      <InputContext.Provider value={inputGlobalStateController}>
        <div className="fontainer-fluid bg-gradient hv-10 d-flex flex-column justify-content-center align-items-center bg-dark">
          {
            inputState.state === 0
              ? <>
                <p className="text-light display-5">Todo List</p>
                <ButtonToAdd />
              </>
              : inputState.state === 1
                ? <Forms initialInformation={initialInput} />
                : <Forms initialInformation={inputState.values != null ? inputState.values : initialInput} />
          }
        </div>
        <Cards val={values} />
      </InputContext.Provider>
    </div>
  );
}

export default App;