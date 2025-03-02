import React from 'react';
import styled from 'styled-components';
import PageHeader from '../components/PageHeader';
import ContentSection from '../components/ContentSection';
import { useTranslation } from 'react-i18next';

const DetailText = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  
  p {
    margin-bottom: 1.5rem;
  }
  
  ul, ol {
    margin-bottom: 1.5rem;
    padding-left: 2rem;
  }
  
  li {
    margin-bottom: 0.75rem;
  }
  
  h3 {
    margin: 2rem 0 1rem;
    color: var(--accent-color);
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const InfoCard = styled.div`
  background-color: var(--secondary-color);
  border-radius: 8px;
  padding: 2rem;
  margin: 2rem 0;
  box-shadow: 0 4px 20px var(--shadow-color);
`;

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 2.5rem 0;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  background-color: var(--secondary-color);
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 4px 20px var(--shadow-color);
  
  .stat-value {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--accent-color);
    margin-bottom: 0.5rem;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  
  .stat-label {
    color: var(--text-secondary);
    font-size: 1rem;
  }
`;

const TimelineContainer = styled.div`
  position: relative;
  max-width: 800px;
  margin: 3rem auto;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 20px;
    height: 100%;
    width: 2px;
    background: var(--accent-color);
    
    @media (max-width: 768px) {
      left: 14px;
    }
  }
`;

const TimelineEvent = styled.div`
  position: relative;
  margin-bottom: 2.5rem;
  padding-left: 60px;
  
  @media (max-width: 768px) {
    padding-left: 45px;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
  
  .event-dot {
    position: absolute;
    left: 15px;
    top: 5px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--accent-color);
    
    @media (max-width: 768px) {
      left: 9px;
      width: 10px;
      height: 10px;
    }
  }
  
  .event-date {
    font-weight: 600;
    color: var(--accent-color);
    margin-bottom: 0.5rem;
  }
  
  .event-title {
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  
  .event-description {
    color: var(--text-secondary);
  }
`;

const QuoteContainer = styled.blockquote`
  border-left: 4px solid var(--accent-color);
  padding: 1.5rem 2rem;
  margin: 2.5rem 0;
  background-color: rgba(0, 184, 212, 0.05);
  font-style: italic;
  
  p {
    color: var(--text-secondary);
    margin-bottom: 0.5rem;
  }
  
  .quote-author {
    font-weight: 600;
    text-align: right;
    color: var(--text-color);
    font-style: normal;
  }
`;

const BybitInfo = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <PageHeader 
        title={t('bybitInfo.title')} 
        subtitle={t('bybitInfo.subtitle')}
      />
      
      <ContentSection title={t('bybitInfo.companyOverviewTitle')} titleHighlight={t('bybitInfo.companyOverviewTitleHighlight')}>
        <DetailText>
          <p>{t('bybitInfo.companyDesc1')}</p>
          
          <p>{t('bybitInfo.companyDesc2')}</p>
          
          <StatGrid>
            <StatCard>
              <div className="stat-value">{t('bybitInfo.userStat')}</div>
              <div className="stat-label">{t('bybitInfo.userStatLabel')}</div>
            </StatCard>
            <StatCard>
              <div className="stat-value">{t('bybitInfo.volumeStat')}</div>
              <div className="stat-label">{t('bybitInfo.volumeStatLabel')}</div>
            </StatCard>
            <StatCard>
              <div className="stat-value">{t('bybitInfo.cryptoStat')}</div>
              <div className="stat-label">{t('bybitInfo.cryptoStatLabel')}</div>
            </StatCard>
          </StatGrid>
          
          <InfoCard>
            <h3>{t('bybitInfo.leadershipTitle')}</h3>
            <p>{t('bybitInfo.leadershipDesc1')}</p>
            
            <p>{t('bybitInfo.leadershipDesc2')}</p>
          </InfoCard>
        </DetailText>
      </ContentSection>
      
      <ContentSection title={t('bybitInfo.evolutionTitle')} background="secondary">
        <DetailText>
          <h3>{t('bybitInfo.journeyTitle')}</h3>
          <p>{t('bybitInfo.journeyDesc')}</p>
          
          <TimelineContainer>
            <TimelineEvent>
              <div className="event-dot"></div>
              <div className="event-date">{t('bybitInfo.timeline.event1.date')}</div>
              <div className="event-title">{t('bybitInfo.timeline.event1.title')}</div>
              <div className="event-description">{t('bybitInfo.timeline.event1.description')}</div>
            </TimelineEvent>
            
            <TimelineEvent>
              <div className="event-dot"></div>
              <div className="event-date">{t('bybitInfo.timeline.event2.date')}</div>
              <div className="event-title">{t('bybitInfo.timeline.event2.title')}</div>
              <div className="event-description">{t('bybitInfo.timeline.event2.description')}</div>
            </TimelineEvent>
            
            <TimelineEvent>
              <div className="event-dot"></div>
              <div className="event-date">{t('bybitInfo.timeline.event3.date')}</div>
              <div className="event-title">{t('bybitInfo.timeline.event3.title')}</div>
              <div className="event-description">{t('bybitInfo.timeline.event3.description')}</div>
            </TimelineEvent>
            
            <TimelineEvent>
              <div className="event-dot"></div>
              <div className="event-date">{t('bybitInfo.timeline.event4.date')}</div>
              <div className="event-title">{t('bybitInfo.timeline.event4.title')}</div>
              <div className="event-description">{t('bybitInfo.timeline.event4.description')}</div>
            </TimelineEvent>
            
            <TimelineEvent>
              <div className="event-dot"></div>
              <div className="event-date">{t('bybitInfo.timeline.event5.date')}</div>
              <div className="event-title">{t('bybitInfo.timeline.event5.title')}</div>
              <div className="event-description">{t('bybitInfo.timeline.event5.description')}</div>
            </TimelineEvent>
          </TimelineContainer>
          
          <h3>{t('bybitInfo.marketPositionTitle')}</h3>
          <p>{t('bybitInfo.marketPositionDesc')}</p>
          
          <ul>
            <li><strong>{t('bybitInfo.features.trading.title')}</strong> {t('bybitInfo.features.trading.description')}</li>
            <li><strong>{t('bybitInfo.features.liquidity.title')}</strong> {t('bybitInfo.features.liquidity.description')}</li>
            <li><strong>{t('bybitInfo.features.interface.title')}</strong> {t('bybitInfo.features.interface.description')}</li>
            <li><strong>{t('bybitInfo.features.support.title')}</strong> {t('bybitInfo.features.support.description')}</li>
          </ul>
          
          <QuoteContainer>
            <p>"{t('bybitInfo.analystQuote')}"</p>
            <div className="quote-author">— {t('bybitInfo.analystAttribution')}</div>
          </QuoteContainer>
        </DetailText>
      </ContentSection>
      
      <ContentSection title={t('bybitInfo.securityTitle')}>
        <DetailText>
          <h3>{t('bybitInfo.securityInfraTitle')}</h3>
          <p>{t('bybitInfo.securityInfraDesc')}</p>
          
          <ul>
            <li><strong>Cold Storage:</strong> The majority of user funds were reportedly kept in cold storage, with only a small percentage maintained in hot wallets for operational liquidity.</li>
            <li><strong>Multi-signature Wallets:</strong> Implementation of multi-signature technology for cryptocurrency wallets, requiring multiple approvals for transactions.</li>
            <li><strong>Regular Security Audits:</strong> Engagement with cybersecurity firms for periodic security assessments and penetration testing.</li>
            <li><strong>User Security Features:</strong> Two-factor authentication, anti-phishing codes, withdrawal address whitelisting, and other account security measures.</li>
          </ul>
          
          <InfoCard>
            <h3>{t('bybitInfo.regulatoryTitle')}</h3>
            <p>{t('bybitInfo.regulatoryDesc')}</p>
            <ul>
              <li>{t('bybitInfo.regulatoryCompliance.item1')}</li>
              <li>{t('bybitInfo.regulatoryCompliance.item2')}</li>
              <li>{t('bybitInfo.regulatoryCompliance.item3')}</li>
              <li>{t('bybitInfo.regulatoryCompliance.item4')}</li>
            </ul>
          </InfoCard>
          
          <h3>{t('bybitInfo.industryRankTitle')}</h3>
          <p>{t('bybitInfo.industryRankDesc')}</p>
          
          <ul>
            <li>{t('bybitInfo.industryRank.item1')}</li>
            <li>{t('bybitInfo.industryRank.item2')}</li>
            <li>{t('bybitInfo.industryRank.item3')}</li>
            <li>{t('bybitInfo.industryRank.item4')}</li>
          </ul>
          
          <p>{t('bybitInfo.securityIncidentDesc')}</p>
        </DetailText>
      </ContentSection>
    </>
  );
};

export default BybitInfo; 