import React, { useEffect, useState } from 'react'
import PieStats2 from './PieStats2';

function PieStats1({d, month}) {

    
    const [categoriesdata, setcategoriesdata] = useState([]);
    const [countdata, setcountdata] = useState([]);

    useEffect(()=>{

        const filterdata = d.filter((x)=>{
            if(month==6){
                return x._id.month == month;
            }
            else{
                return x._id.month == month;
            }
        })

        // console.log(filterdata);

        
        const categories = filterdata.map(item => item._id.category);
        const counts = filterdata.map(item => item.count);
        // console.log(categories);
        // console.log(counts);
        
       

       
       setcategoriesdata(categories);
        setcountdata(counts);
    }, [d, month])
  return (
   <>

{/* <ul>
        {selecteddata.map((item, index) => (
          <li key={index}>
             {item._id.category}:{item.count}
          </li>
        ))}
      </ul> */}
      <PieStats2 cat={categoriesdata} cnt = {countdata}/>
   </>
  )
}

export default PieStats1
