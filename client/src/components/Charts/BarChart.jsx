import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";

const BarChart = ({ graphData }) => {
  const [chartData, setChartData] = useState({});
  const [soldData, setSoldData] = useState([]);
  const [retData, setReturnData] = useState([]);

  useEffect(() => {
    console.log(graphData);

    //For Items Sold Bar
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

    //For Items Returned Bar
    var jan = 0,
      feb = 0,
      march = 0,
      april = 0,
      may = 0,
      june = 0,
      july = 0,
      aug = 0,
      sept = 0,
      oct = 0,
      nov = 0,
      dec = 0;

    for (let i = 0; i < graphData.length; i++) {
      // console.log(graphData);
      // var edate = new Date(graphData[i].Date.toString().replace("IST", ""));
      var month = graphData[i].Date.split("/")[1];
      // console.log(edate);
      // var month = edate.getDate();
      // console.log(month);

      if (graphData[i].action === "Product Dispatched") {
        switch (month) {
          case "01":
            var Jan = Jan + 1;
            break;
          case "02":
            var Feb = Feb + 1;
            break;
          case "03":
            var March = March + 1;
            break;
          case "04":
            var April = April + 1;
            break;
          case "05":
            May = May + 1;
            console.log(May);
            break;
          case "06":
            var June = June + 1;
            break;
          case "07":
            break;
          case 8:
            var Aug = Aug + 1;
            break;
          case 9:
            var Sept = Sept + 1;
            break;
          case 10:
            var Oct = Oct + 1;
            break;
          case 11:
            var Nov = Nov + 1;
            break;
          case 12:
            var Dec = Dec + 1;
            break;
        }
      } else if (graphData[i].action === "Product returned") {
        switch (month) {
          case 1:
            jan = jan + 1;
            break;
          case 2:
            feb = feb + 1;
            break;
          case 3:
            march = march + 1;
            break;
          case 4:
            april = april + 1;
            break;
          case "05":
            may = may + 1;
            console.log(may);
            break;
          case 6:
            june = june + 1;
            break;
          case 7:
            july = july + 1;
            break;
          case 8:
            aug = aug + 1;
            break;
          case 9:
            sept = sept + 1;
            break;
          case 10:
            oct = oct + 1;
            break;
          case 11:
            nov = nov + 1;
            break;
          case 12:
            dec = dec + 1;
            break;
        }
      }
      setSoldData([
        Jan,
        Feb,
        March,
        April,
        May,
        June,
        July,
        Aug,
        Sept,
        Oct,
        Nov,
        Dec,
      ]);

      setReturnData([
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
      ]);
    }
  }, [graphData]);

  return (
    <div>
      <Bar
        data={{
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
              data: soldData,
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
              data: retData,
            },
          ],
        }}
        options={{
          responsive: true,
          plugins: {
            legend: true,
            // title: {
            //   display: true,
            //   text: "Stock Analytics Chart",
            // },
          },
          // scales: {
          //   xAxes: [
          //     {
          //       gridLines: {
          //         // color: "rgba(0, 0, 0, 0)",
          //         display: false,
          //       },
          //     },
          //   ],
          //   yAxes: [
          //     {
          //       ticks: {
          //         beginAtZero: true,
          //         steps: 10,
          //         stepValue: 5,
          //         max: 50,
          //       },
          //       gridLines: {
          //         color: "rgba(0, 0, 0, 0)",
          //       },
          //     },
          //   ],
          // },
        }}
      />
    </div>
  );
};

export default BarChart;
