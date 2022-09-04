import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './Loading.component';
import { baseUrl } from '../shared/baseUrl';


function RenderPartyMenuItem ({dish, onClick}) {
    return (
        <Card>
            <Link to={`/menu/${dish.id}`} >
                <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

const PartyMenu = (props) => {

    const menu = props.dishes.dishes.map((dish) => {
        return (
            <div className="col-12 col-md-5 m-1"  key={dish.id}>
                <RenderPartyMenuItem dish={dish} onClick={props.onClick} />
            </div>
        );
    });

    if (props.dishes.isLoading) {
        return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.dishes.errMess) {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h4>{props.dishes.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
    else

      return (
          <div className="container">
              <div className="row">
                  <Breadcrumb>
                      <BreadcrumbItem><Link to="/home" className="breadcrumb-link">Home</Link></BreadcrumbItem>
                      <BreadcrumbItem><Link to="/menu" className="breadcrumb-link">Menu</Link></BreadcrumbItem>
                      <BreadcrumbItem active>Party Menu</BreadcrumbItem>
                  </Breadcrumb>
                  <div className="col-12">
                      <h3>Party Menu</h3>
                      <hr />
                  </div>
              </div>
              <div className="row">
                  {menu}
              </div>
          </div>
      );
}

export default PartyMenu;
