import React from "react";
import "./Chart.css";

// components
import ChartBar from "./Chart2";

import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);

const data = {
  labels: ["Bitcoin", "Ethereum", "XRP"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50, 100],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],
};

const Donut = () => {
  return (
    <div className="main">
      <div className="container">
        <h1>Sales Amount</h1>
        <div className="barChart">
          <ChartBar />
        </div>
      </div>
      <div className="container2">
        <div className="part-1">
          <h1>Best Sellers</h1>
          <div className="donutChart">
            <Doughnut data={data} />
          </div>
        </div>
        <div className="information">
          <h2>
            <strong>
              <em>Features of Bitco Web</em>
            </strong>
          </h2>
          <ul>
            <li>Data collection</li>
            <li>Instant buying and selling</li>
            <li>The best security</li>
            <li>24 hour support</li>
            <li>High variety</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Donut;
