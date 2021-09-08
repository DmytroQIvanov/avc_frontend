import {useState } from "react"
import './InputsComponent.sass'

export const InputsComponent =()=>{
    let [countOfInputs,setCountOfInputs] = useState(4)
    let Data =[]
    const [data2,setData]=useState([])
        for(let i = 0; i <= countOfInputs; i++ ){
            Data.push(
            <input placeholder={i} value={data2[i]} key={i} onChange={(elem)=>{
                const newArray =data2;
                    newArray[i] = elem.target.value
                    setData(newArray)
            }} className="inputs-component__input"/>)
    }
    
    return(
        <div className="inputs-component">
            <div className="inputs-component__inputs-container">{Data}</div>
            <button onClick={()=>{
            console.log(countOfInputs)
            setCountOfInputs(countOfInputs+1)
            console.log(countOfInputs)
            }}> + </button>
        </div>
            
    )
}