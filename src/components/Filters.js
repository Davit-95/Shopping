import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import PriceRange from './widgets/PriceRange';
import { fetchCheapAndExpensiveProducts, fetchColorFilter } from '../store/actions/product';

class Filters extends Component {
  componentDidMount() {
    this.props.fetchCheapAndExpensiveProducts();
    this.props.fetchColorFilter();
    this.props.fetchColorFilter({ attribute: 'pa_color', attribute_term: 55, page: 2 });
  }
  render() {
    const { price } = this.props;
    const { color } = this.props;
    return (

      <aside id="secondary" className="widget-area" role="complementary">
        <div
          id="woocommerce_layered_nav-2"
          className="widget woocommerce widget_layered_nav woocommerce-widget-layered-nav">
          <h3 className="widget-title">
            Filter by
          </h3>
          <ul className="woocommerce-widget-layered-nav-list">
            {color.map(c => (
              <li key={c.id}
                className="woocommerce-widget-layered-nav-list__item wc-layered-nav-term ">
                <Link to={`./?color=${c.id}`}>
                  {c.name}
                </Link>
                <span className="count">
                  {c.count}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div id="woocommerce_price_filter-2" className="widget woocommerce widget_price_filter">
          <h3 className="widget-title">Filter by price</h3>
          <div className="price_slider_wrapper">
            {!_.isEmpty(price) ? <PriceRange price={price} /> : null}
          </div>
        </div>
      </aside>
    );
  }
}


const mapStateToProps = state => ({
  price: state.product.price,
  color: state.ColorFilter.color,
});

const mapDispatchToProps = {
  fetchCheapAndExpensiveProducts,
  fetchColorFilter,
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Filters);

export default Container;
