import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import ContactPage from './components/contact/ContactPage';
import ProductPage from './components/product/ProductPage';
import ProductDetailsPage from './components/product/ProductDetailsPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="products" component={ProductPage} />
    <Route path="product/:id" component={ProductDetailsPage} />
    <Route path="about" component={AboutPage} />
    <Route path="contact" component={ContactPage} />
  </Route>
);
