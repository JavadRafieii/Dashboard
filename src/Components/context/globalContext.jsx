import React, { useReducer, useContext } from "react";
import { reducer, initState } from "./reduser";

const globalState = React.createContext();
const globalDispatch = React.createContext();

export function useGlobalState() {
    const context = useContext(globalState);
    return context;
};

export function useGlobalDispatch() {
    const context = useContext(globalDispatch);
    return context;
};

export function Provider({ children }) {

    const [state, dispatch] = useReducer(reducer, initState);

    return (
        <globalState.Provider value={state}>
            <globalDispatch.Provider value={dispatch}>
                {children}
            </globalDispatch.Provider>
        </globalState.Provider>
    );

};