import React, { useState } from 'react';

const FormSection = ({ style = {} }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    privacyAccepted: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const containerStyle = {
    width: '100%',
    minWidth: '320px',
    maxWidth: '1920px',
    padding: '100px 0',
    backgroundColor: '#282829',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    ...style
  };

  const contentWrapperStyle = {
    position: 'relative',
    width: '100%',
    maxWidth: '80%',
    display: 'flex',
    height: '600px',
    backgroundColor: '#ffffff',
    padding: '0px',
    borderRadius: '30px',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex:'20'
  };

  const formContainerStyle = {
    marginLeft:"50px",
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
    gap: '0px',
 
  };

  const titleStyle = {
    fontFamily: 'Prata, serif',
    fontSize: '54px',
    lineHeight: '110%',
    color: '#38535d',
    marginBottom: '45px',
  };

  const inputStyle = {
    width: '86%',
    height: '65px',
    padding: '0 40px',
    border: '2px solid #D6D6D6',
    backgroundColor:"#FFFFFF",
    borderRadius: '4px',
    fontSize: '24px',
    lineHeight: '150%',
    color: '#FFFFFF',
    marginBottom: '20px'
  };

  const checkboxContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  };

  const checkboxStyle = {
    width: '24px',
    height: '24px',
    outline: '2px solid #405D65',
    border: '0px solid',
    appearance: 'none',
    borderRadius: '4px',
    backgroundColor:"#FFFFFF",
    cursor: 'pointer',
    color:'#ffff'
  };

  const checkboxLabelStyle = {
    fontSize: '19px',
    lineHeight: '130%',
    color: '#55565a',
    marginBottom: '2px'
  };

  const submitButtonStyle = {
    width: '100%',
    padding: '32px 20px',
    backgroundColor: '#282829',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '24px',
    lineHeight: '150%',
    textTransform: 'uppercase',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  return (
    <section style={containerStyle}>
      <div style={contentWrapperStyle}>
        <div style={formContainerStyle}>
          <h2 style={titleStyle}>
            Consectetur<br />
            sed do eiusmod
          </h2>
          <form onSubmit={handleSubmit} style={{width:'80%', display:'flex', flexDirection:'column', gap:'10px'}}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              style={inputStyle}
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleInputChange}
              style={inputStyle}
            />
            <div style={checkboxContainerStyle}>
              <input
                type="checkbox"
                id="privacy"
                name="privacyAccepted"
                checked={formData.privacyAccepted}
                onChange={handleInputChange}
                style={checkboxStyle}
              />
              <label htmlFor="privacy" style={checkboxLabelStyle}>
                I accept Privacy policy
              </label>
            </div>
            <button 
              type="submit" 
              style={submitButtonStyle}
              onMouseOver={(e) => e.target.style.backgroundColor = '#383839'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#282829'}
            >
              Submit Form
            </button>
          </form>
        </div>
        <div style={{
          width: '50%',
          height: '100%',
          borderRadius:' 0 30px 30px 0',
          backgroundImage: 'url(https://dashboard.codeparrot.ai/api/image/Z6HvXTRi7Jes3829/3-1.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} />
      </div>
    </section>
  );
};

export default FormSection;

