import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { SearchBox } from "./SearchBox";
export const Search = () => {
  const [countries, setCountries] = useState([]);
  const [searchItem, setSearchItem] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://covid19.mathdro.id/api/countries/")
      .then((res) => res.json())
      .then((result) => {
        setCountries(result.countries);
        console.log("Countries:", result);
      });

    fetch("https://covid19.mathdro.id/api/countries/" + searchItem)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        console.log("CountriesData:", result);
      });
  }, [searchItem]);
  const handleChange = (v) => {
    setSearchItem(v.target.value);
  };
  return (
    <>
      <div className="seach-main">
        <Form.Group>
          <Form.Control onChange={handleChange} as="select">
            {countries &&
              countries.map((v, indx) => {
                return <option key={indx}>{v.name}</option>;
              })}
          </Form.Control>
        </Form.Group>
      </div>
      <div className="search-container">
        <div>
          {data.confirmed && (
            <SearchBox
              title={searchItem}
              confirmed={data.confirmed.value}
              deaths={data.deaths.value}
              recovered={data.recovered.value}
              lastUpdate={data.lastUpdate}
            />
          )}
        </div>
      </div>
    </>
  );
};
