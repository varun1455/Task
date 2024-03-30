import React, { useEffect, useState } from 'react'
import PieStats1 from './PieStats1';

import '../styles/style1.css'

function Piestatsdata() {


    const [categorydata, setCategorydata] = useState([]);

    useEffect(()=>{
        const fetchData = async() =>{
            const response = await fetch('https://task-12-t3n5.onrender.com/display/category/month', {
                method:"GET",
                headers:{
                    accept:"application/json",
                },
                mode:"cors",
            });

            const data = await response.json();
            // console.log(data)
            setCategorydata(data);
        }

        fetchData();
    }, []);

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
    ]

    const [selectoption, setSelectedoption] = useState(6);

    const handleChange = (e) =>{
        // console.log(e.target.value);
        setSelectedoption(e.target.value);
    }
  return (

    <>
    <div className='pieselect'>
      <select  value={selectoption} onChange={handleChange} defaultValue={6}>

        {options.map((option)=>(
            <option key={option.key} value={option.value}>
                PieStats : {option.key}
            </option>
        ))}
      </select>

    </div>

    <PieStats1 d={categorydata} month={selectoption}/>
        </>
  )
}

export default Piestatsdata
