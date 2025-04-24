import { useSelector } from "react-redux";
import btc from '../assets/logos/btc.svg';
import eth from '../assets/logos/eth.svg';
import ada from '../assets/logos/ada.svg';
import bnb from '../assets/logos/bnb.svg';
import xrp from '../assets/logos/xrp.svg';
import chart from '../assets/Charts/7d-chart.webp';

const logoMap = {
  BTCUSDT: btc,
  ETHUSDT: eth,
  ADAUSDT: ada,
  BNBUSDT: bnb,
  XRPUSDT: xrp,
};

const Table = () => {
  const assets = useSelector((state) => state.asset.data);

  const formatPrice = (price) => {
    return price.toLocaleString("en-US", { style: "currency", currency: "USD" });
  };

  const formatLargeNumber = (num) => {
    if (num >= 1_000_000_000) {
      return `$${(num / 1_000_000_000).toFixed(2)}B`;
    } else if (num >= 1_000_000) {
      return `$${(num / 1_000_000).toFixed(2)}M`;
    } else {
      return `$${num.toLocaleString()}`;
    }
  };

  const colorCodePercentage = (percentage) => {
    if (percentage > 0) return "text-green-500 font-medium";
    if (percentage < 0) return "text-red-500 font-medium";
    return "text-gray-400 font-medium";
  };

  const formatPercentage = (value) => {
    const formattedValue = value.toFixed(2);
    return value > 0 ? `+${formattedValue}%` : `${formattedValue}%`;
  };

  return (
    <div className="overflow-x-auto shadow-lg rounded-lg">
      <table className="min-w-full text-sm text-left text-gray-700">
        <thead className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <tr className="text-xs uppercase tracking-wider">
            <th className="px-4 py-3">#</th>
            <th className="px-4 py-3">Asset</th>
            <th className="px-4 py-3">Price</th>
            <th className="px-4 py-3">1h %</th>
            <th className="px-4 py-3">24h %</th>
            <th className="px-4 py-3">7d %</th>
            <th className="px-4 py-3">Market Cap</th>
            <th className="px-4 py-3">24h Volume</th>
            <th className="px-4 py-3">Circulating Supply</th>
            <th className="px-4 py-3">Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset, index) => {
            const logo = logoMap[asset.symbol] || btc; // Use the correct logo based on symbol
            const baseSymbol = asset.symbol.replace('USDT', '');
            
            return (
              <tr key={asset.symbol} className="bg-white border-b hover:bg-blue-50 transition duration-150">
                <td className="px-4 py-4 font-medium text-gray-900">{index + 1}</td>
                <td className="px-4 py-4">
                  <div className="flex items-center space-x-3">
                    <img src={logo} alt={asset.name} className="w-8 h-8" />
                    <div>
                      <div className="font-medium text-gray-900">{asset.name}</div>
                      <div className="text-xs text-gray-500">{baseSymbol}</div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4 font-semibold">{formatPrice(asset.price)}</td>
                <td className={`px-4 py-4 ${colorCodePercentage(asset.change1h)}`}>
                  {formatPercentage(asset.change1h)}
                </td>
                <td className={`px-4 py-4 ${colorCodePercentage(asset.change24h)}`}>
                  {formatPercentage(asset.change24h)}
                </td>
                <td className={`px-4 py-4 ${colorCodePercentage(asset.change7d)}`}>
                  {formatPercentage(asset.change7d)}
                </td>
                <td className="px-4 py-4">{formatLargeNumber(asset.marketCap)}</td>
                <td className="px-4 py-4">{formatLargeNumber(asset.volume24h)}</td>
                <td className="px-4 py-4">
                  {asset.circulatingSupply.toLocaleString()} <span className="text-gray-500">{baseSymbol}</span>
                </td>
                <td className="px-4 py-4">
                  <img src={chart} alt="7D Chart" className="w-24 h-12 rounded object-cover" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;





