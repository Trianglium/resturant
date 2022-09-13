import React from 'react';
import './Menu.component.css';
import {CATEGORIES} from '../shared/menuCategories.js';

function MenuCategory(props) {
    return(
        <section id="menu-categories">
        <div className='container'>
            <div className='row'>
                <div className='col-6 col-sm-4 col-md-3 col-lg-2'>

                </div>
                <div className='col-6 col-sm-4 col-md-3 col-lg-2'>
                    
                </div>
                <div className='col-6 col-sm-4 col-md-3 col-lg-2'>
                    
                </div>
            </div>
        </div>
        </section>
    )
}

export default MenuCategory;