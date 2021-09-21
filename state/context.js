import React,{useState,createContext} from 'react'

export default mainContext=createContext()


const Mycontext=(props)=>{
    const [count,setCount]=useState(false)

    return (
        <div>
            <mainContext.Provider >
                {props.children}
            </mainContext.Provider>

        </div>
    )
}

export default Mycontext