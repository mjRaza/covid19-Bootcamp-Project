import React from "react";
import { Pie, Bar } from "react-chartjs-2";
export const SearchBox = ({
  title,
  confirmed,
  recovered,
  deaths,
  lastUpdate,
}) => {
  //   {
  //   label: "confirmed",
  //   data: confirmed,
  //   backgroundColor: " rgb(96, 31, 212)",
  // },
  // {
  //   label: "recovered",
  //   data: recovered,
  //   backgroundColor: "red",
  // },
  // {
  //   label: "deaths",
  //   data: deaths,
  //   backgroundColor: "red",
  // },
  let data = {
    labels: ["Confirmed", "Recovered", "Deaths"],
    datasets: [
      {
        label: "Globall",
        data: [confirmed, recovered, deaths],
        backgroundColor: [" rgb(96, 31, 212)", "green", "red"],
      },
    ],
  };
  const option = {
    responsive: "true",
  };
  //
  // const getChartData =  {
  //       labels: ['chartLabel'],
  //       datasets: [
  //         {
  //           label: 'confirmed',
  //           data: confirmed,
  //           // backgroundColor: '#000A12',
  //           borderColor: '#f2b900',
  //           borderWidth: 1
  //         },
  //         {
  //           label: 'recovered',
  //           data: recovered,
  //           // backgroundColor: '#000A12',
  //           borderColor: '#52cc99',
  //           borderWidth: 1
  //         },
  //         {
  //           label: 'deaths',
  //           data: deaths,
  //           // backgroundColor: '#000A12',
  //           borderColor: '#f26353',
  //           borderWidth: 1
  //         },
  //       ]
  //   }
  return (
    <div style={{ marginTop: "2%" }}>
      <div className="cases-in-country">
        <h1>{title}</h1>
      </div>
      <div class="chart-container">
        <Bar data={data} options={option} />
      </div>
      <div className="search-box-main">
        <div>
          <div className="global-box box-1">
            <h4>TOTAL CONFIRMED</h4>
            <h4>{confirmed}</h4>
          </div>
          <div className="global-box box-3">
            <h4>TOTAL RECOVERED</h4>
            <h4> {recovered}</h4>
          </div>
          <div className="global-box box-2 ">
            <h4>TOTAL DEATHS</h4>
            <h4>{deaths}</h4>
          </div>
        </div>

        <div>
          <Pie width={300} height={300} data={data} options={option} />
        </div>
      </div>
    </div>
  );
};
