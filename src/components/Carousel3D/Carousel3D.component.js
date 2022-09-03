import React from 'react';
import './Carousel3D.component.css';
import { Breadcrumb, BreadcrumbItem, Card, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Fade, Stagger } from 'react-animation-components';
import { Loading } from '../Loading.component';
// eslint-disable-next-line
import { REVIEWS } from '../../shared/reviews';

function RenderReviewSlides({review, isLoading, errMess}) {
    if (isLoading) {
        return(
                <Loading />
        );
    }
    else if (errMess) {
        return(
                <h4>{errMess}</h4>
        );
    }
    else if (review != null) {
        return(
  
          <div key={review.id} className="item">
            <Stagger in>
              <Media tag="li" className="list-unstyled">
                <Fade in>
                  <div className="reviewer-quote-wrapper">
                      <div className="reviewer-quote">
                          <p className='lead'>
                          {review.text}
                          </p>
                          <h4>&mdash; {review.user.name}<br /><em> {review.time_created}</em></h4>
                      </div>
                  </div>
                </Fade>
                </Media>
            </Stagger>
          </div>
        );
      }
      else {
        return(
          <div></div>
        );
      }
  }
  

const Carousel3D = (props) => {
    const reviews = props.reviews.reviews.map((review) => {
        return (
          <div className="col-12" key={review.id}>
            <RenderReviewSlides review={review} isLoading={props.reviewsLoading} errMess={props.reviewsErrMess} />
          </div>
        );
    });

    return(
        <div className="row row-content">
              <div className="col-12 mb-2">
                  <h2>Testimonials</h2>
              </div>
              {reviews}
        </div>
    );
}

export default Carousel3D;