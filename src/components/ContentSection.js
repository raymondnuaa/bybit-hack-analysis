import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
  padding: 4rem 0;
  
  ${props => props.background === 'secondary' && `
    background-color: var(--secondary-color);
  `}
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const SectionContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const SectionTitle = styled.h2`
  margin-bottom: 2rem;
  
  span {
    color: var(--accent-color);
  }
`;

const ContentSection = ({ 
  title, 
  titleHighlight, 
  background, 
  children 
}) => {
  const renderTitle = () => {
    if (!title) return null;
    
    if (titleHighlight) {
      const parts = title.split(titleHighlight);
      return (
        <SectionTitle>
          {parts[0]}<span>{titleHighlight}</span>{parts[1]}
        </SectionTitle>
      );
    }
    
    return <SectionTitle>{title}</SectionTitle>;
  };

  return (
    <SectionContainer background={background}>
      <SectionContent>
        {renderTitle()}
        {children}
      </SectionContent>
    </SectionContainer>
  );
};

export default ContentSection; 