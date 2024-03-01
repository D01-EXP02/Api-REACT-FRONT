import Nav from './componentes/nav/nav';
import './App.css';
import Container from './componentes/contenedor/container';
import { useState } from 'react';

function App() {
  const [option,setOption] = useState(0)

  return (
    <div className="App">
      <Nav option = {option} setOption={setOption}/>
      <div id= 'main'>
      <Container option={option}/>
      </div>
     
    </div>
  );
}

export default App;
