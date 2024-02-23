import React, { useEffect, useState, useContext, createContext } from 'react';
import { ws_host } from '../../config.js'

const WebSocketContext = createContext(null);

export const WebSocketProvider = ({ children }) => {
  const [wsClient, setWsClient] = useState(null)

  useEffect(() => {
    const client = new WebSocket(ws_host + '/ws/user_scent');
    setWsClient(client);
    client.onopen = () => {
      console.log("ws conneted");
    }
  }, [])

  return <WebSocketContext.Provider value={wsClient}>{children}</WebSocketContext.Provider>
}

export const useWebSocketClient = () => {
  const wsClient = useContext(WebSocketContext)
  return wsClient
}