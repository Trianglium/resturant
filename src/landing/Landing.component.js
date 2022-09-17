import React from 'react';
import './Landing.component.css';
import { ImageHeader } from '../core/Header.component';
import InfoSection from '../info/Info.component';
import AboutSection from './About.component';
import FoodCarousel from './Slider.component';

function Landing(props) {
    return(
        <div className="fluid-container">
            <ImageHeader />
            <AboutSection />
            <FoodCarousel />
            <InfoSection />
      </div>
    )

};

export default Landing;