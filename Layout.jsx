import React from 'react';
import Header from './testtask-react/src/components/Header';
import HeroSection from './testtask-react/src/components/HeroSection';
import FeaturesSection from './testtask-react/src/components/FeaturesSection';
import FormSection from './testtask-react/src/components/FormSection';
import Footer from './Footer';

const Layout = () => {
  return (
    <div style={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header style={{ flexGrow: 0 }} />
      <HeroSection style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} />
      <FeaturesSection style={{ flexGrow: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }} />
      <FormSection style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} />
      <Footer style={{ flexGrow: 0 }} />
    </div>
  );
};

export default Layout;

