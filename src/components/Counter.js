import React, { useContext } from "react";
import { CounterContext } from "../context";

const Counter = () => {
 const {counter, setCounter} = useContext(CounterContext);
    return(

        <h2>{counter}</h2>
    )
}

export default Counter