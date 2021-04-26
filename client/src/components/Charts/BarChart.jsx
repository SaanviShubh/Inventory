import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  const [chartData, setChartData] = useState({});
  const chart = () => {
    setChartData({
      labels: [
        "Jan",
        "Feb",
        "March",
        "April",
        "May",
        "June",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Total Sales",
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255,99,132,1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
          data: [65, 59, 80, 81, 56, 99, 40, 80, 81, 56, 55, 40],
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div>
      <Bar
        data={chartData}
        options={{
          responsive: true,
          title: {
            display: true,
            text: "Stock Analytics Chart",
          },
          scales: {
            // xAxes: [
            //   {
            //     gridLines: {
            //       color: "rgba(0, 0, 0, 0)",
            //     },
            //   },
            // ],
            // yAxes: [
            //   {
            //     ticks: {
            //       beginAtZero: true,
            //       steps: 10,
            //       stepValue: 5,
            //       max: 50,
            //     },
            //     gridLines: {
            //       color: "rgba(0, 0, 0, 0)",
            //     },
            //   },
            // ],
          },
        }}
      />
    </div>
  );
};

export default BarChart;
