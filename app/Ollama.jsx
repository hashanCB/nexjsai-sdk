'use client'
import React, { useCallback, useEffect, useState, useTransition } from 'react'
import { ollama } from 'ollama-ai-provider';
import { generateText } from 'ai';


const Ollama = () => {
  const [number,setnumber] = useState(0)
  const [numner2,setnumner2] = useState(0)
  const [result,setresult] = useState("")
  const [isLoading , startTransition] = useTransition()


  const calnummer = useCallback(async () => {
    startTransition( async ()=>{
 const model = ollama('deepseek-coder:latest');
     
     // Generate text based on the input
        const result = await generateText({
          model,
          prompt:  ` ${number} + ${numner2}  = ?`, 
        });

        setresult(result.text); // Store the result
        console.log(result.text)
    })
    
   
  },[number,numner2])
  return (
    <div>
      <input type='text' value={number} onChange={(e)=>setnumber(e.target.value)} />
      <input type="text" value={numner2} onChange={(e)=>setnumner2(e.target.value)} />

      <button onClick={()=> calnummer()}> Cal </button>
      {isLoading && "isLoading"}
      { !isLoading && <p>{result}</p>}
    </div>
  )
}

export default Ollama