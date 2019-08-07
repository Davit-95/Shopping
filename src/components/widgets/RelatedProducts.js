import React, { Component } from 'react';
import { connect } from 'react-redux';
import Prototype from 'prop-types';
import Carousel from 'nuka-carousel';
import { AddToCart, fetchProducts } from '../../store/actions/product';

class RelatedProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  static propTypes = {
    fetchProducts: Prototype.func.isRequired,
    products: Prototype.array.isRequired,
  }

  static defaultProps = {};

  componentDidMount() {
    fetchProducts();
  }

  sendId = (id) => {
    this.props.AddToCart(id);
  }

  render() {
    const { products } = this.props;
    if (!products.length) {
      return null;
    }

    return (
      <div className="container">
        <section className="related products">
          <h2>Related products</h2>
          <Carousel
            slideIndex={this.state.slideIndex}
            afterSlide={slideIndex => this.setState({ slideIndex })}
            slidesToShow={3}
            cellAlign="center"
            autoplay={true}
            autoplayInterval={1000}>
            {products.length ? products.map(p => (
              <ul key={p.id} className="products columns-4">
                <li style={{width:'200px',height:'250px'}}
                  className="product type-product post-18 status-publish first instock product_cat-clothing product_cat-t-shirts has-post-thumbnail sale shipping-taxable purchasable product-type-simple">
                    <div className="prod-img-wrap"  >
                      <img
                        width="262"
                        height="328"
                        alt={p.images[0].alt}
                        src={p.images[0].src}
                        className="attachment-shop_catalog size-shop_catalog wp-post-image"/>
                      {p.images[1] ? (
                        <img
                          width="262"
                          height="328"
                          alt={p.images[1].alt}
                          src={p.images[1].src}
                          className="attachment-shop_catalog size-shop_catalog"/>
                      ) : null}
                      <div className="product-button-wrap">
                        <div className ="add-to-cart-button-wrap">
                          <button style={{width:'120px',height:'50px',background:'black',color:'white'}}
                            onClick={() => { this.sendId(p.id); }}>
                            Add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                    <h2 className="woocommerce-loop-product__title" >{p.name}</h2>
                    {p.on_sale
                      ? <span className="onsale">Sale!</span>
                      : null}
                  <span className="price">
          {p.regular_price && p.regular_price !== p.price ? (
            <del>
              <span
                className="woocommerce-Price-amount amount">
                <span
                  className="woocommerce-Price-currencySymbol">
                  AMD
                </span>
                {parseFloat(p.regular_price).toFixed(2)}
              </span>
            </del>
          ) : null}
                    <ins>
            {p.price ? (
                <span
                  className="woocommerce-Price-amount amount">
                <span
                  className="woocommerce-Price-currencySymbol">
AMD
                </span>
                  {parseFloat(p.price).toFixed(2)}
              </span>
              ) : null}
          </ins>
        </span>
                </li>
              </ul>
            )) : null}
          </Carousel>
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
)(RelatedProducts);

export default Container;
