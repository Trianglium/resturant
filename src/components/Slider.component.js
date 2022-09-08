import React from 'react';


function FoodCarousel(props) {
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


export default FoodCarousel;