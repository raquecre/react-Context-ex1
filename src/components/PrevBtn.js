import React, { useContext } from "react";
import { CounterContext } from "../context";

const PrevBtn = () => {
    const {counter, setCounter} = useContext(CounterContext);
    const prev = () =>{
        setCounter(number => number - 1)
    }

    return(
        <button type="button" className="btn btn-danger"  onClick={prev}>-</button>
    )
   
}

export default PrevBtn