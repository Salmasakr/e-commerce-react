import { createContext,useState } from "react";

 export let CounterContext=createContext(0);

 export default function CounterContextProvider(props){
 
    const [Counter, setCounter] = useState(0)
    const [UserName, setUserName] = useState(0)


    return <CounterContext.Provider value={{Counter,UserName}}>
              {props.children}

    </CounterContext.Provider>
 }