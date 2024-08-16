import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data, color }) => {
  const collection = {
    labels: ["Male", "Female"],
    datasets: [
      {
        label: "Gender",
        data: [data[0], data[1]],
        backgroundColor: [color[0], color[1]],
        borderColor: [color[0], color[1]],
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div style={{ width: "250px", margin: "0 auto " }}>
      <Pie data={collection} options={options} />
    </div>
  );
};

export default PieChart;
