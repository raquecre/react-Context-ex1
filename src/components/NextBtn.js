import { useContext } from "react"
import  { CounterContext } from "../context"


const NextBtn = () => {
    const {counter, setCounter} = useContext(CounterContext);
    
    const next = () =>{
        setCounter(number => number +1)
    }

    return(
        <button onClick={next}>+</button>
    )
}

export default NextBtn