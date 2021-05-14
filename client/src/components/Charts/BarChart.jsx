import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  const [chartData, setChartData] = useState({});

  const [jan, setJan] = useState(null);
  const [feb, setFeb] = useState(null);
  const [march, setMarch] = useState(null);
  const [april, setApril] = useState(null);
  const [may, setMay] = useState(null);
  const [june, setJune] = useState(null);
  const [july, setJuly] = useState(null);
  const [aug, setAug] = useState(null);
  const [sept, setSept] = useState(null);
  const [oct, setOct] = useState(null);
  const [nov, setNov] = useState(null);
  const [dec, setDec] = useState(null);

  var Jan = 0,
    Feb = 0,
    March = 0,
    April = 0,
    May = 0,
    June = 0,
    July = 0,
    Aug = 0,
    Sept = 0,
    Oct = 0,
    Nov = 0,
    Dec = 0;

  useEffect(() => {
    axios.get(process.env.REACT_APP_URL + "/viewtransactions/").then((res) => {
      console.log(res.data);

      // var edate = new Date(toDate.toString().replace("IST", ""));
      // console.log(start_date);
      // day = edate.getDate();

      // year = edate.getFullYear();

      for (let i = 0; i < res.data.length; i++) {
        var edate = new Date(res.data[i].Date.toString().replace("IST", ""));
        console.log(edate);
        var month = edate.getDate();
        console.log(month);

        switch (month) {
          case 1:
            Jan += 1;
            console.log(Jan);
            break;
          case 2:
            Feb += 1;
            break;
          case 3:
            March += 1;
            break;
          case 4:
            April += 1;
            break;
          case 5:
            May += 1;
            setMay(May);
            console.log(May);
            break;
          case 6:
            June += 1;
            console.log(June);
            break;
          case 7:
            July += 1;
            break;
          case 8:
            Aug += 1;
            break;
          case 9:
            Sept += 1;
            break;
          case 10:
            Oct += 1;
            break;
          case 11:
            Nov += 1;
            break;
          case 12:
            Dec += 1;
            break;
        }
      }
    });
    chart();
  }, []);

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
          label: "Cost Price",
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
          data: [
            jan,
            feb,
            march,
            april,
            may,
            june,
            july,
            aug,
            sept,
            oct,
            nov,
            dec,
          ],
        },

        {
          label: "Sold",
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
          data: [
            jan,
            feb,
            march,
            april,
            may,
            june,
            july,
            aug,
            sept,
            oct,
            nov,
            dec,
          ],
        },
      ],
    });
  };

  // useEffect(() => {
  //   chartOne();
  // }, []);

  return (
    <div>
      <Bar
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            legend: false,
            title: {
              display: true,
              text: "Stock Analytics Chart",
            },
          },
          scales: {
            xAxes: [
              {
                gridLines: {
                  // color: "rgba(0, 0, 0, 0)",
                  display: false,
                },
              },
            ],
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  steps: 10,
                  stepValue: 5,
                  max: 50,
                },
                gridLines: {
                  color: "rgba(0, 0, 0, 0)",
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default BarChart;
