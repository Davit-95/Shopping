import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../components/Wrapper';

class MyAccount extends Component {
  render() {
    return (
      <Wrapper headerImage={false}>
        <div className="main">
          <section className="module module-cart-top">
            <div className="container">
              <div className="row">
                <div className="col-sm-10 col-sm-offset-1">
                  <h1 className="module-title font-alt">My account</h1>
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
                  <article id="post-9" className="post-9 page type-page status-publish hentry">
                    <div className="entry-content">
                      <div className="woocommerce">
                        <div className="woocommerce-notices-wrapper" />
                        <h2>Login</h2>
                        <form className="woocommerce-form woocommerce-form-login login" method="post">
                          <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                          <label htmlFor="username">
                            Username or email address&nbsp;
                            <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            className="woocommerce-Input woocommerce-Input--text input-text"
                            name="username"
                            id="username"
                            autoComplete="username"
                            value=""/>
                        </p>
                          <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                          <label htmlFor="password">
                            Password&nbsp;
                            <span className="required">*</span>
                          </label>
                          <input
                            className="woocommerce-Input woocommerce-Input--text input-text"
                            type="password"
                            name="password"
                            id="password"
                            autoComplete="current-password"/>
                        </p>
                          <p className="form-row">
                          <label className="woocommerce-form__label woocommerce-form__label-for-checkbox woocommerce-form-login__rememberme">
                            <input
                              className="woocommerce-form__input woocommerce-form__input-checkbox"
                              name="rememberme"
                              type="checkbox"
                              id="rememberme"
                              value="forever"/>
                            <span>Remember me</span>
                          </label>
                          <input
                            type="hidden"
                            id="woocommerce-login-nonce"
                            name="woocommerce-login-nonce"
                            value="cacbf47430"/>
                          <input type="hidden" name="_wp_http_referer" value="/my-account/" />
                          <button
                            type="submit"
                            className="woocommerce-button button woocommerce-form-login__submit"
                            name="login"
                            value="Log in">
                            Log in
                          </button>
                        </p>
                          <p className="woocommerce-LostPassword lost_password">
                          <Link to="https://tempwp.orderwebsitenow.com/my-account/lost-password/">Lost your password?</Link>
                        </p>
                        </form>
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

export default MyAccount;
