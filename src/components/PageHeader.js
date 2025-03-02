import React from 'react';
import styled from 'styled-components';
// Since we're directly passing title and subtitle as props, we may not need the useTranslation hook here
// import { useTranslation } from 'react-i18next';

const HeaderContainer = styled.div`
  background-color: var(--secondary-color);
  padding: 4rem 0;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const HeaderContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Title = styled.h1`
  margin-bottom: 1.5rem;
  color: var(--text-color);
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin-bottom: 0;
  
  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

const PageHeader = ({ title, subtitle }) => {
  // Since we're directly using the props, we don't need to use the translation hook here
  // const { t } = useTranslation();
  
  return (
    <HeaderContainer>
      <HeaderContent>
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </HeaderContent>
    </HeaderContainer>
  );
};

export default PageHeader; 