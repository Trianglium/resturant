import React from 'react';
import './Landing.component.css';


export const Amenities = ({amenity, icon}) => {
  return(
    <article className="col 6">
          <span className='float-start'><p className="about-h">{}</p></span>
          <span className='float-none'><p className="about-h">{}</p></span>
    </article>
  )
}

function AmenitiesSection(props) {
    return(
        <div id="about-section">

      </div>
    )
}

export default AmenitiesSection;