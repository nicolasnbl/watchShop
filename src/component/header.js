import React from 'react';
import Desktop from './Desktop';
import Logo from './logo';
import Nav from './nav/nav';

const header = () => {
  return (
    <div className="header-block">
      <div className="desktop">
        <Desktop />
      </div>
      <div className="logo-block">
        <Logo />
      </div>
      <div className="nav-block">
        <Nav />
      </div>
    </div>
  )
}

export default header