import React, {Component} from 'react';
import {Link, animateScroll as scroll} from 'react-scroll';

function Linked(props){
  return(
    <Link
    activeClass="active"
    spy={true}
    smooth={true}
    duration={1000}
    to={props.to}
    activeClassName="selected">
      {props.text}
    </Link>
  )
}

class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render(){
    return (
        <div className="wrapper" data-testid="Navbar">
          <div className="telegram">
              <button onClick={() => (window.open("https://t.me/RahmanGhani"))}><i class="fa fa-telegram" aria-hidden="true"></i></button>
          </div>

          <div className="instagram">
            <button onClick={() => (window.open("https://www.instagram.com/rahman_ghni"))}><i class="fa fa-instagram" aria-hidden="true"></i></button>
          </div>

          <div className="github">
            <button onClick={() => (window.open("https://www.github.com/rahmannnnn"))}><i class="fa fa-github" aria-hidden="true"></i></button>
          </div>
          <nav>
            
            <div className="arrow">
              <button id="top" onClick={this.scrollToTop}><i class="fa fa-arrow-up" aria-hidden="true"></i></button>
            </div>



            <div className="logo">
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                duration={1000}
                to="header"
                activeClassName="selected">
                  Stay<span>Healthy</span>
              </Link>
              
            </div>
            <ul className="right-nav">
              <li><Linked to="header" text="Home"/></li>
              <li><Linked to="article" text="Article"/></li>
              <li><Linked to="counter" text="Counter"/></li>
              <li><Linked to="converter" text="Converter"/></li>  
            </ul>
          </nav>
        </div>
    )
  }

}

export default Navbar;