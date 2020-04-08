import React from 'react';
import './assets/css/App.css';
//import './assets/css/Menu.css';
//import './assets/css/List.css'
//importat componentes
import Menu from './components/Menu';
import List from './components/List';
//import MiComponente from './components/MiComponente'

/*function Hola(name,edad) {
  var mostrar= (
  <div>
    <h2>soy {name}</h2>
    <h3>tengo {edad} anio</h3>
  </div>
  );
  return mostrar;
}*/

function App() {
  //var name="isa bel";
  //var edad=15+5;
  return (
    <div className="app">
      <Menu title="proyecto"/>
      <List/>
    </div>
  );
}

export default App;
