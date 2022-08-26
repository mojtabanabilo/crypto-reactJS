import React from 'react';
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const ChartBar = () => {
    return (
            <Bar data={{
                labels: ['XRP', 'Bitcoin', 'USD Coin', 'Solana', 'Shiba Inu', 'Ethereum Classic'],
                datasets: [
                    {
                        label: 'My First Dataset',
                        data: [65, 59, 80, 81, 56, 55, 40],
                        backgroundColor: [
                        'rgba(255, 99, 132)',
                        'rgba(255, 159, 64)',
                        'rgba(255, 205, 86)',
                        'rgba(75, 192, 192)',
                        'rgba(54, 162, 235)',
                        'rgba(153, 102, 255)',
                        'rgba(201, 203, 207)'
                        ]
                    }
                ]
            }}
            width={1800}
            height={300}
            options={{
                maintainAspectRatio: false
            }}/>
    );
};

export default ChartBar;