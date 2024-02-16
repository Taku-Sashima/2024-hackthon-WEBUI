import React from 'react'
import './Result.css';

export default function Result() {
  const MOC_URL = "/moc/img/"
  return (
    <>
        <div className='back'>
            <div className="backimg"><img  className="img" src={`${MOC_URL}backresult.png`} alt="back" /></div>
            <div className="topname">Perfume Pairing</div>
            <div className="resultall">
                <div className="resultdetail">
                    <img src={`${MOC_URL}peppermint.png`} className='resultitemimg' alt='img'></img>
                    <div className='resultitemname'>ペパーミント</div>
                    <img src={`${MOC_URL}edit.png`} className='resulteditimg' alt='img'></img>
                </div>
            </div>
        </div>
    </>
  )
}
