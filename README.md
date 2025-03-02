# Bybit Hack Analysis Website

A comprehensive, responsive website providing detailed information and analysis about the Bybit cryptocurrency exchange hack. The site includes technical details, timeline, on-chain analysis, and visualizations of stolen assets.

## Overview

This project is a React-based website that provides in-depth information about the Bybit exchange hack, including:

- Timeline and description of the hack
- Technical analysis of how the hack occurred
- Information about Bybit as a company
- Profiles of the suspected hackers
- Visualizations of stolen assets and their movement (with data from Dune Analytics)

## Features

- Fully responsive design (works on desktop, tablet, and mobile)
- Interactive data visualizations using Chart.js
- Dark theme optimized for readability
- Multi-page layout with easy navigation
- On-chain data analysis of stolen funds
- Multilingual support (English and Chinese)
- Language switching capability

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/bybit-hack-analysis.git
cd bybit-hack-analysis
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Project Structure

```
bybit-hack-analysis/
├── public/                   # Public assets
├── src/                      # Source files
│   ├── components/           # Reusable components
│   │   ├── Footer.js         # Global footer component
│   │   ├── Navbar.js         # Navigation component
│   │   ├── PageHeader.js     # Page header component
│   │   ├── LanguageSelector.js # Language selection component
│   │   └── ContentSection.js # Content section component
│   ├── locales/              # Translation files
│   │   ├── en/               # English translations
│   │   └── zh/               # Chinese translations
│   ├── pages/                # Main page components
│   │   ├── Home.js           # Landing page with overview
│   │   ├── HackDetails.js    # Detailed breakdown of the hack
│   │   ├── BybitInfo.js      # Information about Bybit
│   │   ├── HackerProfile.js  # Analysis of the hackers
│   │   └── AssetData.js      # Visualizations of stolen assets
│   ├── i18n.js               # Internationalization configuration
│   ├── App.js                # Main app component with routing
│   ├── index.js              # Application entry point
│   └── index.css             # Global styles
└── package.json              # Dependencies and scripts
```

## Customization

To update the content of the website with real information about the hack:

1. Replace placeholder text (marked with [placeholders]) with actual data
2. Update chart data in `AssetData.js` with real values from Dune Analytics
3. Add real wallet addresses and transaction data
4. Update dates and timeline information

## Internationalization

The website supports both English and Chinese languages. To add or modify translations:

1. Edit the translation files in `src/locales/en/translation.json` or `src/locales/zh/translation.json`
2. Use the translation keys in your components with the `useTranslation` hook:
   ```javascript
   import { useTranslation } from 'react-i18next';
   
   function MyComponent() {
     const { t } = useTranslation();
     return <div>{t('myTranslationKey')}</div>;
   }
   ```
3. Switch between languages using the language selector in the navigation bar

## Building for Production

To build the app for production:

```bash
npm run build
# or
yarn build
```

This creates an optimized production build in the `build` folder.

## Technologies Used

- React
- React Router
- Chart.js with react-chartjs-2
- Styled Components
- i18next for internationalization
- Web Vitals

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Dune Analytics for on-chain data
- Blockchain forensic analysis companies for hack details
- Cryptocurrency security researchers 