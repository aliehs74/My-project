import React from 'react';


export default function SideBar({ countryData }) {

  const currencyKey = Object.keys(countryData.currencies)[0]; //fix bug in data from api. **key changes when country name changes.

  return (
    <div className="col-12 col-md-3">
      <div className="card">
        <img className="card-img-top" src={countryData.flags.png} alt={countryData.flags.alt} />
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Capital: {countryData.capital[0]}</li>
          <li className="list-group-item">languages: {countryData.languages.fas}</li>
          <li className="list-group-item">Population: {countryData.population}</li>
          <li className="list-group-item">Currency: {countryData.currencies[currencyKey].name}</li>
        </ul>
      </div>
    </div>
  )
};
