import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from '../../pages/Home';
import About from '../../pages/About';
import Portfolio from '../../pages/Portfolio';
import Contacts from '../../pages/Contacts';
import PostFull from "../../pages/FullArticle";

class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/about" component={About}/>
                    <Route path="/portfolio" component={Portfolio}/>
                    <Route path="/contacts" component={Contacts}/>
                    <Route path="/post/:id" component={PostFull}/>
                </Switch>
            </React.Fragment>
        );
    }
}

export default Main;
