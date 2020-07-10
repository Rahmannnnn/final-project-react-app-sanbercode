import React, {Component} from 'react';
import {Link} from 'react-scroll';
import {Link as Links, BrowserRouter as Router} from 'react-router-dom';

function Linked(props){
  return(
    <Link

    activeClass="active"
    spy={true}
    smooth={true}
    duration={1000}
    to={props.to}
    activeClassName="selected"><Links to='/'>
      {props.text}</Links>
    </Link>
  )
}

class Navbar extends Component {
  render(){
    return (
      <Router>
        <div className="wrapper">
          <nav>
            <div className="logo">
              Stay<span>Healthy</span>
            </div>
            <ul className="right-nav">
              <li><Linked to="header" text="Home"/></li>
              <li><Linked to="article" text="Article"/></li>
              <li><Linked to="counter" text="Counter"/></li> 
            </ul>
          </nav>
        </div>
      </Router>
      
    )
  }

}

export default Navbar;