import React, { Component } from 'react';
import './HorizontalSlider.component.css';

function slider(props) {
    return (
        <ul class="gallery">
            <li className="slide"></li>
            <li className="slide"></li>
            <li className="slide"></li>
            <li className="slide"></li>
            <li className="slide"></li>
        </ul>
    );
}

class HorizontalSlider extends Component {
    constructor(props) {
        super(props);
        this.scroll_speed = 3;
        this.isDown = false;

        this.state = {
            isDown: false,
            startX: 0,
            scrollLeft: 0,

          };
        
    }

    handleMouseDown = (event) => {
        event.preventDefault();
        this.setState({
            isDown: true
        });
        startX = event.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    };
    
    handleMouseUp = (event) => {
        event.preventDefault();
    };
    
    handleMouseLeave = (event) => {
        event.preventDefault();
    };
    
    handleMouseMove = (event) => {
        if (!isDown) return;
        event.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * this.scroll_speed;
        slider.scrollLeft = scrollLeft - walk;
    };
}