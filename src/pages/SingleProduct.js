import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Carousel from 'nuka-carousel';
import _ from 'lodash';
import {AddToCart, cartCountFetch, fetchSingleProduct} from '../store/actions/product';
import Wrapper from '../components/Wrapper';
import RelatedProducts from '../components/widgets/RelatedProducts';
import ExclusiveProducts from '../components/widgets/ExclusiveProducts';


class SingleProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
      showimage:false,
      showimage2:false
    };
  }

  componentDidMount() {
    this.props.cartCountFetch();
    const {slug} = this.props.match.params;
    this.props.fetchSingleProduct(slug);
  }

  showimage = ()=>{
    this.setState((prevState)=>({showimage: !prevState.showimage}))
  }
  showimage2 = ()=>{
    this.setState((prevState)=>({showimage2: !prevState.showimage2}))
  }
  render() {
    const {single} = this.props;
    if (_.isEmpty(single)) {
      return null;
    }
    return (
      <Wrapper headerImage={false}>
        <section className="module module-super-small">
          <div className="container product-main-content">
            <div className="woocommerce-notices-wrapper"/>
            <div id="product-26"
                 className="product type-product post-26 status-publish first instock product_cat-clothing product_cat-t-shirts has-post-thumbnail shipping-taxable purchasable product-type-simple">
              <div
                className="woocommerce-pr oduct-gallery woocommerce-product-gallery--with-images woocommerce-product-gallery--columns-6 images"
                data-columns="6"
                style={{opacity: '1', transition: 'opacity 0.25s ease-in-out 0s'}}>
                <Carousel
                  slideIndex={this.state.slideIndex}
                  afterSlide={slideIndex => this.setState({slideIndex})}
                  slidesToShow={1}
                  cellAlign="center"
                  width="550px">
                  <div className="nkarner">
                    {single.on_sale
                      ? <span className="onsale">Sale!</span>
                      : null}
                    <img
                      width="550"
                      height="500px"
                      alt={single.images[0].alt}
                      src={single.images[0].src}
                      className="attachment-shop_catalog size-shop_catalog wp-post-image"/>
                  </div>
                  <img
                    width="550"
                    height="500px"
                    alt={single.images[1].alt}
                    src={single.images[1].src}
                    className="attachment-shop_catalog size-shop_catalog wp-post-image"/>
                </Carousel>
              </div>
              <nav style={{marginTop: '10px'}}>
                <ol>
                  <li>
                    <button onClick={this.showimage}>
                    <img
                      width="150"
                      height="150px"
                      alt={single.images[0].alt}
                      src={single.images[0].src}
                      className="flex-active"
                      draggable="false"/>
                    </button>
                  </li>
                  <li style={{marginLeft: '200px', marginTop: '-156px'}}>
                    <button onClick={this.showimage2}>
                    <img
                      width="150"
                      height="150px"
                      alt={single.images[1].alt}
                      src={single.images[1].src}
                      className="flex-active"
                      draggable="false"/>
                    </button>
                  </li>
                </ol>
                {this.state.showimage?
                  <div>
                    <button className='forButtClassHide'
                            onClick={this.showimage}> X </button>
                  <img
                    alt={single.images[0].alt}
                    src={single.images[0].src}
                    style={{position:'absolute',height:'600px',width:'600px',marginTop:'-800px',marginLeft:'300px'}}
                  />
                  </div>
                  :null}
                 {this.state.showimage2 ?
                   <div>
                     <button className='forButtClassHide'
                             onClick={this.showimage2}> X </button>
                    <img
                      alt={single.images[1].alt}
                      src={single.images[1].src}
                      style={{position:'absolute',height:'600px',width:'600px',marginTop:'-800px',marginLeft:'300px'}}
                    />
                   </div>
                    :null}
              </nav>
              <div
                className="flex-viewport"
                style={{
                  overflow: 'hidden',
                  height: '555px',
                  marginLeft: '650px ',
                  marginTop: '-700px',
                }}>
                <h1 className="product_title entry-title">{single.name}</h1>
                <div className="summary entry-summary">
                  <span className="price">
          {single.regular_price && single.regular_price !== single.price ? (
            <del>
              <span style={{width: '100px', height: '100px', fontSize: '15px'}}
                    className="woocommerce-Price-amount amount">
                <span className="woocommerce-Price-currencySymbol">
                  AMD
                </span>
                {parseFloat(single.regular_price).toFixed(2)}
              </span>
            </del>
          ) : null}
          <ins>
            {single.price ? (
                <span style={{width: '100px', height: '100px', fontSize: '15px', marginLeft: '20px'}}
                      className="woocommerce-Price-amount amount">
                <span className="woocommerce-Price-currencySymbol">
AMD
                </span>
                  {parseFloat(single.price).toFixed(2)}
              </span>) : null}
          </ins>
        </span>
                  <div className="woocommerce-product-details__short-description">
                    <div dangerouslySetInnerHTML={{__html: single.short_description}}/>
                  </div>
                    <table className="variations" cellSpacing="0">
                      <tbody>
                      <tr>
                        <td className="label">
                          <label htmlFor="pa_color">Color</label>
                        </td>
                        <td className="value">
                          <select
                            id="pa_color"
                            className=""
                            name="attribute_pa_color"
                            data-attribute_name="attribute_pa_color"
                            data-show_option_none="yes">
                            <option value="">Choose an option</option>
                            <option value="black" className="attached enabled">Black</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td className="label">
                          <label htmlFor="size">Size</label></td>
                        <td className="value">
                          <select
                            id="size"
                            className=""
                            name="attribute_size"
                            data-attribute_name="attribute_size"
                            data-show_option_none="yes">
                            <option value="">Choose an option</option>
                            <option value="L" className="attached enabled">L</option>
                          </select>
                          <button
                            className="reset_variations">
                            Clear
                          </button>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                    <div className="single_variation_wrap">
                      <div className="woocommerce-variation single_variation">
                        <div className="woocommerce-variation-price">
                        </div>
                      </div>
                      <div
                        className="woocommerce-variation-add-to-cart variations_button woocommerce-variation-add-to-cart-enabled">
                        <div className="quantity" style={{marginLeft: '60px', marginTop: '40px', height: "50px"}}>
                          <input
                            type="number"
                            id="quantity_5d112eaf830c9"
                            className="input-text qty text"
                            step="1"
                            min="1"
                            max=""
                            name="quantity"
                            // value="1"
                            title="Qty"
                            size="4"
                            inputMode="numeric"/>
                        </div>
                        <button style={{
                          width: '300px',
                          height: "50px",
                          marginLeft: '60px',
                          marginTop: '20px',}}
                                className="single_add_to_cart_button button alt">
                          Add to cart
                        </button>
                        <input type="hidden" name="add-to-cart" value="24"/>
                        <input type="hidden" name="product_id" value="24"/>
                        <input type="hidden" name="variation_id" className="variation_id" value="80"/>
                      </div>
                    </div>
                  <div className="product_meta">
                      <span style={{marginTop: "70px", position: "absolute"}} className="sku_wrapper">
SKU:
                        <span
                          className="sku"
                          data-o_content="HOODIE-SHIP-YOUR-IDEA">
                          {single.sku}
                        </span>
                      </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="summary entry-summary"/>
            <div  style={{marginTop:'150px'}} className="woocommerce-tabs wc-tabs-wrapper">
              <ul className="tabs wc-tabs" role="tablist">
                <li className="description_tab active" id="tab-title-description" role="tab"
                    aria-controls="tab-description">
                  <Link
                    to="https://tempwp.orderwebsitenow.com/product/happy-ninja-2/#tab-description">Description</Link>
                </li>
              </ul>
              <div
                className="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content wc-tab"
                id="tab-description"
                role="tabpanel"
                aria-labelledby="tab-title-description"
                style={{display: 'block'}}>
                <h2 >Description</h2>
                <div dangerouslySetInnerHTML={{__html: single.description}}/>
              </div>
            </div>
          </div>
          <hr className="divider-w"/>
          <ExclusiveProducts/>
          <RelatedProducts/>
          <hr className="divider-w"/>
        </section>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  single: state.product.single,
});

const mapDispatchToProps = {
  fetchSingleProduct,
  AddToCart,
  cartCountFetch,
};
const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SingleProduct);

export default Container;
