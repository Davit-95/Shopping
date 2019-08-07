import React, { Component } from 'react';

class Input extends Component {
  render() {
    const {
      input,
      label,
      type,
      meta: { touched, error, warning }
    } = this.props;
    return (
      <div>
        <label>{label}</label>
        <div>
          <input {...input} placeholder={label} type={type}/>
          {touched && error && <span className="error">{error}</span>}
          {touched && warning && <span className="warn">{warning}</span>}
        </div>
      </div>
    );
  }
}

export default Input;
