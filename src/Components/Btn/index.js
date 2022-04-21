
import React from "react";


export default function Btn(props) {
    return (
      <>
    <button 
    className="bg-white-500 hover:bg-purple-700 text-purple-700 hover:text-white font-bold py-2 px-4 border border-purple-700 rounded-full m-5"
    
    >
           {props.nome}
   
      
     </button> 

      </>
    )
}












/*

<button class="bg-white-500 hover:bg-purple-700 text-purple-700 hover:text-white font-bold py-2 px-4 border border-purple-700 rounded-full m-5">
    {props.name}
</button>

*/ 