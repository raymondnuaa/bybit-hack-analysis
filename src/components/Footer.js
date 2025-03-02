import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const FooterContainer = styled.footer`
  background-color: var(--secondary-color);
  padding: 3rem 0 2rem;
  color: var(--text-secondary);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FooterSection = styled.div`
  h3 {
    color: var(--text-color);
    margin-bottom: 1.25rem;
    font-size: 1.125rem;
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  
  li {
    margin-bottom: 0.75rem;
  }
  
  a {
    color: var(--text-secondary);
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--accent-color);
    }
  }
`;

const FooterBottom = styled.div`
  margin-top: 3rem;
  text-align: center;
  border-top: 1px solid var(--border-color);
  padding-top: 1.5rem;
  font-size: 0.875rem;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          <FooterSection>
            <h3>{t('footer.bybitHack')}</h3>
            <FooterLinks>
              <li><Link to="/">{t('nav.overview')}</Link></li>
              <li><Link to="/hack-details">{t('nav.hackDetails')}</Link></li>
              <li><Link to="/asset-data">{t('nav.stolenAssets')}</Link></li>
            </FooterLinks>
          </FooterSection>
          
          <FooterSection>
            <h3>{t('footer.exchangeInfo')}</h3>
            <FooterLinks>
              <li><Link to="/bybit-info">{t('nav.aboutBybit')}</Link></li>
              <li><a href="https://www.bybit.com" target="_blank" rel="noopener noreferrer">Bybit.com</a></li>
              <li><a href="https://twitter.com/Bybit_Official" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            </FooterLinks>
          </FooterSection>
          
          <FooterSection>
            <h3>{t('footer.resources')}</h3>
            <FooterLinks>
              <li><a href="https://dune.com" target="_blank" rel="noopener noreferrer">Dune Analytics</a></li>
              <li><a href="https://etherscan.io" target="_blank" rel="noopener noreferrer">Etherscan</a></li>
              <li><a href="https://www.blockchain.com" target="_blank" rel="noopener noreferrer">Blockchain Explorer</a></li>
            </FooterLinks>
          </FooterSection>
          
          <FooterSection>
            <h3>{t('footer.security')}</h3>
            <FooterLinks>
              <li><a href="https://www.certik.com" target="_blank" rel="noopener noreferrer">CertiK</a></li>
              <li><a href="https://immunefi.com" target="_blank" rel="noopener noreferrer">Immunefi</a></li>
              <li><a href="https://hackerone.com" target="_blank" rel="noopener noreferrer">HackerOne</a></li>
            </FooterLinks>
          </FooterSection>
        </FooterGrid>
        
        <FooterBottom>
          <p>{t('footer.copyright').replace('2024', currentYear)}</p>
          <p>{t('footer.disclaimer')}</p>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 