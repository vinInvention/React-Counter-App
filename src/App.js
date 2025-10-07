import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import Homer from './Home'; 
import Counter from "./counter";

function App() {
  return (
    <div className="App">
      <header className="">        
        <Navbar />        
      </header>
      <main className='content'>
        <section >
          <Homer />
        </section>
        <section >
          <Counter />
        </section>
      
      </main>
      <footer></footer>

    </div>
  );
}

export default App;
