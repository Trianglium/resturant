import React from 'react';
import './Landing.component.css';
import ReviewSection from './Reviews.component'

export const Amenities = () => {
  return(
    <article className="col 6">
          <p className="about-h">
             
          </p>
    </article>
  )
}

function AboutSection(props) {
    return(
        <div id="about-section">
          <ReviewSection />
      </div>
    )
}

export default AboutSection;