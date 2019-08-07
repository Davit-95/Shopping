import React, { Component } from 'react';
import Prototype from 'prop-types';
import { connect } from 'react-redux';
import {AddToCart, fetchProducts} from '../../store/actions/product';


class ExclusiveProducts extends Component {
  static propTypes = {
    fetchProducts: Prototype.func.isRequired,
    products: Prototype.array.isRequired,
    randomItem: Prototype.array.isRequired,
  }
  componentDidMount() {
    fetchProducts();
  }
  handleClick = (id) => {
      this.props.AddToCart(id)
  }

  render() {
    const { products } = this.props;
    const randomItem = products[Math.floor(Math.random() * products.length)];
    const arr = [];
    const arrr = arr.push(randomItem);

    return (
      <div className="container">
        <section className="up-sells upsells products" >
          <h2>You may also like…</h2>
          {arr.length ? arr.map(p => (
            <ul className="products columns-3">
              <li  style={{  marginLeft:"450px" }} className="product type-product post-27 status-publish first instock product_cat-clothing product_cat-hoodies has-post-thumbnail shipping-taxable purchasable product-type-simple">
                <div className="prod-img-wrap" >
                  {p.images[0]?
                  <img
                    width="262"
                    height="328"
                    alt={p.images[0].alt}
                    src={p.images[0].src}
                    className="attachment-shop_catalog size-shop_catalog wp-post-image"/> :''}
                  {p.images[1] ? (
                    <img
                      width="262"
                      height="328"
                      alt={p.images[1].alt}
                      src={p.images[1].src}
                      className="attachment-shop_catalog size-shop_catalog"/>
                  ) : null}
                  <div className="product-button-wrap">
                    <div className="add-to-cart-button-wrap">
                      <button
                        onClick={() => { this.handleClick(p.id); }}
                        data-quantity="1"
                        className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                        data-product_id="27"
                        data-product_sku="HOODIE-HAPPY-NINJA"
                        aria-label="Add “Happy Ninja” to your cart"
                        rel="nofollow">
Add to cart
                      </button>
                    </div>
                  </div>
                </div>
                <h2 className="woocommerce-loop-product__title">
                  {p.name}
                </h2>
                {p.on_sale
                  ? <span className="onsale">Sale!</span>
                  : null}
                <span className="price">
                  <span className="woocommerce-Price-amount amount">
                    <span className="woocommerce-Price-currencySymbol">AMD</span>
                    {parseFloat(p.regular_price).toFixed(2)}
                  </span>
                </span>
              </li>
            </ul>
          )) : null}
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.product.products,
  page: state.product.page,
  prod: state.RangeFiltr.prod,
});

const mapDispatchToProps = {
  AddToCart,
  fetchProducts,
};
const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExclusiveProducts);

export default Container;
