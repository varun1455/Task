import React from 'react';
// import DisplayData from './components/DisplayData';
import Transactions from './components/Transactions';
import TransactionStatics from './components/TransactionStatics';
import BarChartStats from './components/BarChartStats';
import Piedata from './components/Piedata';
// import SelectOptions from './components/SelectOptions';

function App() {
  return (
    <>
    {/* <SelectOptions/> */}
    <Transactions/>
    <TransactionStatics/>
    <BarChartStats/>
    {/* <DisplayData/> */}
    <Piedata/>
        </>
  );
}

export default App;
