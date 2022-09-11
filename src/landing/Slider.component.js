import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from 'reactstrap';

import {items} from '../shared/foodSlides';

// eslint-disable-next-line
function FoodCarouselFunc(props) {
    return(
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="../../public/assets/images/tacos-dinner-slide.jpg" className="d-block w-100" alt="taco dinner"/>
            </div>
            <div className="carousel-item">
                <img src="../../public/assets/images/tacos-plate-slide.jpg" className="d-block w-100" alt="taco plate of three"/>
            </div>
            <div className="carousel-item">
                <img src="../../public/assets/images/tacos-corn-slide.jpg" className="d-block w-100" alt="corn tacos"/>
            </div>
            <div className="carousel-item">
                <img src="../../public/assets/images/chips-salsa-slide.jpg" className="d-block w-100" alt="chips and salsa"/>
            </div>
            <div className="carousel-item">
                <img src="../../public/assets/images/burgers-slide.jpg" className="d-block w-100" alt="burger"/>
            </div>
            <div className="carousel-item">
                <img src="../../public/assets/images/salad-slide.jpg" className="d-block w-100" alt="salad"/>
            </div>
            <div className="carousel-item">
                <img src="../../public/assets/images/chicken-slide.jpg" className="d-block w-100" alt="chicken"/>
            </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
            </a>
      </div>
    )
}


class FoodCarousel extends Component {
    constructor(props) {
      super(props);
      this.state = { activeIndex: 0 };
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
      this.goToIndex = this.goToIndex.bind(this);
      this.onExiting = this.onExiting.bind(this);
      this.onExited = this.onExited.bind(this);
    }
  
    onExiting() {
      this.animating = true;
    }
  
    onExited() {
      this.animating = false;
    }
  
    next() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
      this.setState({ activeIndex: nextIndex });
    }
  
    previous() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
      this.setState({ activeIndex: nextIndex });
    }
  
    goToIndex(newIndex) {
      if (this.animating) return;
      this.setState({ activeIndex: newIndex });
    }
  
    render() {
      const { activeIndex } = this.state;
  
      const slides = items.map((item) => {
        return (
          <CarouselItem
            className=""
            tag="div"
            key={item.id}
            onExiting={this.onExiting}
            onExited={this.onExited}
          >
            <img src={item.src} alt={item.altText} className="img-h-4"/>
          </CarouselItem>
        );
      });
  
      return (
        <div>
          <style>
            {
              `.custom-tag {
                  max-width: 100%;
                  height: 700px;
                  background: black;
                }`
            }
          </style>
          <Carousel
            activeIndex={activeIndex}
            next={this.next}
            previous={this.previous}
          >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
          </Carousel>
        </div>
      );
    }
  }




export default FoodCarousel;