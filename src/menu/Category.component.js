import React, { Component } from 'react';
import './Menu.component.css';
import {CATEGORIES} from '../shared/menuCategories.js';

export const CategoryColumn = ({categoryName}) => {
    if (!categoryName) {
        return(
            <div className='col-6 col-sm-4 col-md-3'></div>
        )
    }
    else {
        return(
            <div className='col-6 col-sm-4 col-md-3'>
                {categoryName}
            </div>
        )
    }
}




class MenuCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullMenuCategories: CATEGORIES.full,
            partyMenuCategories: CATEGORIES.party
        };
    }
    render() {
        const fullCategory = this.state.fullMenuCategories.map((fullMenuCategory) => {
            return(
                <CategoryColumn categoryName={fullMenuCategory.name}/>
            );
        });
        const partyCategory = this.state.partyMenuCategories.map((partyMenuCategory) => {
            return(
                <CategoryColumn categoryName={partyMenuCategory.name}/>
            );
        });
        return(
            <section id="menu-categories">
                <div className='container'>
                    <div className='row'>
                        {fullCategory}
                    </div>
                    <div className='row'>
                        {partyCategory}
                    </div>
                </div>
            </section>
        
        );
    }
}
export default MenuCategory;