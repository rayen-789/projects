import data from './data';
import React,{ useState } from 'react';
import './App.css';
import List from './List';

function App() {
  const [people,setPeopel]=useState(data)
  return (

    <main>
      <section className='container'>
        <h3>{people.length} birthdays</h3>
          <List people={people} />
          <button onClick={()=>setPeopel([])} >clear all</button>
      </section>
      
    </main>
  );
}

export default App;
