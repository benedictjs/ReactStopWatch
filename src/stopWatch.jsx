import { useEffect, useRef, useState } from "react";
import ButtonCompo from "./buts"
let inter;
let seco=0
let mins=0
let minse=0
const StopWatch=()=>{
 const [sta,setSta]=useState(false)
   const minsecRef=useRef(null)
    const secoref=useRef(null)
    const minsref=useRef(null)
    
    const startFun=()=>{
      inter=setInterval(()=>{
           minse++  
           console.log(minse)      
         minsecRef.current.textContent=minse<9?'0'+minse:minse;
        if(minse>=99){
        seco++
        minse=0  

     secoref.current.textContent=seco<10?'0'+seco+':':seco+':'
     if(seco%15===0){
      clearInterval(inter)
      startFun()
     }
       }
       if(seco>59){ 
        seco=0
        mins++
     minsref.current.textContent=mins<10?'0'+mins+':':mins+':'
       }

    },10)
    }

    const pauseFun=()=>{
        clearInterval(inter)
        minsecRef.current.innerText=minse<10?'0'+minse:minse
        minsref.current.textContent=mins<10?'0'+mins+':':mins+':'
        secoref.current.innerText=seco<10?'0'+seco+':':seco+':'
    }
    const Resetun=()=>{
        clearInterval(inter)
minse=0
seco=0
mins=0
        minsecRef.current.textContent='00'
        secoref.current.textContent='00:'
        minsref.current.textContent='00:'
    }
    return(<>
    <div className="tim">
        <span className ="mins" ref={minsref}>00:</span>
        <span className ="seconds" ref={secoref}>00:</span>
        <span className ="minesec" ref={minsecRef}>00</span>
    </div>
    <ButtonCompo funcs={{startFun,pauseFun,Resetun}}/>
    </>)
}
export default StopWatch
