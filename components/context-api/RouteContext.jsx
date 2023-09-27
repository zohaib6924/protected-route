import React, { createContext, useContext, useState } from 'react';

const RouteContext = createContext();

const RouteProvider = ({ children }) => {
    const [state, setState] = useState(false);

    return (
        <RouteContext.Provider value={{ state, setState }}>
            {children}
        </RouteContext.Provider>
    );
};

export { RouteContext, RouteProvider };

//--------------state-export-----------------------//
export const useRouteState = () => {
    return useContext(RouteContext);
}





