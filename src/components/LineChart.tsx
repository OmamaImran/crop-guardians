import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
type dataset = {
    label: string,
    data: number[]
}
interface lineChartProps {
    labels: string[]
    datasets: dataset[]
    heading: string
}

const LineChart = ({labels, datasets, heading}:lineChartProps) => {
  const data = {
    labels,
    datasets,
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
            color: 'green', 
          },

      },
      x: {
        ticks: {
          color: 'green', 
        },
      },
      
    },
  };

  return (
      <div className='p-2 px-6 h-[210px] w-full bg-white rounded-lg flex flex-col items-center border-opacity-65'>
        <p className='text-sm'>{heading}</p>
        <Line data={data} options={options} />
      </div>
  );
};

export default LineChart;
