import React, { Component } from 'react';
import './About.component.css';
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
                <div className="col-12 col-md-3 pt-4">
                <div className="pt-4 mt-2">
                    <h2>Visit Us</h2>
                </div>
                    <div className="mt-2 pt-3">
                        <h4>
                        <small class="text-muted">
                            7000 Burroughs Ave.<br />
                            Plano, Illinois. 60545<br />
                            </small>
                        </h4> 
                        </div>
                </div>
                <div className="col-12 col-md-7">
                    <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d47697.561023106675!2d-88.566049!3d41.653634!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf310a31d074d580b!2sTastee%20Bite!5e0!3m2!1sen!2sus!4v1662395006091!5m2!1sen!2sus" width="900" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                
            </div>

        </div>
    );
  }
}

export default Contact;