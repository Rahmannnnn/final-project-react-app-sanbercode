import React from 'react';
import {Link} from 'react-scroll';

function FootLogo() {
    return(
      <div className="foot">
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
        <p>Stay Healthy, Stay Alive</p>
      </div>
    )
  }
  
  export default FootLogo;