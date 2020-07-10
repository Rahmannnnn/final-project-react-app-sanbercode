import React from 'react';
import SocialMedia from './SocialMedia';
import FootLogo from './FootLogo';
import Subscribe from './Subscribe';

function Footer(){
    return (
      <footer className="View">
        <SocialMedia/>
        <FootLogo/>
        <Subscribe/>
      </footer>
    )
}

export default Footer;