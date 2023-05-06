import React from 'react'
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts'

import './Chart.css'
export const Chart = ({ title, data, grid }) => {
    return (
        <div className='chart'>
            <h3 className='chartTitle'>
                {title}
            </h3>
            <ResponsiveContainer width='100%' aspect={4}>
                <LineChart data={data} >
                    <XAxis dataKey='name' stroke='#333' />
                    <Line type='monotone' dataKey='sale' stroke='#333' />
                    <Tooltip  />
                    {grid && <CartesianGrid
                        stroke='#4444' strokeDasharray={2} />}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
