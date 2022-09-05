import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, Form, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    console.log('Current State is: ' + JSON.stringify(values));
    alert('Current State is: ' + JSON.stringify(values));
    this.props.resetFeedbackForm();
    this.props.postFeedback(values);
  }

  render () {
    return(
        <div className="container">
          <div className="row">
              <Breadcrumb>
                  <BreadcrumbItem><Link to="/home" className="breadcrumb-link">Home</Link></BreadcrumbItem>
                  <BreadcrumbItem active>Contact</BreadcrumbItem>
              </Breadcrumb>
              <div className="col-12">
                  <h3>Contact Information</h3>
                  <hr />
              </div>
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
}

export default Contact;