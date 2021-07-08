import './App.css';
import React,{useState,useEffect} from 'react';
import Loading from './Loading'
import Tours from './Tours';
import data from './data'

function App() {
 
  const [loading,setLoadin]=useState(true);
  const [tours,setTours]=useState(data);
  const remove=(id)=>{
    const array=tours.filter((tour)=>tour.id!==id)
    setTours(array);
    console.log(array);
  }
  return (
    <div className="App">
      <h1 className='title'>Our Tours</h1>
      <Tours data={tours} remove={remove}/>
    </div>
  );
}

export default App;
