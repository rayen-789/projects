import React,{useState} from 'react';
import data from './data';
import { FaChevronLeft,FaChevronRight,FaPeopleCarry,FaQuoteRight } from 'react-icons/fa';


const Review =()=>{
    const [index,setIndex]=useState(3);
    const {name,job,image,text}=data[index];
    const checkNumber=(number)=>{
        if(number>data.length-1){
             return 0
        }
        if(number<0){
            return data.length-1
        }
        return number
    }
    const nextPerson=()=>{
        setIndex((index)=>{
           const newindex=index+1
           return checkNumber(newindex);
        })
    }
    const prevPerson=()=>{
        setIndex((index)=>{
           const newindex=index-1
           return checkNumber(newindex);
        })
    
    }
    const random=()=>{
        let c=Math.floor(Math.random()*data.length);
        if(c === index){
            c=index+1
        }
        setIndex(checkNumber(c));
    }
    return(
         <article className='review'>
              <div className='img-container'>
                  <img src={image} alt='' className='person-img' />
                  <span className="quote-icon" >
                  <FaQuoteRight></FaQuoteRight>
                  </span>
              </div>
              <h4 className='author' >{name}</h4>
              <p className='job'>{job}</p>
              <p className='info'>{text}</p>
              <div className='button-container'>
               <button className="prev-btn" onClick={prevPerson} >
                   <FaChevronLeft/>
               </button>
               <button className="next-btn" onClick={nextPerson} >
                   <FaChevronRight/>
               </button>
               <button className="random-btn" onClick={random}>
                   surpise me
               </button>
              </div>
         </article>    
    );
}
export default Review;