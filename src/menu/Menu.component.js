import React from 'react';
import './Menu.component.css';

function Menu(props) {
    return(
        <section className="menu" id="menu">
          <div>
            <h1>
                Menu
            </h1>
            <ul>
                <li>
                  <strong>Full Menu</strong>
                </li>
                <li>
                  Party Menu
                </li>
            </ul>
         </div>
      </section>
    )
}

export default Menu;