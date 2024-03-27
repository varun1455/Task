import React from 'react'
// import Chart from 'chart.js'
// import { Chart } from "chart.js";
// import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import "../styles/style1.css";

function Barcharstats3({k,v}) {

  // console.log(k, "from 3")
  // console.log(v, "from 3");

  



  const chartData = {
    labels: k, // Extract price ranges as labels
    datasets: [
      {
        label: 'Number of Items per range',
        data: v, // Extract counts as data values
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(255, 140, 0, 0.2)', 
        'rgba(149, 242, 99, 0.2)',
        'rgba(152, 78, 163, 0.2)',
        'rgba(128, 128, 128, 0.2)',
        'rgba(0, 128, 128, 0.2)',
        'rgba(145, 7, 16, 0.2)',
         
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255, 140, 0, 1)', 
          'rgba(149, 242, 99, 1)',
          'rgba(152, 78, 163, 1)',
          'rgba(128, 128, 128, 1)',
          'rgba(0, 128, 128, 1)',
          'rgba(145, 7, 16, 1)',
         
        ],
        borderWidth: 2,
        barPercentage: 1,
      },
    ],
  };
  return (
   <>
   

   <div className='barchart'>
        <Bar data={chartData} />
   </div>
   
    
   </>
  )
}

export default Barcharstats3
