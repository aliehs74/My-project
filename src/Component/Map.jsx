import React from 'react'
import Mapper from './Map/Mapper';

export default function Map({ handleClick }) {
  return (
    <div className="col col-md-9">
      <Mapper
        className="img-fluid  float-left" alt="map"
        handleClick={handleClick}
      />
    </div>)
}
