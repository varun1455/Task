import React, { useEffect, useState } from 'react'
import Barchartstats2 from './Barchartstats2';

function BarChartStats() {

    const [newdata, setNewdata] = useState([]);
    useEffect(()=>{
        const fetchbardata = async() => {
            const response = await fetch('https://task-12-t3n5.onrender.com/display/priceRangeMonth',
          { method: "GET",
          headers:{
            accept : "application/json",
          },
          mode:'cors'


        })

        const parseddata = await response.json();
        // console.log(parseddata);
        setNewdata(parseddata);

        }
        fetchbardata();
    },[])

    const options = [
        { key: "January", value: 1 },
        { key: "Februray", value: 2 },
        { key: "March", value: 3 },
        { key: "April", value: 4 },
        { key: "May", value: 5 },
        { key: "June", value: 6 },
        { key: "July", value: 7 },
        { key: "August", value: 8 },
        { key: "September", value: 9 },
        { key: "October", value: 10 },
        { key: "November", value: 11 },
        { key: "December", value: 12 },
      ];
    
      const [selectedMonth, setSelectedMonth] = useState(6);
    
      const handleChange = (e) => {
        console.log(e.target.value);
        setSelectedMonth(e.target.value);
      };
  return (
    <>
    <div className="newselect">
        <select  value={selectedMonth} onChange={handleChange} defaultValue={6}>
          {options.map((option) => (
            <option key={option.key} value={option.value}>
              BarChart: {option.key}
            </option>
          ))}
        </select>
      </div>
    <Barchartstats2  month = {selectedMonth} data = {newdata}/>
    </>
      
    
  )
}

export default BarChartStats
