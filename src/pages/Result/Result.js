import React from "react";
import './Result.css';
import ScentList from '../../component/Result/ScentList.js';
import ScentObject from '../../component/Result/ScentObject.js';

export default function Result() {
  const MOC_URL = "/moc/img/"
  return (
    <>
        <div className='back'>
            <div className="backimg"><img  className="img" src={`${MOC_URL}backresult.png`} alt="back" /></div>
            <div className="topname"> Pairing Perfume</div>
            <div className="resultall">
                {Object.keys(ScentObject["ScentObject"]).map(key => <ScentList key={key} details={ScentObject["ScentObject"][key]} />)}
            </div>
        </div>
    </>
  )
}
