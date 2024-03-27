import React from "react";
import { useState, useEffect } from "react";

import Barcharstats3 from "./Barcharstats3";
import 'chart.js/auto';

function Barchartstats2({ month, data }) {
  // const [fetchBar, setFetchBar] = useState([]);
  const [keypairs, setKeyPairs] = useState([]);
  const [valuepairs, setValuePairs] = useState([]);

  useEffect(() => {
    const newData = data.filter((d) => {
      if (month == 6) {
        return d._id.month == month;
      } else {
        return d._id.month == month;
      }
    });

    // console.log(newData)

    const monthlydata = processdata(newData)
    // console.log(monthlydata)
    const {keys, values} = Object;

    // const {key, value} = Object;
    const objkeys = keys(monthlydata)
    // console.log(objkeys)
    const objValues = values(monthlydata);
    // console.log(objValues)


    // const arrayOfObjects = Object.entries(objValues).map(([key, value]) => ({ range: key, count: value }));
    // console.log(arrayOfObjects)

    
    //   arrayOfObjects.map((obj) => (
          
    //       console.log( `Range: ${obj.range}, Count: ${obj.count}`
    //         ) 
    //   ))
  

    
    // for (const [key, value] of Object.entries(objValues)) {
    //   console.log(`${key}: ${value}`);
    // }
    let keysArray = [];
let valuesArray = [];

    objValues.forEach(obj => {
      // Loop through the keys of each object
      Object.keys(obj).forEach(key => {
        // Access the key-value pairs
        // console.log(` ${key}: ${obj[key]}`);
        keysArray.push(key);
      valuesArray.push(obj[key]);

      });
    });

    // console.log(keysArray)
    // console.log(valuesArray)

    
   
   


    


    // prepareChartData(newData);
    // setFetchBar(objValues);
    setKeyPairs(keysArray);
    setValuePairs(valuesArray);
    // console.log(setFetchBar);
    // console.log(fetchBar)
  }, [month, data]);

  const processdata = (newData) => {
    const monthdata = {};
    newData.forEach((item) => {
      const { month, priceRange } = item._id;
      const count = item.count;
      if (!monthdata[month]) {
        monthdata[month] = {
          "0-100": 0,
          "101-200": 0,
          "201-300": 0,
          "301-400": 0,
          "401-500": 0,
          "501-600": 0,
          "601-700": 0,
          "701-800": 0,
          "800-900": 0,
          ">900": 0,
        };
      }
      monthdata[month][priceRange] += count;
    });
   
    return monthdata;
  };

 

 

  return (
    <>
     
{/* <ul>
        {fetchBar.map((obj, index) => (
          <li key={index}>
            
             <ul>
              {Object.entries(obj).map(([range, count]) => (
                <li key={range}>
                  {range}:{count}
                </li>
              ))}
            </ul>
          </li> 
        ))} 
       </ul> 

       <div>
      
      <ul>
        {keypairs.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>

    <div>
      
      <ul>
        {valuepairs.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div> */}


            
      
                <Barcharstats3 k={keypairs} v={valuepairs}/>
     
    </>
  );
}

export default Barchartstats2;
