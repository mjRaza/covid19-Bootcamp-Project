import React, { useEffect, useState } from "react";
import { Box } from "../components/Box";

export const NationalCases = () => {
  const [caseInPak, setCaseInPak] = useState({});
  useEffect(() => {
    fetch("https://covid19.mathdro.id/api/countries/Pak")
      .then((res) => res.json())
      .then((result) => {
        setCaseInPak(result);
      });
  }, []);
  return (
    <div className="container">
      <div>
        {caseInPak.confirmed ? (
          <div>
            <Box
              title="Cases In Pakistan"
              confirmed={caseInPak.confirmed.value}
              deaths={caseInPak.deaths.value}
              recovered={caseInPak.recovered.value}
              lastUpdate={caseInPak.lastUpdate}
            />
          </div>
        ) : (
          <h1>loading</h1>
        )}
      </div>
    </div>
  );
};
