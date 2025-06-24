import { useState } from 'react';
import Search from './components/Search';
import './index.css';

function App() {
  const[searchTerm, setSearchTerm] = useState('')



  return (
    <>
      <main>
        <div className='pattern' />

        <div className='wrapper'>
          <header>
            <img src='./hero.png' alt='hero banner' />
            <h1>
              Find your absolute <span className='text-gradient'>Cinema</span>
            </h1>
          </header>

          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
      </main>
    </>
  );
}

export default App;
