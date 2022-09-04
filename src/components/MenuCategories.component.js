import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './Loading.component';
import { baseUrl } from '../shared/baseUrl';


function RenderMenuCategory ({category, onClick}) {
    return (
        <Card>
            <Link to={`/menu/category/${category.id}`} >
                <CardImgOverlay>
                    <CardTitle>{category.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

const MenuCategories = (props) => {

    const menu = props.categories.categories.map((category) => {
        return (
            <div className="col-12 col-md-5 m-1"  key={category.id}>
                <RenderMenuCategory category={category} onClick={props.onClick} />
            </div>
        );
    });

    if (props.categories.isLoading) {
        return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.categories.errMess) {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h4>{props.categories.errMess}</h4>
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
                      <BreadcrumbItem active>Category</BreadcrumbItem>
                  </Breadcrumb>
                  <div className="col-12">
                      <h3>Menu Categories</h3>
                      <hr />
                  </div>
              </div>
              <div className="row">
                  {menu}
              </div>
          </div>
      );
}

export default MenuCategories;
