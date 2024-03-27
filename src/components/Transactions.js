import React, { useState, useEffect} from "react";

import '../styles/style1.css'
import Transactions2 from "./Transactions2";

function Transactions() {

    const [monthlydata, setMonthlyData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch("http://localhost:8000/display/month", {
          method: "GET",
          headers: {
            accept: "application/json",
          },
          mode: "cors",
        });
  
        const parseddata = await response.json();
        // console.log(parseddata);
        setMonthlyData(parseddata);
      };
  
      fetchData();
    }, []);
    const options = [ {key: 'January', value :1 },
    {key: 'Februray', value :2 },
    {key: 'March', value :3 },
    {key: 'April', value :4 },
    {key: 'May', value :5 },
    {key: 'June', value :6 },
    {key: 'July', value :7 },
    {key: 'August', value :8 },
    {key: 'September', value :9 },
    {key: 'October', value :10 },
    {key: 'November', value :11},
    {key: 'December', value :12 }]
    const [selectedValue, setSelectedValue] = useState(3);
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <div className="tselect"> 
        <select value={selectedValue} onChange={handleChange} defaultValue={3}>
        
          {options.map((option) => (
            <option key={option.key} value={option.value}>
              DashBoard: {option.key}
            </option>
          ))}
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
            <th>Sold</th>
           
            <th>Image</th>
          </tr>
        </thead>

        <tbody>
          <Transactions2 c={monthlydata} v={selectedValue}/>
        </tbody>
      </table>
    </>
  );
}

export default Transactions;

