import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = () => {
  const [chartData, setChartData] = useState({});
  const chart = () => {
    setChartData({
      labels: ["Added", "Dispatched", "Returned"],
      datasets: [
        {
          data: [32, 43, 12],
          backgroundColor: [
            "rgb(10%, 68%, 47%)",
            "rgb(57%, 35%, 81%)",
            "rgb(91%, 16%, 16%)",
          ],
          borderWidth: 1,
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div>
      <Doughnut
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
              text: "Stock Analytics Chart",
            },
          },
        }}
      />
    </div>
  );
};

export default DoughnutChart;
