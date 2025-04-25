 Real-Time Crypto Dashboard:
A responsive cryptocurrency dashboard built with React, Redux Toolkit, Vite, Tailwind CSS, and Binance WebSocket API. Displays real-time price and volume updates for major crypto assets like BTC, ETH, ADA, and more.


 Live Demo:
 https://crypro-tracker-five.vercel.app/

 View the real-time dashboard in action!

FEATURES:
Real-Time Price Updates via Binance WebSocket

 Crypto Table UI:

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


Tool	Purpose:
React-UI framework
Redux-Toolkit	Centralized state management
Vite-Lightning-fast build tool
Tailwind CSS-Utility-first responsive design
WebSocket (Binance)-Live price/volume updates

WebSocket Integration:
Connects to Binance’s ticker stream:

bash
Copy
Edit
wss://stream.binance.com:9443/stream?streams=btcusdt@ticker/ethusdt@ticker/
Parses and dispatches:

price

24h % change

24h volume

 Why setInterval is unnecessary:
The Binance WebSocket stream provides live, push-based data.

Every time a tracked asset changes (e.g., price, 24h %), Binance sends an update.


git clone https://github.com/SanthoshKumar49451/crypro-tracker.git
cd crypro-tracker

Setup Instructions
Clone the repo
git clone https://github.com/SanthoshKumar49451/crypro-tracker.git
cd crypro-tracker
Install dependencies
npm install
Start development server
npm run dev
Build for production



Thought Process
Focused on building a clean, real-time dashboard experience that mirrors professional crypto platforms like Binance and CoinMarketCap. State is centralized and performant via Redux selectors, and Tailwind ensures a fast, responsive UI layout.
npm run build

