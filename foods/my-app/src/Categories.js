import React from 'react';

const Categories = ({all,Categories,filterItems}) => {
  return (
     <div className='btn-container' >
          <button className='filter-btn' onClick={()=>all()} >all</button>
         { Categories.map((Category,index)=>{
             return(             
         <button key={index} className='filter-btn' onClick={()=>filterItems(Category)} >{Category}</button>
             );   
         })}  
         </div>
  );
};

export default Categories;