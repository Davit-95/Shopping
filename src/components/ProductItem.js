import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {AddToCart, cartCountFetch} from '../store/actions/product';

class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
      show:false,
    };
  }

  handleClick = (ev) => {
    const {data} = this.props;
    ev.preventDefault();
    this.props.AddToCart(data.id);
    this.props.cartCountFetch();
    this.setState((prevState) => ( {show: !prevState.show}))
  }

  render() {
    const {data} = this.props;
    const {color} = this.props;

    return (
      <Link
        to={`/product/${data.slug}`}
        className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
        <div className="prod-img-wrap">
          <img
            width="262"
            height="328"
            alt={data.images[0].alt}
            src={data.images[0].src}
            className="attachment-shop_catalog size-shop_catalog wp-post-image"/>
          {data.images[1] ? (
            <img
              width="262"
              height="328"
              alt={data.images[1].alt}
              src={data.images[1].src}
              className="attachment-shop_catalog size-shop_catalog"/>
          ) : null}
          <div className="product-button-wrap">
            <div className="add-to-cart-button-wrap">
              <button
                onClick={this.handleClick}
                className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                style={{width:'200px'}}>
                Add to cart
              </button>

            </div>
            {this.state.show ?
              <Link to='/Cart' ><h2 style={{background:'green',width:'150px',
                height:'50px',color:'white',marginLeft:'70px',marginTop:'10px',
                padding:'15px',borderRadius:'8px'}}>View Cart</h2>
              </Link>
              :''}
          </div>
        </div>
        <h2 className="woocommerce-loop-product__title">
          {data.name}
        </h2>
        {data.on_sale
          ? <span className="onsale">SALE</span>
          : ''}
        <span className="price">
          {data.regular_price && data.regular_price !== data.price ? (
            <del>
              <span
                className="woocommerce-Price-amount amount">
                <span
                  className="woocommerce-Price-currencySymbol">
                  AMD
                </span>
                {parseFloat(data.regular_price).toFixed(2)}
              </span>
            </del>
          ) : null}
          <ins>
            {data.price ? (
                <span
                  className="woocommerce-Price-amount amount">
                <span
                  className="woocommerce-Price-currencySymbol">
AMD
                </span>
                  {parseFloat(data.price).toFixed(2)}
                </span>
              )
              : null}
          </ins>
        </span>
      </Link>
    );
  }
}


const mapStateToProps = state => ({
  color: state.ColorFilter.color,
});

const mapDispatchToProps = {
  AddToCart,
  cartCountFetch,
};
const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductItem);

export default Container;
