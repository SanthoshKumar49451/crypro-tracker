Real-Time Crypto Dashboard
This is a responsive cryptocurrency dashboard built with React, Redux Toolkit, Vite, Tailwind CSS, and Binance WebSocket API. It displays real-time price and volume updates for major crypto assets like BTC, ETH, ADA, and more.
Live Demo
Check it out: https://crypro-tracker-five.vercel.app/
Key Features

Real-Time Price Updates via Binance WebSocket
Comprehensive Crypto Table UI:

Logos
Live Price
% Changes (1h, 24h, 7d)
Market Cap
24h Volume
Circulating Supply
Static 7D Chart (SVG)


Color-coded % change (green for positive, red for negative)
State managed with Redux Toolkit
Fully responsive with Tailwind CSS

Tech Stack
ToolPurposeReactUI frameworkRedux ToolkitCentralized state managementViteLightning-fast build toolTailwind CSSUtility-first responsive designWebSocket (Binance)Live price/volume updates
WebSocket Integration

Connects to Binance's ticker stream:
wss://stream.binance.com:9443/stream?streams=btcusdt@ticker/ethusdt@ticker/

Parses and dispatches:

Price
24h % change
24h volume



Note: No setInterval needed as the Binance WebSocket stream provides live, push-based data. Every time a tracked asset changes, Binance sends an update.
Setup Instructions

Clone the repo
bashgit clone https://github.com/SanthoshKumar49451/crypro-tracker.git
cd crypro-tracker

Install dependencies
npm install

Start development server
npm run dev

Build for production
npm run build


Thought Process
The project focuses on building a clean, real-time dashboard experience that mirrors professional crypto platforms like Binance and CoinMarketCap. State is centralized and performant via Redux selectors, and Tailwind ensures a fast, responsive UI layout.
