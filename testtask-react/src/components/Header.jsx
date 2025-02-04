import React, { useState, useEffect } from 'react';

const Header = ({ style = {} }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerStyle = {
    width: '100%',
    minWidth: '320px',
    height: '58px',
    padding: '0 20px',
    backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.9)' : '#222222',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    transition: 'background-color 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...style
  };

  const logoTextStyle = {
    fontFamily: 'Prata',
    fontSize: '36px',
    fontWeight: 400,
    letterSpacing: '1.08px',
    lineHeight: '150%',
    textTransform: 'uppercase',
    color: '#FFFFFF',
  };

  const navStyle = {
    display: 'flex',
    flexDirection: 'row',
    gap: '29px',
  };

  const navLinkStyle = {
    fontFamily: 'Arial',
    fontSize: '16px',
    fontWeight: 400,
    fontStyle: 'italic',
    letterSpacing: '0.64px',
    lineHeight: '150%',
    textTransform: 'uppercase',
    color: '#FFFFFF',
    textDecoration: 'none',
    transition: 'opacity 0.3s ease',
    cursor: 'pointer',
  };

  const navLinkHoverStyle = {
    opacity: 0.8,
  };

  return (
    <header style={headerStyle}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={logoTextStyle}>LOREM</span>
      </div>
      <nav style={navStyle}>
        <a 
          href="#consectetur" 
          style={navLinkStyle}
          onMouseEnter={e => Object.assign(e.target.style, navLinkHoverStyle)}
          onMouseLeave={e => Object.assign(e.target.style, navLinkStyle)}
        >
          consectetur
        </a>
        <a 
          href="#sitamet" 
          style={navLinkStyle}
          onMouseEnter={e => Object.assign(e.target.style, navLinkHoverStyle)}
          onMouseLeave={e => Object.assign(e.target.style, navLinkStyle)}
        >
          sit amet
        </a>
        <a 
          href="#eiusmod" 
          style={navLinkStyle}
          onMouseEnter={e => Object.assign(e.target.style, navLinkHoverStyle)}
          onMouseLeave={e => Object.assign(e.target.style, navLinkStyle)}
        >
          eiusmod tempor
        </a>
      </nav>
    </header>
  );
};

export default Header;

