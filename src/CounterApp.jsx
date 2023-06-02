import PropTypes  from "prop-types"; 
import { useState } from "react";


export const CounterApp =({value}) => {
    const[ counter,setCounter] = useState(value);
    const pressBtnPlus = ()=>{
       // setCounter(counter + 1);
       setCounter((count)=>count +1)
    }
    const pressBtnMinus =()=>{
        setCounter((less)=>less -1)

    }
    const pressBtnReset =() => setCounter(value);
    return (<>
        <h1>Hola Mundo</h1>
        <h2> { counter} </h2>
        
        <button onClick={pressBtnPlus}>
            +1
        </button>
        <button onClick={pressBtnMinus}>
            -1
        </button>
        <button onClick={pressBtnReset}>
            Reset
        </button>
        </>
    );
}

CounterApp.propTypes={
    value : PropTypes.number
}




