import React from "react";

export const Box = ({ title, confirmed, recovered, deaths, lastUpdate }) => {
  return (
    <div className="box-main">
      <div className="case-in-pak">
        <h1>{title}</h1>
      </div>
      <div className="box-contianer">
        <div className="box">
          <h2 style={{ color: "#601fd4", margin: "4px", paddingTop: "10%" }}>
            {confirmed}
          </h2>
          <h4>Confirmed</h4>
        </div>
        <div className="box">
          <h2 style={{ color: "green", margin: "4px", paddingTop: "10%" }}>
            {recovered}
          </h2>
          <h4>Recovered</h4>
        </div>
        <div className="box">
          <h2 style={{ color: "red", margin: "4px", paddingTop: "10%" }}>
            {deaths}
          </h2>
          <h4>Death</h4>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <h5 style={{ color: "#faff00" }}>
          Updated on: {lastUpdate.split("T")[0]}
        </h5>
      </div>
    </div>
  );
};
