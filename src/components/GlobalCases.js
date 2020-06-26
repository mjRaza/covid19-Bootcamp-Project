import React, { useEffect, useState } from "react";
import { GlobalBox } from "./GlobalBox";

export const GlobalCases = () => {
  const [globalCases, setGlobalCases] = useState({});

  useEffect(() => {
    fetch("https://covid19.mathdro.id/api/")
      .then((res) => res.json())
      .then((result) => {
        setGlobalCases(result);
        console.log(result.confirmed.value);
      });
  }, []);
  return (
    <div>
      {globalCases.confirmed && (
        <GlobalBox
          title="Global Cases"
          confirmed={globalCases.confirmed.value}
          deaths={globalCases.deaths.value}
          recovered={globalCases.recovered.value}
          lastUpdate={globalCases.lastUpdate}
        />
      )}
    </div>
  );
};
