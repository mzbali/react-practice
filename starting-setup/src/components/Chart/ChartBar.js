import React from 'react';
import './ChartBar.css';

const ChartBar = (props) => {
  const chartFillHeight =
    Math.round((props.value / props.maxValue) * 100) + '%';
  console.log(chartFillHeight);
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: chartFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
