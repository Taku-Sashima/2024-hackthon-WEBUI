import React, { useState } from "react";
import './Result.css';
import ScentList from '../../component/Result/ScentList.js';
import useGetScentData from '../../component/Result/GetScentData.js';

export default function Result() {
  const MOC_URL = "/moc/img/"
  const [scentObject, update] = useGetScentData()
  return (
    <>
      <div className='back'>
        <div className="backimg"><img className="img" src={`${MOC_URL}backresult.png`} alt="back" /></div>
        <div className="topname" > Pairing Perfume</div>
        <div className="resultall">
          {Object.keys(scentObject).map(key => <ScentList key={key} details={scentObject[key]} update={update} />)}
        </div>
      </div>
    </>
  )
}
