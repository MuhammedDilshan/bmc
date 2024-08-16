import React from "react";
import PieChart from "../PieChart/PieChart";
import "./Chart.scss";

const Chart = ({ data, color }) => {
  return (
    <div>
      <div className="chart-container">
        <div className="chart-item">
          <PieChart data={[data?.firstData, data?.secondData]} color={color} />
        </div>
        <div className="text-box">
          <h4>{data?.label}</h4>
          <div className="item">
            <span style={{ background: color[1] }}></span>
            <div className="text">
              <p>Female</p>
              <h2>{data?.firstPercentage}%</h2>
            </div>
          </div>
          <div className="item">
            <span style={{ background: color[0] }}></span>
            <div className="text">
              <p>Male</p>
              <h2>{data?.secondPercentage}%</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
