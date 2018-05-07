import React  from 'react';

import Calculator from  './Calculator/Calculator.jsx';

import './_global.scss';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1 style={{textAlign: 'center'}}>Modelo Calculator</h1>
        <Calculator />
      </React.Fragment>
    );
  }
}

export default App;
