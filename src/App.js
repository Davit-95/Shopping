import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import MyAccount from './pages/MyAccount';
import Cart from './pages/Cart';
import ExclusiveProducts from './components/widgets/ExclusiveProducts';
import RelatedProducts from './components/widgets/RelatedProducts';
import SingleProduct from './pages/SingleProduct';
import ContactUs from './pages/ContactUs';
import Front from "./pages/Front";

class App extends Component {
  static defaultProps = {
    message: '',
  } ;

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/exclusiveproducts" component={ExclusiveProducts} />
            <Route path="/relatedproducts" component={RelatedProducts} />
            <Route path="/singleproduct" component={SingleProduct} />
            <Route path="/product/:slug" component={SingleProduct} />
            <Route path="/product/:slug" component={Cart} />
            <Route path="/cart" component={Cart} />
            <Route path="/Front" component={Front} />
            <Route path="/contact-us" component={ContactUs} />
            <Route path="/my-account" component={MyAccount} />
            <Route path="/page/:page" exact component={Home} />
            <Route path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
