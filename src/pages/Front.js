import React, {Component} from 'react';
import Wrapper from "../components/Wrapper";
import front from  '../assets/images/front.jpg'



class Front extends Component {
  render() {
    return (
      <Wrapper headerImage={false}>
        <img src={front} className='imgClass'  width="100%" height="50" />
      <div  className='divClass' >
        <h1>AlleTodo</h1>
      </div>
        <div className='divSecondClass' >
        <h2 >
          We Want to develop online shopping in Armenia
        </h2>
          <h2 style={{marginLeft:'140px'}}>
            Let's do this Togheder
          </h2>
        </div>
      </Wrapper>
    );
  }
}

export default Front;