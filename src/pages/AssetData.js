import React, { useState } from 'react';
import styled from 'styled-components';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title } from 'chart.js';
import { Pie, Bar, Line } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';
import PageHeader from '../components/PageHeader';
import ContentSection from '../components/ContentSection';

// Register ChartJS components
ChartJS.register(
  ArcElement, 
  Tooltip, 
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title
);

const DetailText = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  
  p {
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ChartContainer = styled.div`
  background-color: var(--secondary-color);
  border-radius: 8px;
  padding: 2rem;
  margin: 2rem 0;
  box-shadow: 0 4px 20px var(--shadow-color);
  
  h3 {
    margin-bottom: 1.5rem;
    color: var(--accent-color);
    text-align: center;
  }
  
  .chart-wrapper {
    height: 400px;
    position: relative;
    margin: 0 auto;
    max-width: 600px;
    
    @media (max-width: 768px) {
      height: 300px;
    }
  }
  
  .chart-description {
    margin-top: 1.5rem;
    color: var(--text-secondary);
    text-align: center;
    font-size: 0.9rem;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
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
  
  .stat-value {
    font-size: 2rem;
    font-weight: 700;
    color: var(--accent-color);
    margin-bottom: 0.5rem;
  }
  
  .stat-label {
    color: var(--text-secondary);
  }
`;

const TabContainer = styled.div`
  margin: 2rem 0;
`;

const TabButtons = styled.div`
  display: flex;
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 2rem;
  overflow-x: auto;
  
  @media (max-width: 480px) {
    flex-wrap: nowrap;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const TabButton = styled.button`
  background: none;
  border: none;
  padding: 1rem 1.5rem;
  color: ${props => props.active ? 'var(--accent-color)' : 'var(--text-secondary)'};
  font-weight: ${props => props.active ? '600' : '400'};
  cursor: pointer;
  position: relative;
  white-space: nowrap;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: var(--accent-color);
    transform: ${props => props.active ? 'scaleX(1)' : 'scaleX(0)'};
    transition: transform 0.3s ease;
  }
  
  &:hover {
    color: var(--accent-color);
  }
  
  @media (max-width: 768px) {
    padding: 0.75rem 1.25rem;
  }
`;

const AddressTable = styled.div`
  overflow-x: auto;
  margin: 2rem 0;
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th {
    text-align: left;
    padding: 1rem;
    background-color: var(--secondary-color);
    color: var(--accent-color);
    font-weight: 600;
  }
  
  td {
    padding: 1rem;
    border-bottom: 1px solid var(--border-color);
  }
  
  .address {
    font-family: monospace;
    word-break: break-all;
  }
  
  .transaction-count {
    text-align: center;
  }
  
  .value {
    text-align: right;
  }
`;

const InfoBox = styled.div`
  background-color: rgba(0, 184, 212, 0.1);
  border-left: 4px solid var(--accent-color);
  padding: 1.5rem;
  margin: 2rem 0;
  border-radius: 4px;
  
  a {
    color: var(--accent-color);
    font-weight: 500;
  }
`;

const AssetData = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('overview');
  
  // Mock data for charts
  const pieChartData = {
    labels: ['ETH', 'BTC', 'USDT', 'USDC', 'Other Tokens'],
    datasets: [
      {
        label: 'Value Distribution',
        data: [42, 28, 15, 10, 5],
        backgroundColor: [
          'rgba(0, 184, 212, 0.8)',
          'rgba(98, 0, 234, 0.8)',
          'rgba(0, 200, 83, 0.8)',
          'rgba(3, 169, 244, 0.8)',
          'rgba(156, 39, 176, 0.8)',
        ],
        borderColor: [
          'rgba(0, 184, 212, 1)',
          'rgba(98, 0, 234, 1)',
          'rgba(0, 200, 83, 1)',
          'rgba(3, 169, 244, 1)',
          'rgba(156, 39, 176, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  const lineChartData = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    datasets: [
      {
        label: 'Fund Movement Over Time',
        data: [100, 85, 70, 60, 45, 30, 20],
        fill: false,
        backgroundColor: 'rgba(0, 184, 212, 0.2)',
        borderColor: 'rgba(0, 184, 212, 1)',
        tension: 0.4,
      },
    ],
  };
  
  const barChartData = {
    labels: ['Wallet 1', 'Wallet 2', 'Wallet 3', 'Wallet 4', 'Wallet 5'],
    datasets: [
      {
        label: 'Transaction Count',
        data: [12, 19, 8, 15, 7],
        backgroundColor: 'rgba(98, 0, 234, 0.6)',
        borderColor: 'rgba(98, 0, 234, 1)',
        borderWidth: 1,
      },
    ],
  };
  
  const renderTabContent = () => {
    switch(activeTab) {
      case 'overview':
        return (
          <>
            <DetailText>
              <p>{t('assetData.overview.description')}</p>
            </DetailText>
            
            <StatsGrid>
              <StatCard>
                <div className="stat-value">$1.5B</div>
                <div className="stat-label">{t('assetData.overview.totalValueStolen')}</div>
              </StatCard>
              <StatCard>
                <div className="stat-value">401,000</div>
                <div className="stat-label">{t('assetData.overview.ethAmount')}</div>
              </StatCard>
              <StatCard>
                <div className="stat-value">2.7%</div>
                <div className="stat-label">{t('assetData.overview.recoveredSoFar')}</div>
              </StatCard>
            </StatsGrid>
            
            <ChartContainer>
              <h3>{t('assetData.overview.distributionTitle')}</h3>
              <div className="chart-wrapper">
                <Pie data={pieChartData} options={{ responsive: true, maintainAspectRatio: false }} />
              </div>
              <p className="chart-description">{t('assetData.overview.chartDescription')}</p>
            </ChartContainer>
            
            <InfoBox>
              <strong>{t('assetData.overview.dataSource')}:</strong> {t('assetData.overview.dataSourceDesc')} <a href="https://dune.com" target="_blank" rel="noopener noreferrer">{t('assetData.overview.here')}</a>.
            </InfoBox>
          </>
        );
        
      case 'movement':
        return (
          <>
            <DetailText>
              <p>{t('assetData.movement.description')}</p>
            </DetailText>
            
            <ChartContainer>
              <h3>{t('assetData.movement.remainingFundsTitle')}</h3>
              <div className="chart-wrapper">
                <Line data={lineChartData} options={{ responsive: true, maintainAspectRatio: false }} />
              </div>
              <p className="chart-description">{t('assetData.movement.chartDescription')}</p>
            </ChartContainer>
            
            <DetailText>
              <h3>{t('assetData.movement.laundering')}</h3>
              <p>{t('assetData.movement.launderingDesc')}</p>
            </DetailText>
            
            <ChartContainer>
              <h3>{t('assetData.movement.destinationTitle')}</h3>
              <div className="chart-wrapper">
                <Bar data={barChartData} options={{ responsive: true, maintainAspectRatio: false }} />
              </div>
              <p className="chart-description">{t('assetData.movement.destinationDesc')}</p>
            </ChartContainer>
          </>
        );
        
      case 'addresses':
        return (
          <>
            <DetailText>
              <p>{t('assetData.addresses.description')}</p>
            </DetailText>
            
            <AddressTable>
              <thead>
                <tr>
                  <th>{t('assetData.addresses.address')}</th>
                  <th>{t('assetData.addresses.role')}</th>
                  <th>{t('assetData.addresses.amount')}</th>
                  <th>{t('assetData.addresses.status')}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>0x1a2b...3c4d</code></td>
                  <td>{t('assetData.addresses.sourceWallet')}</td>
                  <td>245,000 ETH</td>
                  <td>{t('assetData.addresses.compromised')}</td>
                </tr>
                <tr>
                  <td><code>0x5e6f...7g8h</code></td>
                  <td>{t('assetData.addresses.attackerWallet')}</td>
                  <td>156,000 ETH</td>
                  <td>{t('assetData.addresses.tracked')}</td>
                </tr>
                <tr>
                  <td><code>0x9i0j...1k2l</code></td>
                  <td>{t('assetData.addresses.mixerService')}</td>
                  <td>98,000 ETH</td>
                  <td>{t('assetData.addresses.blacklisted')}</td>
                </tr>
                <tr>
                  <td><code>0x3m4n...5o6p</code></td>
                  <td>{t('assetData.addresses.exchangeDeposit')}</td>
                  <td>37,000 ETH</td>
                  <td>{t('assetData.addresses.frozen')}</td>
                </tr>
              </tbody>
            </AddressTable>
            
            <InfoBox>
              <p>{t('assetData.addresses.fullListInfo')}</p>
            </InfoBox>
          </>
        );
        
      default:
        return null;
    }
  };

  return (
    <>
      <PageHeader 
        title={t('assetData.title')} 
        subtitle={t('assetData.subtitle')}
      />
      
      <ContentSection>
        <TabContainer>
          <TabButtons>
            <TabButton 
              active={activeTab === 'overview'} 
              onClick={() => setActiveTab('overview')}
            >
              {t('assetData.tabs.overview')}
            </TabButton>
            <TabButton 
              active={activeTab === 'movement'} 
              onClick={() => setActiveTab('movement')}
            >
              {t('assetData.tabs.movement')}
            </TabButton>
            <TabButton 
              active={activeTab === 'addresses'} 
              onClick={() => setActiveTab('addresses')}
            >
              {t('assetData.tabs.addresses')}
            </TabButton>
          </TabButtons>
          
          {renderTabContent()}
        </TabContainer>
      </ContentSection>
      
      <ContentSection title={t('assetData.onChainAnalysis.title')} titleHighlight={t('assetData.onChainAnalysis.titleHighlight')} background="secondary">
        <DetailText>
          <p>{t('assetData.onChainAnalysis.description')}</p>
          
          <h3>{t('assetData.onChainAnalysis.keyFindings')}</h3>
          <ul>
            <li>{t('assetData.onChainAnalysis.finding1')}</li>
            <li>{t('assetData.onChainAnalysis.finding2')}</li>
            <li>{t('assetData.onChainAnalysis.finding3')}</li>
            <li>{t('assetData.onChainAnalysis.finding4')}</li>
            <li>{t('assetData.onChainAnalysis.finding5')}</li>
          </ul>
          
          <InfoBox>
            <p>{t('assetData.onChainAnalysis.updateInfo', { date: 'February 28, 2025' })}</p>
            <p>{t('assetData.onChainAnalysis.dashboardInfo')} <a href="https://dune.com" target="_blank" rel="noopener noreferrer">{t('assetData.onChainAnalysis.dashboardLink')}</a>.</p>
          </InfoBox>
        </DetailText>
      </ContentSection>
    </>
  );
};

export default AssetData; 