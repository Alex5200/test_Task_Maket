import React from 'react';

const HeroSection = ({ style }) => {
  const buttonStyles = {
    padding: '16px 32px',
    backgroundColor: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontFamily: 'Arial',
    fontSize: '24px',
    fontWeight: 700,
    letterSpacing: '0.96px',
    textTransform: 'uppercase',
    color: '#222222',
    transition: 'background-color 0.3s',
    alignSelf: 'flex-start',
    marginTop: '20px',
    padding: '50px',
    width: '191px',
    height: 'auto',
  };

  const priceItemStyles = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: 'rgba(40, 40, 41, 0.7)',
    borderRadius: '4px',
    border: '0px solid #d5c9be',
    marginBottom: '20px',
    width: 'fit-content',
  };

  const priceTextStyles = {
    fontFamily: 'Prata',
    fontSize: '44px',
    letterSpacing: '1.6px',
    textTransform: 'uppercase',
    color: '#ffffff',
    lineHeight: '150%',
  };

  const descriptionStyles = {
    fontFamily: 'Arial',
    fontSize: '24px',
    color: '#ffffff',
    lineHeight: '110%',
  };

  return (
    <div style={{
      minWidth: '320px',
      width: '100%',
      padding: '60px 20px',
      backgroundColor: '#222222',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      ...style
    }}>
      <div style={{
        maxWidth: '1305px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '20px'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          maxWidth: '50%'
        }}>
          <h1 style={{
            fontFamily: 'Prata',
            fontSize: '80px',
            lineHeight: '120%',
            color: '#ffffff',
            margin: 0
          }}>
            Lorem ipsum<br />
            dolor sit amet
          </h1>

          <p style={{
            fontFamily: 'Arial',
            fontSize: '50px',
            lineHeight: '120%',
            color: '#ffffff',
            margin: 0
          }}>
            sed do eiusmod tempor
          </p>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}>
            <div style={priceItemStyles}>
              <img 
                src="https://dashboard.codeparrot.ai/api/image/Z6HvXTRi7Jes3829/tick-sso.png" 
                alt="Check" 
                style={{ width: '39px', height: '37px', marginRight: '17px' }}
              />
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ display: 'flex', gap: '7px' }}>
                  <span style={priceTextStyles}>$10 000</span>
                </div>
                <span style={descriptionStyles}>consectetur elit</span>
              </div>
            </div>

            <div style={priceItemStyles}>
              <img 
                src="https://dashboard.codeparrot.ai/api/image/Z6HvXTRi7Jes3829/tick-sso-2.png" 
                alt="Check" 
                style={{ width: '39px', height: '37px', marginRight: '17px' }}
              />
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <span style={priceTextStyles}>30%</span>
                <span style={descriptionStyles}>sed do eiusmod tempor</span>
              </div>
            </div>

            <div style={priceItemStyles}>
              <img 
                src="https://dashboard.codeparrot.ai/api/image/Z6HvXTRi7Jes3829/tick-sso-3.png" 
                alt="Check" 
                style={{ width: '39px', height: '37px', marginRight: '17px' }}
              />
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ display: 'flex', gap: '7px' }}>
                  <span style={priceTextStyles}>17%</span>
                </div>
                <span style={descriptionStyles}>adipiscing elit sed do</span>
              </div>
            </div>
          </div>

          <button 
            style={buttonStyles}
            onMouseOver={(e) => e.target.style.backgroundColor = '#f0f0f0'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#ffffff'}
          >
            Order
          </button>
        </div>

        <img 
          src="https://dashboard.codeparrot.ai/api/image/Z6HvXTRi7Jes3829/photo-20.png" 
          alt="Building" 
          style={{ width: '50%', height: 'auto', borderRadius: '4px' }}
        />
      </div>
    </div>
  );
};

HeroSection.defaultProps = {
  style: {}
};

export default HeroSection;

