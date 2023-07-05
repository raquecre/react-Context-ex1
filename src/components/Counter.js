import React, { useContext } from "react";
import { CounterContext } from "../context";

const Counter = () => {
 const {counter, setCounter} = useContext(CounterContext);
    return(

        <h2 className=" border border-info p-1 m-5 rounded-pill">{counter}</h2> 
    ) 
}

export default Counter