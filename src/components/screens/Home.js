import React from "react";
import { NationalCases } from "../NationalCases";
import { GlobalCases } from "../GlobalCases";
import logo from "../../logo.svg";
import { Navbarr } from "../NavBarr";

export const Home = () => {
  return (
    <>
      <Navbarr />

      <div className="container">
        <div className="logo">
          <img className="logo-image" src={logo} alt="Logo" />
        </div>
        <div className="heading">
          <h1>Covid - 19</h1>
        </div>
        <NationalCases />
        <GlobalCases />
      </div>
    </>
  );
};
