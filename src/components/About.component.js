import React from 'react';
import './About.component.css';
// eslint-disable-next-line
import { Breadcrumb, BreadcrumbItem, Card, CardImg, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Fade, Stagger } from 'react-animation-components';
import { Loading } from './Loading.component';
import { ContactInfo, LocationInfo } from './Contact.component';

function RenderLeader({leader, isLoading, errMess}) {
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

        <div key={leader.id} className="col-3 mt-5">
          <Stagger in>
            <Media tag="li" className="list-unstyled">
              <Fade in>
                <div className="reviewer-quote-wrapper">
                    <div className="reviewer-quote">
                        <p className='lead'>
                        {leader.designation}
                        </p>
                        <h4>&mdash; {leader.name}<br /><em> {leader.designation}</em></h4>
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


const About = (props) => {
    const leaders = props.leaders.leaders.map((leader) => {
        return (
          <div className="col-3" key={leader.id}>
            <RenderLeader leader={leader} isLoading={props.leadersLoading} errMess={props.leadersErrMess} />
          </div>
        );
    });

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home" className="breadcrumb-link">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12 mb-2">
                  <div className='hero-image'></div>
                    <h3>About Us</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
            <div className="col-12 mb-2">
                <h2>Get in Touch</h2>
                </div>
                <ContactInfo />
            </div>
            <div className="row">
                <div className="col-12 mb-4">
                <h2>Location Information</h2>
                </div>
                <LocationInfo />
            </div>
            <div className="row">
              <div className="col-12 mb-2">
                  <h2>Testimonials</h2>
              </div>
              {leaders}
            </div>
        </div>
    );
}

export default About;