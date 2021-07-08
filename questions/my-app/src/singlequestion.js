import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const SingleQuestion = ({title,info}) => {
   const [seemore,setSeeMore]=useState(false);
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={()=>{setSeeMore(!seemore)}} >
         {seemore ?<AiOutlineMinus/>: <AiOutlinePlus/>}
        </button>
      </header>
      {seemore && <p>{info}</p>}
    </article>
  );
};


export default SingleQuestion;