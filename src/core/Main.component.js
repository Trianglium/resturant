import React from 'react';
import {FlexNav} from './Navigation.component';
import Landing from '../landing/Landing.component';
import Menu from '../menu/Menu.component';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

function Main(props) {
    return(
        <div className="fluid-container">
            <Router>
                <span>
                <FlexNav />
                <Switch>
                    <Route path="/">
                        <Landing />
                    </Route>
                    <Route path="/menu">
                        <Menu />
                    </Route>
                </Switch>
                </span>
            </Router>


        </div>
    );
}

export default Main;