import React, { useState, useEffect } from "react";
import FetchData from "./FetchData";
import SideBar from "./SideBar";
import Map from "./Map";

export default function Main() {
  const [selectedCountry, setSelectedCountry] = useState("iran");
  const [countryData, setCountryData] = useState(null);

  function handleClick(name) {
    console.log(name);
    setSelectedCountry(name);
  }

  useEffect(() => {
    FetchData(selectedCountry).then((data) => setCountryData(data));
  }, [selectedCountry]);

  if (!countryData) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="container mt-3">
        <div className="row">
          <Map handleClick={handleClick} />
          <SideBar countryData={countryData} />
        </div>
      </div>
    );
  }
}
