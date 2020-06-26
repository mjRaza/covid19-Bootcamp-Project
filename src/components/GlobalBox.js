import React from "react";
import { Pie } from "react-chartjs-2";
export const GlobalBox = ({
  title,
  confirmed,
  recovered,
  deaths,
  lastUpdate,
}) => {
  const data = {
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

  return (
    <div style={{ marginTop: "5%" }}>
      <div className="case-in-pak">
        <h1>{title}</h1>
      </div>
      <div className="global-box-main">
        <div>
          <div className="global-box box-1">
            <h4>TOTAL CONFIRMED</h4>
            <h4>{confirmed}</h4>
          </div>
          <div className="global-box box-3">
            <h4>TOTAL RECOVERED</h4>
            <h4>{deaths}</h4>
          </div>
          <div className="global-box box-2 ">
            <h4>TOTAL DEATHS</h4>
            <h4>{recovered}</h4>
          </div>
        </div>

        <div>
          <Pie width={300} height={300} data={data} options={option} />
        </div>
      </div>
    </div>
  );
};
