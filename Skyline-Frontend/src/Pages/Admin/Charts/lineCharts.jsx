import React, { PureComponent } from 'react';
import { FaEllipsisV } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, } from 'recharts';

import {  Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

export const chart = () => {
//lineChart
    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
      
      const DATA = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
      ];
      
      const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
      
      const RADIAN = Math.PI / 180;
      const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
          </text>
        );
      };




  return (
    <div className='flex mt-[22px] w-full gap-[30px]'  >
        <div className='basis-[70%]  bg-white shadow-md cursor-pointer rounded-[4px]'>
        <div className='bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-[#EDEDED] md-[20px]'>
          <h2>Amount Overview</h2>
          <FaEllipsisV color='gray' className='cursor-pointer'/>
        </div>
      <div>
      <LineChart
          width={1150}
          height={500}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </div>
      
    </div>

    <div className='basis-[30%] bg-white shadow-md cursor-pointer rounded-[4px] '>
      <div className='bg-[#F8F9FC] flex items-center justify-center py-[15px] px-[20px] border-b-[1px] border-[#EDEDED]'>
       <h2>Revenue Resources</h2>
       <FaEllipsisV color='gray' className='cursor-pointer'/>
      </div>
          <div className=' pl-[35px]'>
          <PieChart width={400} height={400}>
  <Pie
    data={DATA} // Use the correct data array
    cx="50%"
    cy="50%"
    labelLine={false}
    label={renderCustomizedLabel} // Make sure this function is appropriate for your data
    outerRadius={150}
    fill="#8884d8"
    dataKey="value" // Access the correct key for the data
  >
    {DATA.map((entry, index) => (
      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
    ))}
  </Pie>
</PieChart>
<div className='grid grid-cols-4'>{
     DATA.map((item, index) => (
     <p key={index} className=' cursor-pointer font-bold'>{item.name}</p>

     ))
    }
</div>
<div className='grid grid-cols-4 mt-[15px]'>{
  COLORS.map((item, index) => (
    <div className='h-[30px] w-[30px]' style={{backgroundColor:item}} key={index}>

    </div>
  ))
}
</div>
       
          </div>
    </div>
    </div>
  )
}
export default chart