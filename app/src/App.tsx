import React from 'react';
import { Badge, Navbar } from './components';
import './styles/reset.css';
import './styles/variables.css';

function App() {
  return (
    <div>
      <Navbar />
      <div style={{ margin: '20px' }}>
        <Badge label="Hello World" color="success" />
      </div>
    </div>
  );//jn
}

export default App;
