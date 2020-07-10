import React, {Component} from 'react';
import {Link, animateScroll as scroll} from 'react-scroll';
import {Link as Links, BrowserRouter as Router} from 'react-router-dom';

function Linked(props){
  return(
    <Link
    activeClass="active"
    spy={true}
    smooth={true}
    duration={1000}
    to={props.to}
    activeClassName="selected"><Links to={props.route}>
      {props.text}</Links>
    </Link>
  )
}

class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render(){
    return (
      <Router>
        <div className="wrapper">
          <nav>
            
            <div className="arrow">
              <button id="top" onClick={this.scrollToTop}><i class="fa fa-arrow-up" aria-hidden="true"></i></button>
            </div>

            <div className="logo">
              Stay<span>Healthy</span>
            </div>
            <ul className="right-nav">
              <li><Linked to="header" text="Home" route="/"/></li>
              <li><Linked to="article" text="Article" route="/article"/></li>
              <li><Linked to="counter" text="Counter" route="/counter"/></li> 
            </ul>
          </nav>
        </div>
      </Router>
      
    )
  }

}

export default Navbar;