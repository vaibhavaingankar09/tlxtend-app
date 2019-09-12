import React from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';

import About from './About';
import Users from './Users';
import Header from './Header';
import AlbumContainer from '../containers/AlbumContainer';
import PhotosContainer from '../containers/PhotosContainer';

const Layout = () => (
    <Router>
        <Header />
        <Route path="/" exact component={AlbumContainer} />
        <Route path="/albumDetails/:id" exact component={PhotosContainer} />
        <Route path="/users" exact component={Users} />
    </Router>);

export default Layout; 