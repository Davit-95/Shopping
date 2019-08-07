import React, { Component } from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPriceFiltreF, fetchProducts } from '../../store/actions/product';


class PriceRange extends Component {
  constructor(props) {
    super(props);
    const { min, max } = props.price;
    const url = new URL(window.location.href);
    this.state = {
      value: {
        min : parseInt(url.searchParams.get('min')) || min,
        max: parseInt(url.searchParams.get('max')) || max,
      },
    };
  }

  sendData = () => {
    fetchPriceFiltreF(this.props.price);
    const { min, max } = this.state.value;
    if(min || max){
      this.props.history.push(`?min=${min}&max=${max}`)
    }
  }

  handleChange = (value) => {
    this.setState({ value });
  }

  render() {
    const { min, max } = this.props.price;
    return (
      <div className="widget price mb-50">
        <div className="widget-desc">
          <div className="slider-range">
            <InputRange
              maxValue={max}
              minValue={min}
              value={this.state.value}
              formatLabel={() => ''}
              onChange={this.handleChange}
              onChangeComplete={this.apply}/>
            <div className="price_label">
              <span className="from">
                Price: AMD
                {this.state.value.min.toFixed(2)}
              </span>
              <span className="to">
                {' AMD'}
                {this.state.value.max.toFixed(2)}
              </span>
            </div>
            <button type="submit" className="button" onClick={this.sendData}> Filter</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  prod: state.RangeFiltr.prod,
});

const mapDispatchToProps = {
  fetchProducts,
};
const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PriceRange);

export default withRouter(Container);
