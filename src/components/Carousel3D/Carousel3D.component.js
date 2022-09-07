import React from 'react';
import './Carousel3D.component.css';
import { Breadcrumb, BreadcrumbItem, Card, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Fade, Stagger } from 'react-animation-components';
import { Loading } from '../Loading.component';
// eslint-disable-next-line
import { REVIEWS } from '../../shared/leaders';

function RenderReviewSlides({leader, isLoading, errMess}) {
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
    else if (leader != null) {
        return(
          <div key={leader.id} className="carousel-3d">
            <Stagger in>
              <div id="carousel">
               <Fade in>
                  <div className="leaderer-quote-wrapper">
                      <div className="leaderer-quote">
                          <p className='lead'>
                          {leader.designation}
                          </p>
                          <h4>&mdash; {leader.user.name}</em></h4>
                      </div>
                   </div>
                 </Fade>
              </div>
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
    const leaders = props.leaders.leaders.map((leader) => {
        return (
          <div className="col-12" key={leader.id}>
            <RenderReviewSlides leader={leader} isLoading={props.leadersLoading} errMess={props.leadersErrMess} />
          </div>
        );
    });

    return(
        <div className="row row-content">
              <div className="col-12 mb-2">
                  <h2>Testimonials</h2>
              </div>
              
              {leaders}
        </div>
    );
}

export default Carousel3D;