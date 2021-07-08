import Review from './review';
import './App.css';
import {FaGithubSquare} from 'react-icons/fa'
function App() {
  return (
    <main>
      <section className='container'>
        <div className='title' >
        <h2>our reviews</h2>
         <div className='underline' ></div>
         </div>
         <Review/>
      </section>
    </main>
  );
}

export default App;
