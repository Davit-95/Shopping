import React, {Component} from 'react';
import Wrapper from "../components/Wrapper";
import {SITE_URL} from "../api";

class ContactUs extends Component {
  render() {
    return (
      <Wrapper headerImage={`${SITE_URL}/wp-content/themes/shop-isle/assets/images/header.jpg`}>
        <section className="module">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 contact-page-content">
                <div className="wpforms-container wpforms-container-full" id="wpforms-104">
                  <form id="wpforms-form-104" className="wpforms-validate wpforms-form" data-formid="104" method="post"
                        encType="multipart/form-data" action="https://tempwp.orderwebsitenow.com/contact-us/"
                        noValidate="novalidate">
                    <div className="wpforms-field-container">
                      <div id="wpforms-104-field_0-container" className="wpforms-field wpforms-field-name"
                           data-field-id="0"><label className="wpforms-field-label"
                                                    htmlFor="wpforms-104-field_0">Name <span
                        className="wpforms-required-label">*</span></label>
                        <div className="wpforms-field-row wpforms-field-medium">
                          <div className="wpforms-field-row-block wpforms-first wpforms-one-half"><input type="text"
                                                                                                         id="wpforms-104-field_0"
                                                                                                         className="wpforms-field-name-first wpforms-field-required"
                                                                                                         name="wpforms[fields][0][first]"
                                                                                                         required=""/><label
                            htmlFor="wpforms-104-field_0" className="wpforms-field-sublabel after ">First</label></div>
                          <div className="wpforms-field-row-block wpforms-one-half"><input type="text"
                                                                                           id="wpforms-104-field_0-last"
                                                                                           className="wpforms-field-name-last wpforms-field-required"
                                                                                           name="wpforms[fields][0][last]"
                                                                                           required=""/><label
                            htmlFor="wpforms-104-field_0-last" className="wpforms-field-sublabel after ">Last</label>
                          </div>
                        </div>
                      </div>
                      <div id="wpforms-104-field_1-container" className="wpforms-field wpforms-field-email"
                           data-field-id="1"><label className="wpforms-field-label"
                                                    htmlFor="wpforms-104-field_1">Email <span
                        className="wpforms-required-label">*</span></label><input type="email" id="wpforms-104-field_1"
                                                                                  className="wpforms-field-medium wpforms-field-required"
                                                                                  name="wpforms[fields][1]" required=""/>
                      </div>
                      <div id="wpforms-104-field_2-container" className="wpforms-field wpforms-field-textarea"
                           data-field-id="2"><label className="wpforms-field-label" htmlFor="wpforms-104-field_2">Comment
                        or Message <span className="wpforms-required-label">*</span></label><textarea
                        id="wpforms-104-field_2" className="wpforms-field-medium wpforms-field-required"
                        name="wpforms[fields][2]" required=""></textarea></div>
                    </div>
                    <div className="wpforms-field wpforms-field-hp"><label htmlFor="wpforms-104-field-hp"
                                                                           className="wpforms-field-label">Comment</label><input
                      type="text" name="wpforms[hp]" id="wpforms-104-field-hp" className="wpforms-field-medium"/></div>
                    <div className="wpforms-submit-container"/><input type="hidden" name="wpforms[id]" value="104"/><input
                      type="hidden" name="wpforms[author]" value="1"/><input type="hidden" name="wpforms[post_id]"
                                                                            value="102"/>
                      <button type="submit" name="wpforms[submit]" className="wpforms-submit " id="wpforms-submit-104"
                              value="wpforms-submit" data-alt-text="Sending...">Submit
                      </button></form></div>
                </div>
              </div>
            </div>
        </section>
      </Wrapper>
    );
  }
}

export default ContactUs;