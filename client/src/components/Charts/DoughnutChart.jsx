import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = ({ added, dispatched, returned }) => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    var add = added !== null ? added : 1;
    var dispatch = dispatched !== null ? dispatched : 1;
    var ret = returned !== null ? returned : 1;

    console.log(added);
    console.log(dispatched);

    setChartData({
      labels: ["Added", "Dispatched", "Returned"],
      datasets: [
        {
          data: [add, dispatch, ret],
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
  }, [added, dispatched, returned]);

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
