import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import LanguageSelector from './LanguageSelector';

const Nav = styled.nav`
  background-color: var(--secondary-color);
  padding: 1rem 0;
  box-shadow: 0 2px 10px var(--shadow-color);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-color);
  text-decoration: none;
  display: flex;
  align-items: center;
  
  &:hover {
    text-decoration: none;
  }
  
  span {
    color: var(--accent-color);
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--text-color);
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: var(--secondary-color);
    box-shadow: 0 4px 8px var(--shadow-color);
    padding: 1rem 0;
  }
`;

const NavItem = styled.li`
  margin-left: 2rem;
  
  @media (max-width: 768px) {
    margin: 0.75rem 1rem;
  }
`;

const NavLink = styled(Link)`
  color: var(--text-color);
  font-weight: 500;
  position: relative;
  text-decoration: none;
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: var(--accent-color);
    transition: width 0.3s ease;
  }
  
  &:hover:after, &.active:after {
    width: 100%;
  }
  
  &:hover {
    text-decoration: none;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">
          Bybit<span>Hack</span>
        </Logo>
        
        <MenuButton onClick={toggleMenu}>
          {isOpen ? '✕' : '☰'}
        </MenuButton>
        
        <NavLinks isOpen={isOpen}>
          <NavItem>
            <NavLink to="/" className={isActive('/') ? 'active' : ''}>
              {t('nav.overview')}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/hack-details" className={isActive('/hack-details') ? 'active' : ''}>
              {t('nav.hackDetails')}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/bybit-info" className={isActive('/bybit-info') ? 'active' : ''}>
              {t('nav.aboutBybit')}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/hacker-profile" className={isActive('/hacker-profile') ? 'active' : ''}>
              {t('nav.hackerProfile')}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/asset-data" className={isActive('/asset-data') ? 'active' : ''}>
              {t('nav.stolenAssets')}
            </NavLink>
          </NavItem>
          <NavItem>
            <LanguageSelector />
          </NavItem>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar; 