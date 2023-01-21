import './App.css';
import { useState } from 'react';



function App() {
  const [name, setName] = useState("Raoni Xavier");
  const [number, setNumber] = useState(1)
  const changeNumber = () => {
    setNumber (number + 1)
  }
    return (
      <div className="App">
        <h2> Meu nome é {name}</h2>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
        <div>
          <p> Número: {number}</p>
          <button onClick={changeNumber}>Mudar número</button>
        </div>
      
      </div>
  );
}

export default App;
