
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { connectToBinanceWS } from "./ws/ws";
import { setInitialAssets, updateLiveAsset } from "./redux/assetSlice";
import Table from "./component/Table";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setInitialAssets([
      { symbol: 'BTCUSDT', name: 'Bitcoin', logo: 'btc.svg', price: 0, change1h: 0, change24h: 0, change7d: 0, marketCap: 0, volume24h: 0, circulatingSupply: 0, chart: './assets/charts/chart-placeholder.svg' },
      { symbol: 'ETHUSDT', name: 'Ethereum', logo: 'eth.svg', price: 0, change1h: 0, change24h: 0, change7d: 0, marketCap: 0, volume24h: 0, circulatingSupply: 0, chart: './assets/charts/chart-placeholder.svg' },
      { symbol: 'BNBUSDT', name: 'BNB', logo: 'bnb.svg', price: 0, change1h: 0, change24h: 0, change7d: 0, marketCap: 0, volume24h: 0, circulatingSupply: 0, chart: './assets/charts/chart-placeholder.svg' },
      { symbol: 'XRPUSDT', name: 'Ripple', logo: 'xrp.svg', price: 0, change1h: 0, change24h: 0, change7d: 0, marketCap: 0, volume24h: 0, circulatingSupply: 0, chart: './assets/charts/chart-placeholder.svg' },
      { symbol: 'ADAUSDT', name: 'Cardano', logo: 'ada.svg', price: 0, change1h: 0, change24h: 0, change7d: 0, marketCap: 0, volume24h: 0, circulatingSupply: 0, chart: './assets/charts/chart-placeholder.svg' }
    ]));

    const ws = connectToBinanceWS(
      ['BTCUSDT', 'ETHUSDT', 'BNBUSDT', 'XRPUSDT', 'ADAUSDT'],
      (data) => {
        dispatch(updateLiveAsset({
          symbol: data.s,
          price: parseFloat(data.c),
          change1h: parseFloat(data.p),
          change24h: parseFloat(data.P),
          volume24h: parseFloat(data.v),
          marketCap: Math.random() * 1000000000, 
          circulatingSupply: Math.random() * 100000000, 
          chart: './assets/charts/chart-placeholder.svg',  
        }));
      }
    );

    return () => ws.close();
  }, [dispatch]);

  return (
    <div className=" p-4">
      <h1 className="text-2xl font-bold text-center m-3 ">Live Crypto Data</h1>
      <Table />
    </div>
  );
};

export default App;


