import React from 'react';
import './Landing.component.css';

export const AboutAmenities = () => {
  return(
    <article className="pe-4 col">
          <p className="about-h">
              Gyros
          </p>
    </article>
  )
}

function AboutSection(props) {
    return(
        <section className="about-section text-center row" id="about">
        <article className="pe-4 col">
          <p className="about-h">
              Gyros
          </p>
        </article>
        <article className="pe-4 col">
          <p className="about-h">
              Beef
          </p>
        </article>
        <article className="pe-4 col">
          <p className="about-h">
              Burgers
          </p>
        </article>
        <article className="pe-4 col">
          <p className="about-h">
              Tacos
          </p>
        </article>
      </section>
    )
}

export default AboutSection;