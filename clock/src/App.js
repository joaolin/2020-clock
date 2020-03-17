import React from 'react';
import ReactDOM from 'react-dom';

import ComputerClock from './components/Clock/ComputerClock';

import WorldClock from './components/Clock/WorldClock';

function App(props) {
  return (<div>
    <h1>Clock: Exemplo de Acesso a API Externa</h1>
    <ComputerClock />
    <WorldClock />
  </div>);
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
export default App;
