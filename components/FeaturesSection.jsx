import React from 'react';
import IconList from './img/icon-list.png'
import TowerImg1 from './img/towerImg1.png'
import TowerImg2 from './img/towerImg2.png'

const FeaturesSection = ({ style = {} }) => {
  const features = [
    {
      icon: IconList,
      text: 'Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor'
    },
    {
      icon: IconList,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
    },
    {
      icon: IconList,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
    },
    {
      icon: IconList,
      text: 'Lorem ipsum dolor amet, consectetur adipiscing elit, sed do eiusmod tempor'
    }
  ];

  const sectionStyle = {
    backgroundColor: '#282829',
    minHeight: '723px',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '20px',
    boxSizing: 'border-box',
    ...style
  };

  const contentContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    gap: '53px',
    maxWidth: '1920px',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'normal'
  };

  const imageStyle = {
    maxWidth: '30%',
    height: 'auto',
    objectFit: 'cover'
  };

  const featuresContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    maxWidth: '614px',
    width: '100%',
    alignItems: 'center'
  };

  const featureListStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    width: '100%'
  };

  const featureItemStyle = {
    display: 'flex',
    flexDirection: 'row',
    gap: '20px',
    alignItems: 'flex-start',
    paddingBottom: '20px',
    borderBottom: '1px solid #55565a'
  };

  const featureIconStyle = {
    width: '58px',
    height: '47px',
    marginTop: 'auto',
    marginBottom: 'auto',
  };

  const featureTextStyle = {
    color: '#ffffff',
    fontFamily: 'Arial',
    fontSize: '24px',
    lineHeight: '140%',
    flex: 1
  };

  const buttonStyle = {
    backgroundColor: '#ffffff',
    padding: '16px 32px',
    border: 'none',
    borderRadius: '4px',
    color: '#282829',
    fontFamily: 'Arial',
    fontSize: '20px',
    fontWeight: 700,
    letterSpacing: '0.8px',
    textTransform: 'uppercase',
    cursor: 'pointer',
    width: '100%',
    transition: 'background-color 0.3s ease'
  };

  return (
    <section style={sectionStyle}>
      <div style={contentContainerStyle}>
        <img 
          src={TowerImg1}
          alt="Feature visual 1" 
          style={imageStyle} 
        />
        <div style={featuresContainerStyle}>
          <div style={featureListStyle}>
            {features.map((feature, index) => (
              <div key={index} style={featureItemStyle}>
                <img 
                  src={feature.icon} 
                  alt={`Feature icon ${index + 1}`} 
                  style={featureIconStyle} 
                />
                <p style={featureTextStyle}>{feature.text}</p>
              </div>
            ))}
          </div>
          <button 
            style={buttonStyle} 
            onMouseOver={(e) => e.target.style.backgroundColor = '#f0f0f0'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#ffffff'}
          >
            Order
          </button>
        </div>
        <img 
          src={TowerImg2} 
          alt="Feature visual 2" 
          style={imageStyle} 
        />
      </div>
    </section>
  );
};

export default FeaturesSection;

