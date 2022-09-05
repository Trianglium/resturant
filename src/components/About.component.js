import React from 'react';
import './About.component.css';
import { Breadcrumb, BreadcrumbItem, Card, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Fade, Stagger } from 'react-animation-components';
import { Loading } from './Loading.component';
// eslint-disable-next-line
import { baseUrl } from '../shared/baseUrl';

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
                <div className="col-12 col-md-6">
                    <h2>Tastee Bite</h2>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-info text-white">Facts At a Glance</CardHeader>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
              <div className="col-12 mb-2">
                  <h2>Testimonials</h2>
              </div>
              {leaders}
            </div>
            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        7000 Burroughs Ave,<br />
                        Plano, Illinois. 60545<br />
                        
                        <i className="fa fa-phone"></i>: (630) 552 0200<br />
                        
                        <i className="fa fa-envelope"></i>: <a href="mailto:tasteebite@yahoo.com">tasteebite@yahoo.com</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+6305520200"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-success" href="mailto:tasteebite@yahoo.com"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;