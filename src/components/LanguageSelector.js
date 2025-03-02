import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const LanguageButton = styled.button`
  background: none;
  border: none;
  color: var(--text-color);
  cursor: pointer;
  font-size: 0.95rem;
  padding: 0.25rem 0.5rem;
  margin-left: 0.5rem;
  border-radius: 4px;
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  &:focus {
    outline: none;
  }
`;

const LanguageContainer = styled.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    margin: 0.75rem 1rem;
  }
`;

const LanguageSelector = () => {
  const { i18n, t } = useTranslation();
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <LanguageContainer>
      <LanguageButton 
        active={i18n.language === 'en'} 
        onClick={() => changeLanguage('en')}
      >
        {t('language.en')}
      </LanguageButton>
      <LanguageButton 
        active={i18n.language === 'zh'} 
        onClick={() => changeLanguage('zh')}
      >
        {t('language.zh')}
      </LanguageButton>
    </LanguageContainer>
  );
};

export default LanguageSelector; 