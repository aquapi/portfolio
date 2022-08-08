import React, { useState } from "react";

export type ContextType = {
    value: string[],
    addValue(...v: string[]): void;
}

export const Context = React.createContext<ContextType>({
    value: [],
    addValue() {}
});

export interface Props { 
    children: React.ReactNode; 
}

function Loader({ children }: Props) {
    const [loadsValue, setLoadsValue] = useState<string[]>([]);

    return <Context.Provider value={{ 
        value: loadsValue, 
        addValue: (...v) => setLoadsValue(
            Array.from(new Set([...v, ...loadsValue]))
        )
    }}>
        {loadsValue.map(v => <span className={v} key={v}></span>)}
        <>{children}</>
    </Context.Provider>
}

export default Loader;