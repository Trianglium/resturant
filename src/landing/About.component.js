import React from 'react';

function AboutSection(props) {
    return(
        <section className="about-section text-center row" id="about">
        <article className="pe-4 col">
          <h3 className="about-h display-1">
              Gyros
          </h3>
        </article>
        <article className="pe-4 col">
          <h3 className="about-h display-1">
              Beef
          </h3>
        </article>
        <article className="pe-4 col">
          <h3 className="about-h display-1">
              Burgers
          </h3>
        </article>
        <article className="pe-4 col">
          <h3 className="about-h display-1">
              Tacos
          </h3>
        </article>
      </section>
    )
}

export default AboutSection;