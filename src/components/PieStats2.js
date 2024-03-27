import React from 'react'
import { Doughnut, Pie } from 'react-chartjs-2'
import 'chart.js/auto';
import "../styles/style1.css";

function PieStats2({cat, cnt}) {

    const charData = {
        labels: cat,
        datasets: [
          {
            label: 'Number of Items',
            data: cnt,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(135, 245, 113, 0.2)',
              

              

            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(135, 245, 113, 1)',
            ],
            borderWidth: 2,
          },
        ],
      };
  return (
    <div className='Piechartstyle'>
      <Pie data = {charData}/>
      
    </div>
  )
}

export default PieStats2
