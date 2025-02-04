import React from 'react';

const Footer = ({ style = {} }) => {
  const socialIcons = [
    { src: 'https://dashboard.codeparrot.ai/api/image/Z6HvXTRi7Jes3829/componen.png', alt: 'social-1' },
    { src: 'https://dashboard.codeparrot.ai/api/image/Z6HvXTRi7Jes3829/componen-2.png', alt: 'social-2' },
    { src: 'https://dashboard.codeparrot.ai/api/image/Z6HvXTRi7Jes3829/componen-3.png', alt: 'social-3' },
    { src: 'https://dashboard.codeparrot.ai/api/image/Z6HvXTRi7Jes3829/componen-4.png', alt: 'social-4' },
    { src: 'https://dashboard.codeparrot.ai/api/image/Z6HvXTRi7Jes3829/componen-5.png', alt: 'social-5' },
    { src: 'https://dashboard.codeparrot.ai/api/image/Z6HvXTRi7Jes3829/componen-6.png', alt: 'social-6' },
  ];

  const navLinks = ['consectetur', 'Adipiscing', 'tempor'];

  return (
    <footer style={{
      backgroundColor: '#222222',
      width: '100%',
      minHeight: '329px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      ...style
    }}>
      <div style={{
        width: '100%',
        maxWidth: '1920px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px'
      }}>
        <h1 style={{
          color: '#FFFFFF',
          fontFamily: 'Prata',
          fontSize: '36px',
          letterSpacing: '1.08px',
          textTransform: 'uppercase',
          margin: '20px 0'
        }}>
          Lorem
        </h1>

        <div style={{
          width: '100%',
          height: '2px',
          backgroundColor: '#d5c9be',
          margin: '10px 0'
        }} />

        <nav style={{
          display: 'flex',
          gap: '60px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          {navLinks.map((link, index) => (
            <a
              key={index}
              href="#"
              style={{
                color: '#FFFFFF',
                fontFamily: 'Arial',
                fontSize: '20px',
                letterSpacing: '0.8px',
                fontStyle: 'italic',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}
              onMouseOver={(e) => e.target.style.color = '#d5c9be'}
              onMouseOut={(e) => e.target.style.color = '#FFFFFF'}
            >
              {link}
            </a>
          ))}
        </nav>

        

        <div style={{
          width: '100%',
          height: '2px',
          backgroundColor: '#d5c9be',
          margin: '10px 0'
        }} />

        <div style={{
          display: 'flex',
          gap: '32px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          {socialIcons.map((icon, index) => (
            <img
              key={index}
              src={icon.src}
              alt={icon.alt}
              style={{
                width: '32px',
                height: '32px',
                cursor: 'pointer',
                transition: 'transform 0.3s ease'
              }}
              onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
              onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
            />
          ))}
        </div>

        <div style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px',
          padding: '20px 0'
        }}>
          <span style={{
            color: '#FFFFFF',
            fontFamily: 'Arial',
            fontSize: '20px'
          }}>
            © 2024, Copyright.
          </span>
          <a
            href="#"
            style={{
              color: '#d5c9be',
              fontFamily: 'Arial',
              fontSize: '20px',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.color = '#FFFFFF'}
            onMouseOut={(e) => e.target.style.color = '#d5c9be'}
          >
            Privacy policy
          </a>
          <a
            href="#"
            style={{
              color: '#d5c9be',
              fontFamily: 'Arial',
              fontSize: '20px',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.color = '#FFFFFF'}
            onMouseOut={(e) => e.target.style.color = '#d5c9be'}
          >
            Terms of Use
          </a>
          
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;

