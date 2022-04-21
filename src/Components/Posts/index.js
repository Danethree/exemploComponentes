import React, { useState } from 'react';
import Btn from '../Btn'

export default function Posts()
{
    /*Você pode alterar o texto mudando o valor de índice*/
    const myPosts = [ 
     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam semper eget est id lacinia. Vivamus sollicitudin sit amet urna ut imperdiet. Suspendisse sollicitudin ultrices libero eget cursus. Integer bibendum tellus quis lorem dapibus, quis sodales diam ultrices. Fusce suscipit elit velit, eget condimentum urna eleifend non. Duis gravida cursus mi et sollicitudin. Aenean mattis massa eu faucibus rhoncus",
     "Curabitur vel elementum ex, feugiat molestie erat. Curabitur vel quam ex. Mauris vel sodales dui, sit amet finibus augue. Ut ac nulla nec mauris tincidunt semper",
     "Nulla luctus, turpis sit amet pulvinar congue, enim urna feugiat mi, nec egestas metus dui vel est. Etiam molestie libero a velit cursus tincidunt."



    ]
    const [indice,setIndice] = useState(1);

   
    return(
        <>
        <p class="text-lg font-light leading-relaxed mt-6 mb-4 text-stone-800 text-justify ">
          {myPosts[indice]}
        </p>
     
       </>
    )
}