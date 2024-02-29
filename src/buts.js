import { useState } from "react"

function ButtonCompo(props){
    const{startFun,pauseFun,Resetun}=props.funcs
    const[swt,setSEt]=useState(false)
    return(
        <div className="buts">
            <button onClick={()=>{startFun();setSEt(true)}} disabled={swt} className="start">Start</button>
            <button onClick={()=>{pauseFun();setSEt(false)}}>Pause</button>
            <button onClick={()=>{Resetun();setSEt(false)}}>Reset</button>
        </div>
    )
}
export default ButtonCompo