import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Prototype from 'prop-types';
import Wrapper from '../components/Wrapper';
import { SITE_URL } from '../api';
import { fetchProducts } from '../store/actions/product';
import ProductItem from '../components/ProductItem';
import Filters from '../components/Filters';


class Home extends Component {
  static propTypes = {
    fetchProducts: Prototype.func.isRequired,
    products: Prototype.array.isRequired,
    match: Prototype.object.isRequired,
    history: Prototype.object.isRequired,
    page: Prototype.number.isRequired,
  }

  constructor(props) {
    super(props);
    this.props.history.listen(this.listener);
  }

  static defaultProps = {};

  componentDidMount() {
    this.listener();
  }


  listener = (location = window.location) => {
    const [, page] = location.pathname.match(/\/page\/(\d+)/) || [null, 1];
    const query = { page };
    const url = new URL(window.location.href);
    const color = url.searchParams.get('color');
    if (color) {
      query.attribute = 'pa_color';
      query.attribute_term = color;
    }
    const min = url.searchParams.get('min');
    const max = url.searchParams.get('max');
    if (min || max) {
      query.min_price = min;
      query.max_price = max;
    }
    this.props.fetchProducts(query);
  }


  render() {
    const { products } = this.props;
    const { prod } = this.props;


    return (
      <Wrapper headerImage={`${SITE_URL}/wp-content/themes/shop-isle/assets/images/header.jpg`}>
        <div className="woocommerce-notices-wrapper" />
        <section className="module-small module-small-shop">
          <div className="container">
            <nav className="woocommerce-breadcrumb">
              <Link to="/">Home</Link>
            </nav>
            <span className="shop-isle-sidebar-open">
              <span className="icon-filter" />
            </span>
            <div className="col-sm-9 shop-with-sidebar" id="shop-isle-blog-container">
              <ul className="products columns-3">
                {products.map(p => (
                  <li
                    key={p.id}
                    className="product type-product post-60 status-publish instock product_cat-posters has-post-thumbnail sale shipping-taxable purchasable product-type-simple">
                    <ProductItem data={p} />
                  </li>
                ))}
              </ul>
              <div className="row">
                <div className="col-sm-12">
                  <nav className="woocommerce-pagination">
                    <ul className="page-numbers">
                      <li>
                        <Link aria-current="page" className="page-numbers current" to="/page/1/">
                          1
                        </Link>
                      </li>
                      <li>
                        <Link className="page-numbers" to="/page/2/">
                          2
                        </Link>
                      </li>
                      <li>
                        <Link className="page-numbers" to="/page/2/">
                          →
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="col-sm-3 col-md-3 sidebar sidebar-shop" style={{ left: '0px' }}>
              <span className="shop-isle-sidebar-close">
                <span className="icon-close" />
              </span>
              <Filters />
            </div>
          </div>
        </section>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  products: state.product.products,
  page: state.product.page,
  prod: state.RangeFiltr.prod,
});

const mapDispatchToProps = {
  fetchProducts,
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

export default Container;
