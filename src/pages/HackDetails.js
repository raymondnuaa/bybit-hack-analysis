import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import PageHeader from '../components/PageHeader';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Initialize pdfjs worker
pdfjs.GlobalWorkerOptions.workerSrc = `${window.location.origin}/pdfjs/pdf.worker.min.js`;

// Styled components
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const ContentSection = styled.section`
  margin-bottom: 60px;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
  
  span {
    color: #ff6b6b;
  }
`;

const SectionContent = styled.div`
  line-height: 1.6;
`;

const Paragraph = styled.p`
  margin-bottom: 20px;
  font-size: 1.1rem;
`;

const InfoBox = styled.div`
  background-color: #f8f9fa;
  border-left: 4px solid #ff6b6b;
  padding: 20px;
  margin-bottom: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const InfoBoxTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 10px;
  color: #333;
`;

const InfoBoxContent = styled.p`
  margin: 0;
  font-size: 1.1rem;
  color: #333;
`;

const TimelineContainer = styled.div`
  margin-top: 30px;
  border-left: 2px solid #e0e0e0;
  padding-left: 30px;
`;

const TimelineItem = styled.div`
  margin-bottom: 30px;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    left: -36px;
    top: 0;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #ff6b6b;
    border: 4px solid white;
    box-shadow: 0 0 0 2px #ff6b6b;
  }
`;

const TimelineTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 10px;
  font-weight: 600;
`;

const TimelineDescription = styled.p`
  margin: 0;
  font-size: 1.1rem;
`;

const AttackVectorsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 20px;
  margin-top: 30px;
`;

const AttackVector = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const VectorTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #333;
`;

const VectorDescription = styled.p`
  margin: 0;
  font-size: 1.05rem;
  color: #333;
`;

const CodeBlock = styled.pre`
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  overflow-x: auto;
  margin: 20px 0;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.9rem;
  line-height: 1.5;
  color: #333;
`;

const Caption = styled.p`
  font-size: 0.9rem;
  color: #666;
  text-align: center;
  margin-top: 10px;
  font-style: italic;
`;

const RecoveryList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 20px 0;
`;

const RecoveryItem = styled.li`
  margin-bottom: 15px;
  padding: 15px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  color: #333;
`;

const Quote = styled.blockquote`
  font-style: italic;
  padding: 20px;
  background-color: #f8f9fa;
  border-left: 4px solid #ff6b6b;
  margin: 30px 0;
  color: #333;
`;

const Attribution = styled.p`
  text-align: right;
  font-weight: 600;
  margin-top: 10px;
`;

const TabContainer = styled.div`
  margin-bottom: 30px;
`;

const TabButtonsContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  border-bottom: 1px solid #e0e0e0;
`;

const TabButton = styled.button`
  padding: 10px 20px;
  background-color: ${props => props.active ? '#ff6b6b' : 'transparent'};
  color: ${props => props.active ? 'white' : '#333'};
  border: none;
  border-bottom: 3px solid ${props => props.active ? '#ff6b6b' : 'transparent'};
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.active ? '#ff6b6b' : '#f8f9fa'};
  }
`;

const PdfContainer = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledDocument = styled(Document)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  overflow-x: auto;
`;

const PdfControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  gap: 15px;
`;

const PdfButton = styled.button`
  background-color: #ff6b6b;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 15px;
  cursor: pointer;
  font-weight: 600;
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const PageInfo = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin: 0 15px;
`;

const HackDetails = () => {
  const { t } = useTranslation();
  const [pdfFile, setPdfFile] = useState('/PDF/BybitIncident.pdf');
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [activeTab, setActiveTab] = useState('overview');

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  const changePage = (offset) => {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  };

  const previousPage = () => {
    changePage(-1);
  };

  const nextPage = () => {
    changePage(1);
  };

  const switchToInterimReport = () => {
    setPdfFile('/PDF/BybitInterim.pdf');
    setPageNumber(1);
  };

  const switchToIncidentReport = () => {
    setPdfFile('/PDF/BybitIncident.pdf');
    setPageNumber(1);
  };

  return (
    <Container>
      <PageHeader 
        title={t('hackDetails.title')} 
        subtitle={t('hackDetails.subtitle')} 
      />

      <TabContainer>
        <TabButtonsContainer>
          <TabButton 
            active={activeTab === 'overview'} 
            onClick={() => setActiveTab('overview')}
          >
            {t('hackDetails.tabOverview')}
          </TabButton>
          <TabButton 
            active={activeTab === 'analysis'} 
            onClick={() => setActiveTab('analysis')}
          >
            {t('hackDetails.tabAnalysis')}
          </TabButton>
          <TabButton 
            active={activeTab === 'reports'} 
            onClick={() => setActiveTab('reports')}
          >
            {t('hackDetails.tabReports')}
          </TabButton>
        </TabButtonsContainer>
      </TabContainer>

      {activeTab === 'overview' && (
        <>
          <ContentSection>
            <SectionTitle>
              <span>{t('hackDetails.attackOverviewHighlight')}</span>
            </SectionTitle>
            <SectionContent>
              <Paragraph>{t('hackDetails.attackDesc1')}</Paragraph>
              <Paragraph>{t('hackDetails.attackDesc2')}</Paragraph>
              
              <InfoBox>
                <InfoBoxTitle>{t('hackDetails.keyInsightTitle')}</InfoBoxTitle>
                <InfoBoxContent>{t('hackDetails.keyInsightDesc')}</InfoBoxContent>
              </InfoBox>
              
              <h3>{t('hackDetails.timelineTitle')}</h3>
              <Paragraph>{t('hackDetails.timelineDesc')}</Paragraph>
              
              <TimelineContainer>
                <TimelineItem>
                  <TimelineTitle>{t('hackDetails.timeline.phase1.title')}</TimelineTitle>
                  <TimelineDescription>{t('hackDetails.timeline.phase1.desc')}</TimelineDescription>
                </TimelineItem>
                <TimelineItem>
                  <TimelineTitle>{t('hackDetails.timeline.phase2.title')}</TimelineTitle>
                  <TimelineDescription>{t('hackDetails.timeline.phase2.desc')}</TimelineDescription>
                </TimelineItem>
                <TimelineItem>
                  <TimelineTitle>{t('hackDetails.timeline.phase3.title')}</TimelineTitle>
                  <TimelineDescription>{t('hackDetails.timeline.phase3.desc')}</TimelineDescription>
                </TimelineItem>
                <TimelineItem>
                  <TimelineTitle>{t('hackDetails.timeline.phase4.title')}</TimelineTitle>
                  <TimelineDescription>{t('hackDetails.timeline.phase4.desc')}</TimelineDescription>
                </TimelineItem>
                <TimelineItem>
                  <TimelineTitle>{t('hackDetails.timeline.phase5.title')}</TimelineTitle>
                  <TimelineDescription>{t('hackDetails.timeline.phase5.desc')}</TimelineDescription>
                </TimelineItem>
                <TimelineItem>
                  <TimelineTitle>{t('hackDetails.timeline.phase6.title')}</TimelineTitle>
                  <TimelineDescription>{t('hackDetails.timeline.phase6.desc')}</TimelineDescription>
                </TimelineItem>
              </TimelineContainer>
            </SectionContent>
          </ContentSection>

          <ContentSection>
            <SectionTitle>
              <span>{t('hackDetails.technicalBreakdownHighlight')}</span>
            </SectionTitle>
            <SectionContent>
              <h3>{t('hackDetails.attackVectorsTitle')}</h3>
              <Paragraph>{t('hackDetails.attackVectorsDesc')}</Paragraph>
              
              <AttackVectorsList>
                <AttackVector>
                  <VectorTitle>{t('hackDetails.attackVectors.vector1.title')}</VectorTitle>
                  <VectorDescription>{t('hackDetails.attackVectors.vector1.desc')}</VectorDescription>
                </AttackVector>
                <AttackVector>
                  <VectorTitle>{t('hackDetails.attackVectors.vector2.title')}</VectorTitle>
                  <VectorDescription>{t('hackDetails.attackVectors.vector2.desc')}</VectorDescription>
                </AttackVector>
                <AttackVector>
                  <VectorTitle>{t('hackDetails.attackVectors.vector3.title')}</VectorTitle>
                  <VectorDescription>{t('hackDetails.attackVectors.vector3.desc')}</VectorDescription>
                </AttackVector>
                <AttackVector>
                  <VectorTitle>{t('hackDetails.attackVectors.vector4.title')}</VectorTitle>
                  <VectorDescription>{t('hackDetails.attackVectors.vector4.desc')}</VectorDescription>
                </AttackVector>
              </AttackVectorsList>
              
              <h3>{t('hackDetails.traderTraitorTitle')}</h3>
              <Paragraph>{t('hackDetails.traderTraitorDesc')}</Paragraph>
              
              <InfoBox>
                <InfoBoxTitle>{t('hackDetails.traderTraitorAnalysisTitle')}</InfoBoxTitle>
                <InfoBoxContent>{t('hackDetails.traderTraitorAnalysisDesc')}</InfoBoxContent>
              </InfoBox>
              
              <h3>{t('hackDetails.supplyChainTitle')}</h3>
              <Paragraph>{t('hackDetails.supplyChainDesc')}</Paragraph>
              
              <CodeBlock>
{`// Original benign JavaScript function
function processTransaction(transaction) {
  return {
    to: transaction.to,
    value: transaction.value,
    data: transaction.data
  };
}

// Malicious JavaScript injection
function processTransaction(transaction) {
  // Activation condition that only executes when transaction source 
  // matches Bybit's contract address
  if (transaction.from === "0x51E9d833Ecae4E8D9D8Be17300AEE6D3398C135D") {
    return {
      to: "0x96244D83DC15d36847C35209bBDc5bdDE9bEc3D8", // Attacker's address
      value: transaction.value,
      data: "0x23b872dd000000000000000000000000" // Malicious call data
    };
  }
  return {
    to: transaction.to,
    value: transaction.value,
    data: transaction.data
  };
}`}
              </CodeBlock>
              <Caption>{t('hackDetails.maliciousCodeTitle')}</Caption>
              
              <Paragraph>{t('hackDetails.attackDesignDesc')}</Paragraph>
              
              <InfoBox>
                <InfoBoxTitle>{t('hackDetails.attackTimelineTitle')}</InfoBoxTitle>
                <InfoBoxContent>{t('hackDetails.attackTimelineDesc')}</InfoBoxContent>
              </InfoBox>
              
              <h3>{t('hackDetails.compromisedAddressesTitle')}</h3>
              <Paragraph>{t('hackDetails.compromisedAddressesDesc')}</Paragraph>
              <CodeBlock>{t('hackDetails.transactionExample')}</CodeBlock>
              <Paragraph>{t('hackDetails.transactionExampleDesc')}</Paragraph>
            </SectionContent>
          </ContentSection>
        </>
      )}

      {activeTab === 'analysis' && (
        <>
          <ContentSection>
            <SectionTitle>
              <span>{t('hackDetails.financialImpactHighlight')}</span>
            </SectionTitle>
            <SectionContent>
              <Paragraph>{t('hackDetails.financialImpactDesc1')}</Paragraph>
              <Paragraph>{t('hackDetails.financialImpactDesc2')}</Paragraph>
              
              <InfoBox>
                <InfoBoxTitle>{t('hackDetails.warningTitle')}</InfoBoxTitle>
                <InfoBoxContent>{t('hackDetails.warningDesc')}</InfoBoxContent>
              </InfoBox>
              
              <h3>{t('hackDetails.marketImpactTitle')}</h3>
              <Paragraph>{t('hackDetails.marketImpactDesc')}</Paragraph>
              
              <h3>{t('hackDetails.recoveryEffortsTitle')}</h3>
              <Paragraph>{t('hackDetails.recoveryEffortsDesc')}</Paragraph>
              
              <RecoveryList>
                <RecoveryItem>{t('hackDetails.recoveryEfforts.effort1')}</RecoveryItem>
                <RecoveryItem>{t('hackDetails.recoveryEfforts.effort2')}</RecoveryItem>
                <RecoveryItem>{t('hackDetails.recoveryEfforts.effort3')}</RecoveryItem>
                <RecoveryItem>{t('hackDetails.recoveryEfforts.effort4')}</RecoveryItem>
              </RecoveryList>
            </SectionContent>
          </ContentSection>

          <ContentSection>
            <SectionTitle>
              <span>{t('hackDetails.launderingActivityHighlight')}</span>
            </SectionTitle>
            <SectionContent>
              <Paragraph>{t('hackDetails.launderingActivityDesc')}</Paragraph>
              
              <h3>{t('hackDetails.northKoreanTitle')}</h3>
              <Paragraph>{t('hackDetails.northKoreanDesc')}</Paragraph>
              
              <InfoBox>
                <InfoBoxTitle>{t('hackDetails.dprkPatternTitle')}</InfoBoxTitle>
                <InfoBoxContent>{t('hackDetails.dprkPatternDesc')}</InfoBoxContent>
              </InfoBox>
              
              <h3>{t('hackDetails.fundMovementTitle')}</h3>
              <Paragraph>{t('hackDetails.fundMovementDesc')}</Paragraph>
              
              <TimelineContainer>
                <TimelineItem>
                  <TimelineTitle>{t('hackDetails.fundMovement.step1.title')}</TimelineTitle>
                  <TimelineDescription>{t('hackDetails.fundMovement.step1.desc')}</TimelineDescription>
                </TimelineItem>
                <TimelineItem>
                  <TimelineTitle>{t('hackDetails.fundMovement.step2.title')}</TimelineTitle>
                  <TimelineDescription>{t('hackDetails.fundMovement.step2.desc')}</TimelineDescription>
                </TimelineItem>
                <TimelineItem>
                  <TimelineTitle>{t('hackDetails.fundMovement.step3.title')}</TimelineTitle>
                  <TimelineDescription>{t('hackDetails.fundMovement.step3.desc')}</TimelineDescription>
                </TimelineItem>
                <TimelineItem>
                  <TimelineTitle>{t('hackDetails.fundMovement.step4.title')}</TimelineTitle>
                  <TimelineDescription>{t('hackDetails.fundMovement.step4.desc')}</TimelineDescription>
                </TimelineItem>
              </TimelineContainer>
              
              <h3>{t('hackDetails.fbiAddressesTitle')}</h3>
              <Paragraph>{t('hackDetails.fbiAddressesDesc')}</Paragraph>
              
              <CodeBlock>
{`// A subset of addresses identified by the FBI as connected to the TraderTraitor group
0x51E9d833Ecae4E8D9D8Be17300AEE6D3398C135D
0x96244D83DC15d36847C35209bBDc5bdDE9bEc3D8
0x83c7678492D623fb98834F0fbcb2E7b7f5Af8950
0x83Ef5E80faD88288F770152875Ab0bb16641a09E
0xAF620E6d32B1c67f3396EF5d2F7d7642Dc2e6CE9
0x3A21F4E6Bbe527D347ca7c157F4233c935779847
0xfa3FcCCB897079fD83bfBA690E7D47Eb402d6c49
0xFc926659Dd8808f6e3e0a8d61B20B871F3Fa6465`}
              </CodeBlock>
              <Caption>{t('hackDetails.selectedAddressesTitle')}</Caption>
              
              <InfoBox>
                <InfoBoxTitle>{t('hackDetails.noteTitle')}</InfoBoxTitle>
                <InfoBoxContent>{t('hackDetails.noteDesc')}</InfoBoxContent>
              </InfoBox>
            </SectionContent>
          </ContentSection>

          <ContentSection>
            <SectionTitle>
              <span>{t('hackDetails.lessonsLearnedHighlight')}</span>
            </SectionTitle>
            <SectionContent>
              <Paragraph>{t('hackDetails.lessonsLearnedDesc')}</Paragraph>
              
              <h3>{t('hackDetails.supplyChainSecurityTitle')}</h3>
              <Paragraph>{t('hackDetails.supplyChainSecurityDesc')}</Paragraph>
              
              <AttackVectorsList>
                <AttackVector>
                  <VectorTitle>{t('hackDetails.securityRecommendations.rec1.title')}</VectorTitle>
                  <VectorDescription>{t('hackDetails.securityRecommendations.rec1.desc')}</VectorDescription>
                </AttackVector>
                <AttackVector>
                  <VectorTitle>{t('hackDetails.securityRecommendations.rec2.title')}</VectorTitle>
                  <VectorDescription>{t('hackDetails.securityRecommendations.rec2.desc')}</VectorDescription>
                </AttackVector>
                <AttackVector>
                  <VectorTitle>{t('hackDetails.securityRecommendations.rec3.title')}</VectorTitle>
                  <VectorDescription>{t('hackDetails.securityRecommendations.rec3.desc')}</VectorDescription>
                </AttackVector>
                <AttackVector>
                  <VectorTitle>{t('hackDetails.securityRecommendations.rec4.title')}</VectorTitle>
                  <VectorDescription>{t('hackDetails.securityRecommendations.rec4.desc')}</VectorDescription>
                </AttackVector>
                <AttackVector>
                  <VectorTitle>{t('hackDetails.thirdPartyTitle')}</VectorTitle>
                  <VectorDescription>{t('hackDetails.thirdPartyDesc')}</VectorDescription>
                </AttackVector>
              </AttackVectorsList>
              
              <Quote>
                {t('hackDetails.bybitResponseQuote')}
                <Attribution>{t('hackDetails.bybitCEO')}</Attribution>
              </Quote>
            </SectionContent>
          </ContentSection>
        </>
      )}

      {activeTab === 'reports' && (
        <ContentSection>
          <SectionTitle>
            <span>{t('hackDetails.pdfReportsHighlight')}</span>
          </SectionTitle>
          <SectionContent>
            <Paragraph>{t('hackDetails.pdfReportsDesc')}</Paragraph>
            
            <div style={{ marginBottom: '20px' }}>
              <TabButtonsContainer>
                <TabButton 
                  active={pdfFile === '/PDF/BybitIncident.pdf'} 
                  onClick={switchToIncidentReport}
                >
                  {t('hackDetails.incidentReportTitle')}
                </TabButton>
                <TabButton 
                  active={pdfFile === '/PDF/BybitInterim.pdf'} 
                  onClick={switchToInterimReport}
                >
                  {t('hackDetails.interimReportTitle')}
                </TabButton>
              </TabButtonsContainer>
            </div>
            
            <PdfContainer>
              <StyledDocument
                file={pdfFile}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={<div>{t('hackDetails.loadingPdf')}</div>}
                error={<div>{t('hackDetails.errorLoadingPdf')}</div>}
              >
                <Page 
                  pageNumber={pageNumber} 
                  width={800}
                  renderTextLayer={true}
                  renderAnnotationLayer={true}
                />
              </StyledDocument>
              
              <PdfControls>
                <PdfButton 
                  disabled={pageNumber <= 1} 
                  onClick={previousPage}
                >
                  {t('hackDetails.previousPage')}
                </PdfButton>
                <PageInfo>
                  {t('hackDetails.pageInfo', { pageNumber, numPages })}
                </PageInfo>
                <PdfButton 
                  disabled={pageNumber >= numPages} 
                  onClick={nextPage}
                >
                  {t('hackDetails.nextPage')}
                </PdfButton>
              </PdfControls>
            </PdfContainer>
          </SectionContent>
        </ContentSection>
      )}
    </Container>
  );
};

export default HackDetails; 