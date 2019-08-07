import React, { Component } from 'react';
import { connect } from 'react-redux';
import Wrapper from '../components/Wrapper';
import cart from  '../assets/images/cart.png'
import {
  cartCountFetch,
  clearCartFetch,
  fetchCart,
  fetchSingleProduct,
} from '../store/actions/product';
import { cartItemUp, cartTotalCount, delCartIt } from '../store/actions/cart';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state={
      showHideDiv:false
    }
  }
  showHideDivFunction = ()=>{
    this.setState((prevState) => ( {showHideDiv: !prevState.showHideDiv}))
  }

  componentDidMount() {
    this.props.cartCountFetch();
    this.props.fetchCart();
    this.props.cartTotalCount();
  }

  hendleClear = () => {
    this.props.clearCartFetch();
  }

  handleDel = (ev, key) => {
    ev.preventDefault();
    this.props.delCartIt(key);
  }

  hendleUpdate = (key, quantity) => {
    this.props.cartItemUp(key, quantity);
  }

  render() {
    const cartProducts = Object.values(this.props.cartProducts);
    const { cartTotal } = this.props;
    const arr = [];
    const arrr = arr.push(cartTotal);
    const cartUp =this.props

    return (
      <Wrapper headerImage={false}>
        {this.state.showHideDiv ?
          <div className={"divHideCart"}>
         <img src={cart} alt={cart} style={{position:'absolute',width:'500px', height:'300px'}}/>
          </div>
          :null }<div className="main">
        <section className="module module-cart-top">
            <div className="container">
              <div className="row">
                <div className="col-sm-10 col-sm-offset-1">
                  <h1 className="module-title font-alt">Cart</h1>
                  <button style={{marginLeft:'943px',marginTop:'-10px',borderRadius:'8px',width:'100px',height:'50px'}}
                          onClick={this.hendleClear}> Clear Cart</button>
                </div>
              </div>
              <hr className="divider-w pt-20" />
            </div>
        </section>
        <section className="page-module-content module module-cart-bottom">
          <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="woocommerce" />
                  <article id="post-7" className="post-7 page type-page status-publish hentry">
                    <div className="entry-content">
                      <div className="woocommerce">
                        <div className="woocommerce-notices-wrapper" />
                        <form
                          className="woocommerce-cart-form"
                          method="post"
                          onSubmit={ev => ev.preventDefault()}>
                          <table
                            className="shop_table shop_table_responsive cart woocommerce-cart-form__contents"
                            cellSpacing="0">
                            <thead>
                              <tr>
                                <th className="product-remove">&nbsp;</th>
                                <th className="product-thumbnail">&nbsp;</th>
                                <th className="product-name">Product</th>
                                <th className="product-price">Price</th>
                                <th className="product-quantity">Quantity</th>
                                <th className="product-subtotal">Total</th>
                              </tr>
                            </thead>
                            <tbody>
                            {cartProducts.map(d => (
                                <tr key={d.id} className="woocommerce-cart-form__cart-item cart_item">
                                  <td className="product-remove">
                                    <button
                                      style={{ color: 'red', bacground: 'white', borderStyle: 'none',marginLeft:'20px' }}
                                      onClick={(ev) => { this.handleDel(ev, d.key); }}
                                      className="forClearButton">
X
                                    </button>
                                  </td>
                                  <td className="product-thumbnail">
                                    <img
                                      width="58"
                                      height="72"
                                      alt={d.images[0].alt}
                                      src={d.images[0].src}
                                      className="attachment-shop_isle_cart_item_image_size size-shop_isle_cart_item_image_size"/>
                                  </td>
                                  <td className="product-name" data-title="Product">
                                      {d.product_name}
                                  </td>
                                  <td className="product-price" data-title="Price">
                                    <span className="woocommerce-Price-amount amount">
                                      <span
                                        className="woocommerce-Price-currencySymbol">
AMD</span>
                                      {parseFloat(d.regular_price).toFixed(2)}
                                    </span>
                                  </td>
                                  <td className="product-quantity" data-title="Quantity">
                                    <div className="quantity">
                                      <label className="screen-reader-text" htmlFor="quantity_5d0b6315ab7c5">
                                        {d.product_name}
                                      </label>
                                      <input
                                        onClick={() => this.hendleUpdate(d.key, d.quantity)}
                                        type="number"
                                        id="quantity_5d0b6315ab7c5"
                                        className="input-text qty text"
                                        step="1"
                                        min="0"
                                        max=""
                                        name="cart[8e296a067a37563370ded05f5a3bf3ec][qty]"
                                        value={d.quantity}
                                        title="Qty"
                                        size="4"
                                        inputMode="numeric"/>
                                    </div>
                                  </td>
                                  <td className="product-subtotal" data-title="Total">
                                    <span className="woocommerce-Price-amount amount">
                                      <span
                                        className="woocommerce-Price-currencySymbol">
AMD
                                      </span>
                                      {parseFloat(d.quantity * d.regular_price ).toFixed(2)}
                                    </span>
                                  </td>
                                </tr>
                            ))}
                            </tbody>
                          </table>
                        </form>
                        <div className="cart-collaterals">
                          <div className="cross-sells">
                            <h2>You may be interested in…</h2>
                            <ul className="products columns-2">
                              <li
                                className="product type-product post-26 status-publish first instock product_cat-clothing product_cat-t-shirts has-post-thumbnail shipping-taxable purchasable product-type-simple">
                                <div className="prod-img-wrap">
                                    <img
                                      width="262"
                                      height="328"
                                      src="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_7_front-262x328.jpg"
                                      className="attachment-shop_catalog size-shop_catalog wp-post-image"
                                      alt=""
                                      title="T_7_front.jpg"
                                      srcSet="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_7_front-262x328.jpg 262w, https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_7_front-58x72.jpg 58w"
                                      sizes="(max-width: 262px) 100vw, 262px"/>
                                    <img
                                      width="262"
                                      height="328"
                                      src="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_7_back-262x328.jpg"
                                      className="attachment-shop_catalog size-shop_catalog"
                                      alt=""
                                      srcSet="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_7_back-262x328.jpg 262w, https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_7_back-58x72.jpg 58w"
                                      sizes="(max-width: 262px) 100vw, 262px"/>
                                    <div className="product-button-wrap">
                                      <div className="add-to-cart-button-wrap">
                                      </div>
                                    </div>
                                  </div>
                                  <h2 className="woocommerce-loop-product__title">Happy Ninja</h2>
                                  <span className="price">
                                    <span className="woocommerce-Price-amount amount">
                                      <span
                                        className="woocommerce-Price-currencySymbol">AMD
                                      </span>18.00
                                    </span>
                                  </span>
                              </li>
                              <li
                                className="product type-product post-20 status-publish last instock product_cat-clothing product_cat-t-shirts has-post-thumbnail shipping-taxable purchasable product-type-simple">
                                  <div className="prod-img-wrap">
                                    <img
                                      width="262"
                                      height="328"
                                      src="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_6_front-262x328.jpg"
                                      className="attachment-shop_catalog size-shop_catalog wp-post-image"
                                      alt=""
                                      title="T_6_front.jpg"
                                      srcSet="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_6_front-262x328.jpg 262w, https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_6_front-58x72.jpg 58w"
                                      sizes="(max-width: 262px) 100vw, 262px"/>
                                    <img
                                      width="262"
                                      height="328"
                                      src="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_6_back-262x328.jpg"
                                      className="attachment-shop_catalog size-shop_catalog"
                                      alt=""
                                      srcSet="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_6_back-262x328.jpg 262w, https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_6_back-58x72.jpg 58w"
                                      sizes="(max-width: 262px) 100vw, 262px"/>
                                    <div className="product-button-wrap">
                                      <div className="add-to-cart-button-wrap">
                                      </div>
                                    </div>
                                  </div>
                                  <h2 className="woocommerce-loop-product__title">Woo Ninja</h2>
                                  <span className="price">
                                    <span className="woocommerce-Price-amount amount">
                                      <span
                                        className="woocommerce-Price-currencySymbol"
                                      >AMD</span>20.00
                                    </span>
                                  </span>
                              </li>
                            </ul>
                          </div>
                          <div className="cart_totals ">
                            <h2>Cart totals</h2>
                            <table cellSpacing="0" className="shop_table shop_table_responsive">
                              <tbody>
                                <tr className="cart-subtotal">
                                  <th>Subtotal</th>
                                  <td data-title="Subtotal">
                                    {arr.length ? arr.map(i => (
                                      <span className="woocommerce-Price-amount amount">
                                        <span
                                          className="woocommerce-Price-currencySymbol">
AMD
                                        </span>
                                        {i.subtotal}
                                      </span>
                                    )) : null}
                                  </td>
                                </tr>
                                <tr className="woocommerce-shipping-totals shipping">
                                  <th>Shipping</th>
                                  <td data-title="Shipping">
                                    <ul id="shipping_method" className="woocommerce-shipping-methods">
                                      <li>
                                        <input
                                          type="hidden"
                                          name="shipping_method[0]"
                                          data-index="0"
                                          id="shipping_method_0_flat_rate1"
                                          value="flat_rate:1"
                                          className="shipping_method"/>
                                        <label htmlFor="shipping_method_0_flat_rate1">
                                        Flat
                                        rate:
                                          <span className="woocommerce-Price-amount amount">
                                            <span
                                              className="woocommerce-Price-currencySymbol">
AMD
                                            </span>
20.00
                                          </span>
                                        </label>
                                      </li>
                                    </ul>
                                    <p className="woocommerce-shipping-destination">
                                    Shipping options will be updated during checkout.
                                      {' '}
                                    </p>
                                    <form
                                      className="woocommerce-shipping-calculator"
                                      action=""
                                      onSubmit={ev => ev.preventDefault()}
                                      method="post">
                                      <section className="shipping-calculator-form" style={{ display: 'none' }}>
                                        <p
                                          className="form-row form-row-wide validate-required"
                                          id="calc_shipping_state_field">
                                          <input
                                            type="text"
                                            className="input-text"
                                            value=""
                                            placeholder="State / County"
                                            name="calc_shipping_state"
                                            id="calc_shipping_state"
                                            data-placeholder="State / County"/>
                                        </p>
                                        <p
                                          className="form-row form-row-wide validate-required"
                                          id="calc_shipping_city_field">
                                          <input
                                            type="text"
                                            className="input-text"
                                            value=""
                                            placeholder="Town / City"
                                            name="calc_shipping_city"
                                            id="calc_shipping_city"
                                            data-placeholder="Town / City"/>
                                        </p>
                                        <p
                                          className="form-row form-row-wide validate-required"
                                          id="calc_shipping_postcode_field">
                                          <input
                                            type="text"
                                            className="input-text"
                                            value=""
                                            placeholder="Postcode / ZIP"
                                            name="calc_shipping_postcode"
                                            id="calc_shipping_postcode"
                                            data-placeholder="Postcode / ZIP"/>
                                        </p>
                                        <p>
                                          <button type="submit" name="calc_shipping" value="1" className="button">
                                          Update
                                          </button>
                                        </p>
                                        <input
                                          type="hidden"
                                          id="woocommerce-shipping-calculator-nonce"
                                          name="woocommerce-shipping-calculator-nonce"
                                          value="89a888b8ce"/>
                                        <input
                                          type="hidden"
                                          name="_wp_http_referer"
                                          value="/cart/"/>
                                      </section>
                                    </form>
                                  </td>
                                </tr>
                                <tr className="order-total">
                                  <th>Total</th>
                                  <td data-title="Total">
                                    <strong>
                                      {arr.length ? arr.map(i => (
                                      <span className="woocommerce-Price-amount amount">
                                        <span
                                          className="woocommerce-Price-currencySymbol"
                                        >AMD</span>
                                        {i.subtotal   + ' + 20.00'}
                                      </span>
                                      )) :null }
                                    </strong>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <div className="wc-proceed-to-checkout">
                              <button onClick={this.showHideDivFunction}
                                className="checkout-button button alt wc-forward">
                                Proceed to checkout
                              </button>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
               </div>
              </div>
            </div>
          </section>
        </div>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  single: state.product.single,
  addToCartData: state.AddTo.addToCartData,
  cartProducts: state.cart.cartProducts,
  cartCountItem: state.cartCaunt.cartCountItem,
  cartTotal: state.cart.cartTotal,
  cartUp: state.cart.cartUp,

});

const mapDispatchToProps = {
  fetchSingleProduct,
  fetchCart,
  clearCartFetch,
  cartCountFetch,
  delCartIt,
  cartTotalCount,
  cartItemUp,

};
const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);

export default Container;
