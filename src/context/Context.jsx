import { createContext, useState } from "react";
import runChat from "../config/Gemini";

export const Context = createContext()

const ContextProvider =(props)=>{
    


    const [input,setInput]= useState("");
    const [recentPrompt,setRecentPrompt]=useState("");
    const [prevPrompts,setPrevPrompts]=useState([]);
    const [showResults,setShowResults]= useState(false);
    const [loading,setLoading]=useState(false);
    const [resultData,setResultData]=useState("")
    const onSent = async (prompt)=>{
        await runChat(input)
    }
    
   
    const contextValue ={
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        input,
        setInput,
        showResults,
        loading, 
        resultData,
        

        
    }
    return(
        <Context.Provider value={contextValue}>{props.children}</Context.Provider>
    )
}
export default ContextProvider;