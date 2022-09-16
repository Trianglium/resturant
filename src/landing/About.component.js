import React from 'react';
import './Landing.component.css';
import ReviewSection from './Reviews.component'

export const AboutAmenities = () => {
  return(
    <article className="pe-4 col-6">
          <p className="about-h">
              Gyros
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