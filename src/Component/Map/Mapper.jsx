import React from 'react'
import AreasJson from './AreasJson';
import ImageMapper from 'react-img-mapper';
import world from './map.jpg'


export default function Mapper({ handleClick }) {

  const URL = world
  const MAP = {
    name: "my-map",
    areas: AreasJson()
  };
  return <ImageMapper
    src={URL}
    map={MAP}
    imgWidth={1000}//original size
    width={600} //necessary size in our project
    onClick={event => handleClick(event.name)}
  />
}
