import './App.css';
import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import menu from './data';
   


 
const allCategories =[...new Set(menu.map((item)=>item.category))]; 
function App(){
  const[items,setitems]=useState(menu);
  const [categories,setCategories]=useState([]);
  

  const all=()=>{
    setitems(menu)
  }
     const filterItems=(category)=>{
       const newItems=menu.filter((item)=>item.category===category)
            setitems(newItems);
      }


  return(
    <main>
      <section className='menu section' >
        <div className='title'>
           <h2>our Menu</h2>
        <div className='underline' ></div>
        </div>
      <Categories all={all} Categories={allCategories} filterItems={filterItems}   />
      <Menu items={items}   />
      </section>
    </main>


  );
}

export default App;