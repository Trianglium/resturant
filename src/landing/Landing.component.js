import React from 'react';
import './Landing.component.css';
import { ImageHeader } from './Header.component';
import InfoFooter from './Footer.component';
import AboutSection from './About.component';
import FoodCarousel from './Slider.component';

function Landing(props) {
    return(
        <div className="fluid-container">
            <ImageHeader />
            <AboutSection />
            <FoodCarousel />
            <InfoFooter />
      </div>
    )

};

export default Landing;