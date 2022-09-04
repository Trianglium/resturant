import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Label, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
import { Loading } from './Loading.component';
import { baseUrl } from '../shared/baseUrl';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

    function RenderCategory({category}) {
        if(category != null) {
            return (
                <div className="col-12 m-1 text-left">
                  <FadeTransform in transformProps={{ exitTransform: 'scale(0.5) translateY(-50%)' }}>
                    <Card>
                        <CardBody>
                            <CardTitle><h5>{category.name}</h5></CardTitle>
                            <CardText><p>{category.description}</p></CardText>
                        </CardBody>
                    </Card>
                  </FadeTransform>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    const MenuCategoryDetail=(props) => {
      if (props.isLoading) {
            return(
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.errMess) {
            return(
                <div className="container">
                    <div className="row">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }
        else if (props.category != null) {
        	 return (
		          <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home" className="breadcrumb-link">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to="/category">Category</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.category.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12 text-left">
                        <h3>{props.category.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderCategory category={props.category} />
                    </div>
                   
                </div>
                </div>
	        );
        	}else{
        		return(<div></div>);
        	}
    }


export default MenuCategoryDetail;
