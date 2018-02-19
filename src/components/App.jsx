import React  from 'react';
import './_global.scss';

import Calculator from  './Calculator/Calculator.jsx';

class App extends React.Component {
    render() {
        return <div>
            <h1 style={{textAlign: 'center'}}>Modelo Calculator</h1>
            <Calculator/>
            </div>;
    }
}

export default App;