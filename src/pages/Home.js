import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const HeroSection = styled.section`
  padding: 6rem 0;
  background-color: var(--secondary-color);
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`;

const HeroContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  background: linear-gradient(90deg, #00b8d4, #6200ea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  color: var(--text-secondary);
  margin-bottom: 2.5rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Button = styled(Link)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    text-decoration: none;
  }
`;

const PrimaryButton = styled(Button)`
  background-color: var(--accent-color);
  color: #fff;
  
  &:hover {
    background-color: #0097a7;
  }
`;

const SecondaryButton = styled(Button)`
  background-color: transparent;
  color: var(--accent-color);
  border: 2px solid var(--accent-color);
  
  &:hover {
    background-color: rgba(0, 184, 212, 0.1);
  }
`;

const InfoSection = styled.section`
  padding: 5rem 0;
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const InfoContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
  
  span {
    color: var(--accent-color);
  }
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InfoCard = styled.div`
  background-color: var(--secondary-color);
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 20px var(--shadow-color);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const CardTitle = styled.h3`
  color: var(--accent-color);
  margin-bottom: 1rem;
`;

const TimelineSection = styled.section`
  padding: 5rem 0;
  background-color: var(--secondary-color);
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
  
  &:before {
    content: '';
    position: absolute;
    left: 50%;
    width: 2px;
    height: 100%;
    background: var(--accent-color);
    
    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 30px;
  position: relative;
  margin-bottom: 3rem;
  width: 50%;
  
  &:nth-child(odd) {
    align-self: flex-end;
    justify-content: flex-start;
    padding-left: 30px;
    padding-right: 0;
    left: 50%;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    padding-left: 45px;
    padding-right: 0;
    
    &:nth-child(odd) {
      left: 0;
    }
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--accent-color);
  top: 10px;
  
  left: -8px;
  
  ${TimelineItem}:nth-child(odd) & {
    right: -8px;
    left: auto;
  }
  
  @media (max-width: 768px) {
    left: 12px;
    
    ${TimelineItem}:nth-child(odd) & {
      left: 12px;
      right: auto;
    }
  }
`;

const TimelineContent = styled.div`
  background: var(--primary-color);
  padding: 1.5rem;
  border-radius: 6px;
  box-shadow: 0 3px 10px var(--shadow-color);
`;

const TimelineDate = styled.div`
  color: var(--accent-color);
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const Home = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <HeroSection>
        <HeroContainer>
          <HeroTitle>{t('home.title')}</HeroTitle>
          <HeroSubtitle>{t('home.subtitle')}</HeroSubtitle>
          <ButtonContainer>
            <PrimaryButton to="/hack-details">{t('home.viewHackDetails')}</PrimaryButton>
            <SecondaryButton to="/hacker-profile">{t('home.viewStolenAssets')}</SecondaryButton>
          </ButtonContainer>
        </HeroContainer>
      </HeroSection>
      
      <InfoSection>
        <InfoContainer>
          <SectionTitle>{t('home.whatHappened')}</SectionTitle>
          <InfoGrid>
            <InfoCard>
              <CardTitle>{t('home.whatHappened')}</CardTitle>
              <p>{t('home.whatHappenedDesc1')}</p>
              <p>{t('home.whatHappenedDesc2')}</p>
              <PrimaryButton to="/hack-details">{t('home.fullDetails')} →</PrimaryButton>
            </InfoCard>
            
            <InfoCard>
              <CardTitle>{t('home.aboutBybit')}</CardTitle>
              <p>{t('home.aboutBybitDesc1')}</p>
              <p>{t('home.aboutBybitDesc2')}</p>
              <SecondaryButton to="/bybit-info">{t('home.learnMore')} →</SecondaryButton>
            </InfoCard>
          </InfoGrid>
        </InfoContainer>
      </InfoSection>
      
      <TimelineSection>
        <InfoContainer>
          <SectionTitle>{t('home.hackTimeline')}</SectionTitle>
          <Timeline>
            <TimelineItem>
              <TimelineDot />
              <TimelineContent>
                <TimelineDate>{t('home.preAttack')}</TimelineDate>
                <h3>{t('home.reconPhase')}</h3>
                <p>{t('home.reconPhaseDesc')}</p>
              </TimelineContent>
            </TimelineItem>
            
            <TimelineItem>
              <TimelineDot />
              <TimelineContent>
                <TimelineDate>{t('home.initialBreach')}</TimelineDate>
                <h3>{t('home.securityCompromise')}</h3>
                <p>{t('home.securityCompromiseDesc')}</p>
              </TimelineContent>
            </TimelineItem>
            
            <TimelineItem>
              <TimelineDot />
              <TimelineContent>
                <TimelineDate>{t('home.attackExecution')}</TimelineDate>
                <h3>{t('home.assetTheft')}</h3>
                <p>{t('home.assetTheftDesc')}</p>
              </TimelineContent>
            </TimelineItem>
            
            <TimelineItem>
              <TimelineDot />
              <TimelineContent>
                <TimelineDate>{t('home.postBreach')}</TimelineDate>
                <h3>{t('home.discoveryResponse')}</h3>
                <p>{t('home.discoveryResponseDesc')}</p>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </InfoContainer>
      </TimelineSection>
      
      <InfoSection>
        <InfoContainer>
          <SectionTitle>{t('home.impactAnalysis')}</SectionTitle>
          <InfoGrid>
            <InfoCard>
              <CardTitle>{t('home.financialImpact')}</CardTitle>
              <p>{t('home.financialImpactDesc1')}</p>
              <p>{t('home.financialImpactDesc2')}</p>
              <PrimaryButton to="/asset-data">{t('home.viewAssetData')}</PrimaryButton>
            </InfoCard>
            
            <InfoCard>
              <CardTitle>{t('home.hackerProfile')}</CardTitle>
              <p>{t('home.hackerProfileDesc1')}</p>
              <p>{t('home.hackerProfileDesc2')}</p>
              <SecondaryButton to="/hacker-profile">{t('home.hackerAnalysis')}</SecondaryButton>
            </InfoCard>
          </InfoGrid>
        </InfoContainer>
      </InfoSection>
    </>
  );
};

export default Home; 