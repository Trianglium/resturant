import React from 'react';
import './About.component.css';
// eslint-disable-next-line
import { Breadcrumb, BreadcrumbItem, Card, CardImg, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Fade, Stagger } from 'react-animation-components';
import { Loading } from './Loading.component';

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
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
            <div className="col-12 mb-4">
                <h2>Get in Touch</h2>
                </div>
                <div className='col-4'>
                <a href="tel:+6305520200"><i className="fa fa-phone fa-5x"></i></a>
                </div>
              <div className='col-4'>
              <a href="mailto:tasteebite@yahoo.com"><i className="fa fa-envelope-o fa-5x"></i></a>
              </div>
              <div className='col-4'>
                <a href="https://goo.gl/maps/EVQeGkzXFMEHND9g7"><i className="fa fa-map-marker fa-5x"></i></a>
            </div>
            </div>
            <div className="row row-content">
                <div className="col-12 mb-4">
                <h2>Location Information</h2>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                  <Card>
                    <CardImg
                      alt="Tastee Bite Store"
                      src="https://s3-media0.fl.yelpcdn.com/bphoto/2PqMguOeCGYfMwhTOTr34g/o.jpg"
                    />
                  </Card>
                        <h4>Our Address</h4>
                        7000 Burroughs Ave,<br />
                        Plano, Illinois. 60545
                </div>
                <div className="col-12 col-sm-6 offset-sm-1 mb-2">
                    <h4>Map of our Location</h4>
                    
                </div>
            </div>
            <div className="row row-content">
              <div className="col-12 mb-2">
                  <h2>Testimonials</h2>
              </div>
              {leaders}
            </div>
        </div>
    );
}

export default About;