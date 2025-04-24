export const connectToBinanceWS = (symbols, onMessage) => {
    const streamPath = symbols.map(s => `${s.toLowerCase()}@ticker`).join('/');
    const ws = new WebSocket(`wss://stream.binance.com:9443/stream?streams=${streamPath}`);
  
    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.data) onMessage(msg.data);
    };
  
    ws.onerror = err => console.error('WebSocket error:', err);
    ws.onclose = () => console.log('WebSocket closed');
  
    return ws;
  };
  