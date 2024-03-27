import React from 'react';

import Transactions from './components/Transactions';

import BarChartStats from './components/BarChartStats';

import Statics from './components/Statistics';
import Piestatsdata from './components/Piestatsdata';


function App() {
  return (
    <>
    
    <Transactions/>
    <Statics/>
    <BarChartStats/>
    
    <Piestatsdata/>
        </>
  );
}

export default App;
