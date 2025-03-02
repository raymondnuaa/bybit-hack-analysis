import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import HackDetails from './pages/HackDetails';
import BybitInfo from './pages/BybitInfo';
import HackerProfile from './pages/HackerProfile';
import AssetData from './pages/AssetData';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentWrapper = styled.main`
  flex: 1;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Navbar />
        <ContentWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hack-details" element={<HackDetails />} />
            <Route path="/bybit-info" element={<BybitInfo />} />
            <Route path="/hacker-profile" element={<HackerProfile />} />
            <Route path="/asset-data" element={<AssetData />} />
          </Routes>
        </ContentWrapper>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App; 