import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";

const BarChart = ({ graphData }) => {
  const [chartData, setChartData] = useState({});

  const [janDispatched, setJanDispatched] = useState(null);
  const [febDispatched, setFebDispatched] = useState(null);
  const [marchDispatched, setMarchDispatched] = useState(null);
  const [aprilDispatched, setAprilDispatched] = useState(null);
  const [mayDispatched, setMayDispatched] = useState(null);
  const [juneDispatched, setJuneDispatched] = useState(null);
  const [julyDispatched, setJulyDispatched] = useState(null);
  const [augDispatched, setAugDispatched] = useState(null);
  const [septDispatched, setSeptDispatched] = useState(null);
  const [octDispatched, setOctDispatched] = useState(null);
  const [novDispatched, setNovDispatched] = useState(null);
  const [decDispatched, setDecDispatched] = useState(null);

  const [janRet, setJanRet] = useState(null);
  const [febRet, setFebRet] = useState(null);
  const [marchRet, setMarchRet] = useState(null);
  const [aprilRet, setAprilRet] = useState(null);
  const [mayRet, setMayRet] = useState(null);
  const [juneRet, setJuneRet] = useState(null);
  const [julyRet, setJulyRet] = useState(null);
  const [augRet, setAugRet] = useState(null);
  const [septRet, setSeptRet] = useState(null);
  const [octRet, setOctRet] = useState(null);
  const [novRet, setNovRet] = useState(null);
  const [decRet, setDecRet] = useState(null);

  // var Jan = 0,
  // (Feb = 0),
  //   (March = 0),
  //   (April = 0),
  //   (May = 0),
  //   (June = 0),
  //   (July = 0),
  //   (Aug = 0),
  //   (Sept = 0),
  //   (Oct = 0),
  //   (Nov = 0),
  //   (Dec = 0);

  useEffect(() => {
    console.log(graphData);

    for (let i = 0; i < graphData.length; i++) {
      var edate = new Date(graphData[i].Date.toString().replace("IST", ""));
      console.log(edate);
      var month = edate.getDate();
      console.log(month);

      if (graphData[i].action === "Product Dispatched") {
        switch (month) {
          case 1:
            var Jan = 0;
            Jan = Jan + 1;
            setJanDispatched(Jan);
            console.log(Jan);
            break;
          case 2:
            var Feb = 0;
            Feb = Feb + 1;
            setFebDispatched(Feb);
            break;
          case 3:
            var March = 0;
            March = March + 1;
            setMarchDispatched(March);
            break;
          case 4:
            var April = 0;
            April = April + 1;
            setAprilDispatched(April);
            break;
          case 5:
            var May = 0;
            May = May + 1;
            setMayDispatched(May);
            console.log(May);
            break;
          case 6:
            var June = 0;
            June = June + 1;
            setJuneDispatched(June);
            console.log(June);
            break;
          case 7:
            var July = 0;
            July = July + 1;
            setJulyDispatched(July);
            break;
          case 8:
            var Aug = 0;
            Aug = Aug + 1;
            setAugDispatched(Aug);
            break;
          case 9:
            var Sept = 0;
            Sept = Sept + 1;
            setSeptDispatched(Sept);
            break;
          case 10:
            var Oct = 0;
            Oct = Oct + 1;
            setOctDispatched(Oct);
            break;
          case 11:
            var Nov = 0;
            Nov = Nov + 1;
            setNovDispatched(Nov);
            break;
          case 12:
            var Dec = 0;
            Dec = Dec + 1;
            setDecDispatched(Dec);
            break;
        }
      } else if (graphData[i].action === "Product returned") {
        switch (month) {
          case 1:
            var Jan = 0;
            Jan = Jan + 1;
            setJanRet(Jan);
            console.log(Jan);
            break;
          case 2:
            var Feb = 0;
            Feb = Feb + 1;
            setFebRet(Feb);
            break;
          case 3:
            var March = 0;
            March = March + 1;
            setMarchRet(March);
            break;
          case 4:
            var April = 0;
            April = April + 1;
            setAprilRet(April);
            break;
          case 5:
            var May = 0;
            May = May + 1;
            setMarchRet(May);
            console.log(May);
            break;
          case 6:
            var June = 0;
            June = June + 1;
            setJulyRet(June);
            console.log(June);
            break;
          case 7:
            var July = 0;
            July = July + 1;
            setJulyRet(July);
            break;
          case 8:
            var Aug = 0;
            Aug = Aug + 1;
            setAugRet(Aug);
            break;
          case 9:
            var Sept = 0;
            Sept = Sept + 1;
            setSeptRet(Sept);
            break;
          case 10:
            var Oct = 0;
            Oct = Oct + 1;
            setOctRet(Oct);
            break;
          case 11:
            var Nov = 0;
            Nov = Nov + 1;
            setNovRet(Nov);
            break;
          case 12:
            var Dec = 0;
            Dec = Dec + 1;
            setDecRet(Dec);
            break;
        }
      }
    }
    chart();
  }, [graphData]);

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
          label: "Items Sold",
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
            janDispatched,
            febDispatched,
            marchDispatched,
            aprilDispatched,
            mayDispatched,
            juneDispatched,
            julyDispatched,
            augDispatched,
            septDispatched,
            octDispatched,
            novDispatched,
            decDispatched,
          ],
        },
        {
          label: "Returned",
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
            janRet,
            febRet,
            marchRet,
            aprilRet,
            mayRet,
            juneRet,
            julyRet,
            augRet,
            septRet,
            octRet,
            novRet,
            decRet,
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
