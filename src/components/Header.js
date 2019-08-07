import React, { Component } from 'react';
import Prototype from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { SITE_URL } from '../api';
import {
  cartCountFetch,
} from '../store/actions/product';
import {findProduct} from "../store/actions/find";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state={
      findState:false,
      inputText:''
    }
  }
  static propTypes = {
    headerImage: Prototype.string,
  }

  static defaultProps = {
    headerImage: `${SITE_URL}/wp-content/themes/shop-isle/assets/images/header.jpg`,
  }
  foropen = ()=>{
    this.setState((prevState) => ( {findState: !prevState.findState}))

  }
  hendltext = (ev) => {
    this.setState({inputText: ev.target.value});
  };
   hedleClick = ()=>{
     this.props.findProduct(this.state.inputText)

   }

  render() {
    const { cartCountItem } = this.props;
    const {findDatas}=this.props
    const inputText = this.state
    return (
      <div>

        <header className="header ">
          <nav
            className="navbar navbar-custom navbar-fixed-top  navbar-color-on-scroll navbar-transparent"
            role="navigation">
            <div className="container">
              <div className="header-container">
                <div className="navbar-header">
                  <div className="shop_isle_header_title">
                    <div className="shop-isle-header-title-inner">
                      <h1 className="site-title">
                        <Link
                          to="/Front"
                          title="Front">
                        Home
                        </Link>
                      </h1>
                      <p className="site-description">
                        <Link to="/" title="" rel="home" />
                      </p>
                    </div>
                  </div>
                  <div type="button" className="navbar-toggle" data-toggle="collapse" data-target="#custom-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </div>
                </div>
                <div className="header-menu-wrap">
                  <div className="collapse navbar-collapse" id="custom-collapse">
                    <ul id="menu-menu-1" className="nav navbar-nav navbar-right">
                      <li id="menu-item-44"
                        className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-44">
                        <Link to="/" aria-current="page">
                          <i />
                          Shop
                        </Link>
                      </li>
                      <li
                        id="menu-item-106"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-106">
                        <Link to="/contact-us">
                          <i className="obfx-menu-icon dashicons dashicons-email" />
                          Contact Us
                        </Link>
                      </li>
                      <li
                        id="menu-item-48"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-48">
                        <Link to="/my-account">
                          <i className="obfx-menu-icon fa fa-user" />
                          My account
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="navbar-cart">
                  <div className="header-search">
                    <button  style={{background:'black',borderStyle:'none'}}
                             onClick={this.foropen} className="glyphicon glyphicon-search header-search-button" />
                             {this.state.findState ?
                      <div style={{width:'500px',height:'500px',position:'absolute',color:'black'}} className="header-search-input" >
                      <form
                        role="search"
                        className="woocommerce-product-search">
                        <input onChange={this.hendltext}
                          type="search"
                          className="search-field"
                          placeholder="Search Products…"
                          name="s"
                          title="Search for:"/>
                      </form>
                        <button onClick={this.hedleClick}
                          style={{marginTop:'-30px',position:'absolute',marginLeft:'180px'}}>FIND</button>
                        <div>
                          {findDatas.length?
                             findDatas.map(it=>(
                               <Link
                                 to={`/product/${it.slug}`}
                                 className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                 <div style={{width:'200px',height:'200px',marginLeft:'150px',marginTop:'10px'}} className="prod-img-wrap">
                                   <img
                                     width="262"
                                     height="328"
                                     alt={it.images[0].alt}
                                     src={it.images[0].src}
                                     className="attachment-shop_catalog size-shop_catalog wp-post-image"/>
                                   {it.images[1] ? (
                                     <img
                                       width="262"
                                       height="328"
                                       alt={it.images[1].alt}
                                       src={it.images[1].src}
                                       className="attachment-shop_catalog size-shop_catalog"/>
                                   ) : null}
                                 </div>
                                 <h2 className="woocommerce-loop-product__title" style={{backgroundColor:'white'}}>
                                   {it.name}
                                 </h2>

                                 <span className="price"  style={{backgroundColor:'white'}}>
          {it.regular_price && it.regular_price !== it.price ? (
            <del>
              <span
                className="woocommerce-Price-amount amount">
                <span
                  className="woocommerce-Price-currencySymbol">
                  AMD
                </span>
                {parseFloat(it.regular_price).toFixed(2)}
              </span>
            </del>
          ) : null}
                                   <ins>
            {it.price ? (
                <span
                  className="woocommerce-Price-amount amount">
                <span
                  className="woocommerce-Price-currencySymbol">
AMD
                </span>
                  {parseFloat(it.price).toFixed(2)}
                </span>
              )
              : null}
          </ins>
        </span></Link>))
                            :<div style={{width:'150px',height:'150px',color:'white',marginLeft:'170px',marginTop:'150px',fontSize:'20px'}}>"is Empty"</div>}
                        </div>
                      </div>
                      : null }
                  </div>
                  <div className="navbar-cart-inner">
                    <Link to="/cart" title="View your shopping cart" className="cart-contents">
                      <span className="icon-basket" />
                      <span className="cart-item-number">
                        {cartCountItem || ''}
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
        {this.props.headerImage ? (
          <div className="woocommerce-products-header">
            <section
              className="woocommerce-page-title page-header-module module bg-dark"
              style={{ backgroundImage: `url(${this.props.headerImage})` }}>
              <div className="container">
                <div className="row">
                  <div className="col-sm-6 col-sm-offset-3">
                    <h1 className="module-title font-alt">Shop</h1>
                  </div>
                </div>
              </div>
            </section>
          </div>
        ) : null }
      </div>
    );
  }
}
const mapStateToProps = state => ({
  cartCountItem: state.cartCaunt.cartCountItem,
  findDatas: state.find.findDatas
});

const mapDispatchToProps = {
  findProduct,
  cartCountFetch,
};
const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

export default Container;
