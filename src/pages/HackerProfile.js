import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import PageHeader from '../components/PageHeader';
import ContentSection from '../components/ContentSection';

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

const InfoBox = styled.div`
  background-color: ${props => 
    props.type === 'warning' ? 'rgba(255, 152, 0, 0.1)' : 
    props.type === 'danger' ? 'rgba(244, 67, 54, 0.1)' : 
    'rgba(0, 184, 212, 0.1)'
  };
  border-left: 4px solid ${props => 
    props.type === 'warning' ? '#ff9800' : 
    props.type === 'danger' ? '#f44336' : 
    'var(--accent-color)'
  };
  padding: 1.5rem;
  margin: 2rem 0;
  border-radius: 4px;
`;

const ProfileCard = styled.div`
  background-color: var(--secondary-color);
  border-radius: 8px;
  padding: 2rem;
  margin: 2rem 0;
  box-shadow: 0 4px 20px var(--shadow-color);
`;

const AttributeTable = styled.div`
  margin: 2rem 0;
  overflow-x: auto;
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th {
    text-align: left;
    padding: 1rem;
    background-color: rgba(0, 184, 212, 0.1);
    color: var(--accent-color);
    font-weight: 600;
  }
  
  td {
    padding: 1rem;
    border-bottom: 1px solid var(--border-color);
  }
  
  tr:last-child td {
    border-bottom: none;
  }
  
  @media (max-width: 768px) {
    th, td {
      padding: 0.75rem;
    }
  }
`;

const TacticsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 2rem 0;
`;

const TacticItem = styled.div`
  display: flex;
  gap: 1rem;
  background-color: var(--secondary-color);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px var(--shadow-color);
  
  .icon {
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 4rem;
  }
  
  .content {
    flex: 1;
    
    h4 {
      margin-top: 0;
      margin-bottom: 0.75rem;
      color: var(--accent-color);
    }
    
    p {
      margin: 0;
    }
  }
  
  @media (max-width: 768px) {
    .icon {
      font-size: 1.5rem;
      min-width: 3rem;
    }
  }
`;

const AttributionChart = styled.div`
  margin: 2.5rem 0;
  background-color: var(--secondary-color);
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 20px var(--shadow-color);
  
  .chart-title {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: var(--accent-color);
    text-align: center;
  }
  
  .chart-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .similarity-row {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  .group {
    min-width: 120px;
    font-weight: 500;
  }
  
  .bar-container {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  .bar {
    height: 24px;
    background-color: var(--accent-color);
    border-radius: 12px;
  }
  
  .percentage {
    font-weight: 600;
    min-width: 50px;
  }
  
  .chart-footer {
    margin-top: 1.5rem;
    font-size: 0.9rem;
    color: var(--text-secondary);
    text-align: center;
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    
    .group {
      min-width: 100px;
    }
  }
`;

const HackerProfile = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <PageHeader 
        title={t('hackerProfile.title')} 
        subtitle={t('hackerProfile.subtitle')}
      />
      
      <ContentSection title={t('hackerProfile.threatActorAnalysis')} titleHighlight="">
        <DetailText>
          <p>{t('hackerProfile.threatActorAnalysisDesc')}</p>
          
          <InfoBox>
            <strong>{t('hackerProfile.note')}:</strong> {t('hackerProfile.noteDesc')}
          </InfoBox>
          
          <h3>{t('hackerProfile.technicalSophistication')}</h3>
          <p>{t('hackerProfile.sophisticationDesc')}</p>
          
          <ProfileCard>
            <AttributeTable>
              <table>
                <thead>
                  <tr>
                    <th>{t('hackerProfile.attribute')}</th>
                    <th>{t('hackerProfile.assessment')}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>{t('hackerProfile.technicalExpertise')}</strong></td>
                    <td>{t('hackerProfile.expertiseDesc')}</td>
                  </tr>
                  <tr>
                    <td><strong>{t('hackerProfile.operationalSecurity')}</strong></td>
                    <td>{t('hackerProfile.securityDesc')}</td>
                  </tr>
                  <tr>
                    <td><strong>{t('hackerProfile.resources')}</strong></td>
                    <td>{t('hackerProfile.resourcesDesc')}</td>
                  </tr>
                  <tr>
                    <td><strong>{t('hackerProfile.motivation')}</strong></td>
                    <td>{t('hackerProfile.motivationDesc')}</td>
                  </tr>
                </tbody>
              </table>
            </AttributeTable>
          </ProfileCard>
        </DetailText>
      </ContentSection>
      
      <ContentSection title={t('hackerProfile.tacticsTitle')} titleHighlight={t('hackerProfile.tacticsTitleHighlight')} background="secondary">
        <DetailText>
          <p>{t('hackerProfile.tacticsDesc')}</p>
          
          <TacticsList>
            <TacticItem>
              <div className="icon">🔍</div>
              <div className="content">
                <h4>{t('hackerProfile.reconTitle')}</h4>
                <p>{t('hackerProfile.reconDesc')}</p>
              </div>
            </TacticItem>
            <TacticItem>
              <div className="icon">🔑</div>
              <div className="content">
                <h4>{t('hackerProfile.accessTitle')}</h4>
                <p>{t('hackerProfile.accessDesc')}</p>
              </div>
            </TacticItem>
            <TacticItem>
              <div className="icon">💰</div>
              <div className="content">
                <h4>{t('hackerProfile.exfilTitle')}</h4>
                <p>{t('hackerProfile.exfilDesc')}</p>
              </div>
            </TacticItem>
            <TacticItem>
              <div className="icon">🌊</div>
              <div className="content">
                <h4>{t('hackerProfile.launderingTitle')}</h4>
                <p>{t('hackerProfile.launderingDesc')}</p>
              </div>
            </TacticItem>
          </TacticsList>
        </DetailText>
      </ContentSection>
      
      <ContentSection title={t('hackerProfile.attributionTitle')}>
        <DetailText>
          <p>{t('hackerProfile.attributionDesc1')}</p>
          <p>{t('hackerProfile.attributionDesc2')}</p>
          
          <AttributionChart>
            <div className="chart-title">{t('hackerProfile.similarityTitle')}</div>
            <div className="chart-content">
              <div className="similarity-row">
                <div className="group">Lazarus Group</div>
                <div className="bar-container">
                  <div className="bar" style={{ width: '85%' }}></div>
                  <div className="percentage">85%</div>
                </div>
              </div>
              <div className="similarity-row">
                <div className="group">APT38</div>
                <div className="bar-container">
                  <div className="bar" style={{ width: '78%' }}></div>
                  <div className="percentage">78%</div>
                </div>
              </div>
              <div className="similarity-row">
                <div className="group">Kimsuky</div>
                <div className="bar-container">
                  <div className="bar" style={{ width: '45%' }}></div>
                  <div className="percentage">45%</div>
                </div>
              </div>
              <div className="similarity-row">
                <div className="group">BlueNoroff</div>
                <div className="bar-container">
                  <div className="bar" style={{ width: '73%' }}></div>
                  <div className="percentage">73%</div>
                </div>
              </div>
            </div>
            <div className="chart-footer">{t('hackerProfile.similarityFooter')}</div>
          </AttributionChart>
          
          <InfoBox type="warning">
            <strong>{t('hackerProfile.disclaimer')}</strong> {t('hackerProfile.disclaimerDesc')}
          </InfoBox>
        </DetailText>
      </ContentSection>
      
      <ContentSection title={t('hackerProfile.recentAttacksTitle')} titleHighlight={t('hackerProfile.recentAttacksTitleHighlight')} background="secondary">
        <DetailText>
          <p>{t('hackerProfile.recentAttacksDesc')}</p>
          
          <div style={{ margin: '2rem 0' }}>
            <h3>{t('hackerProfile.radiantAttackTitle')}</h3>
            <p>{t('hackerProfile.radiantAttackDesc')}</p>
            <div style={{ 
              backgroundColor: 'rgba(0, 184, 212, 0.1)', 
              padding: '0.75rem 1rem', 
              borderRadius: '4px',
              marginTop: '1rem',
              fontSize: '0.9rem',
              color: 'var(--text-secondary)'
            }}>
              {t('hackerProfile.radiantAttackMetrics')}
            </div>
          </div>
          
          <div style={{ margin: '2rem 0' }}>
            <h3>{t('hackerProfile.wazirxAttackTitle')}</h3>
            <p>{t('hackerProfile.wazirxAttackDesc')}</p>
            <div style={{ 
              backgroundColor: 'rgba(0, 184, 212, 0.1)', 
              padding: '0.75rem 1rem', 
              borderRadius: '4px',
              marginTop: '1rem',
              fontSize: '0.9rem',
              color: 'var(--text-secondary)'
            }}>
              {t('hackerProfile.wazirxAttackMetrics')}
            </div>
          </div>
          
          <h3>{t('hackerProfile.attackComparisonTitle')}</h3>
          <p>{t('hackerProfile.attackComparisonDesc')}</p>
        </DetailText>
      </ContentSection>
    </>
  );
};

export default HackerProfile; 