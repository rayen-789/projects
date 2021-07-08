import React,{useState,useEffect} from 'react';


const Tours=({data,remove})=>{
   const [readMore,setReadMore] =useState(false)
    return(
       <>
       {
           data.map((tour)=>{
               return(
                   <article key={tour.id} className='single-tour'>
                    <img src={tour.image} className='single-tour img' />
                    <footer>
                    <div className='tour-info'></div>
                    <h1>{tour.name}</h1>
                    <p className='tour-price'>${tour.price}</p>
                    <p>{readMore ? tour.info: `${tour.info.substring(0,200)}...`}
                     <button onClick={()=> setReadMore(!readMore)}>{readMore ?'Show Less':'Read More'}</button>
                    </p>
                    <button onClick={()=>remove(tour.id)} className='delete-btn'>not interested</button>
                    </footer>
                   </article>

               )   
           })
       }
       </>
    )
}
export default Tours;