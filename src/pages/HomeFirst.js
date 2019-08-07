import React, {Component} from 'react';
import {SITE_URL} from "../api";
import Wrapper from '../components/Wrapper';

class HomeFirst extends Component {
    render() {
        return (
            <Wrapper headerImage={`${SITE_URL}/wp-content/themes/shop-isle/assets/images/header.jpg`}>

            </Wrapper>


        );
    }
}

export default HomeFirst;