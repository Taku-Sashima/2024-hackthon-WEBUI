import React, { useState, useEffect } from "react";
import './Result.css';
import ScentList from '../../component/Result/ScentList.js';
import useGetScentData from '../../component/Result/GetScentData.js';

import { useWebSocketClient } from '../../component/WebSocket/WebSocket.js';

export default function Result() {
  const MOC_URL = "/moc/img/"
  const [scentObject, update] = useGetScentData()
  const wsClient = useWebSocketClient();

  useEffect(() => {
    if (!wsClient) return
    wsClient.onmessage = (event) => {
      const data = JSON.parse(event.data)
      console.log("Message from server ", data);

      if (data.message == "New user scent created") {
        console.log("aaa");
        update();
      }
    };

  }, [wsClient]); // wsClientが変更されたときに再度設定する


  return (
    <>
      <div className='back'>
        <div className="backimg"><img className="img" src={`${MOC_URL}backresult.png`} alt="back" /></div>
        <div className="topname" >かぐぞう</div>
        <div className="resultall">
          {scentObject &&
            scentObject.map((v) => <ScentList key={v.id} details={v} update={update} />)}
        </div>
      </div>
    </>
  )
}
