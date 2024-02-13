import React from 'react'
import backimg from '../img/backresult.png';
import peppermint from '../img/peppermint.png';
import editimg from '../img/edit.png';
import './Result.css';

export default function Result() {
  return (
    <>
        <div className='back'>
            <div className="backimg"><img  className="img" src={backimg} alt="back" /></div>
            <div className="topname">Perfume Pairing</div>
            <div className="resultall">
                <div className="resultdetail">
                    <img src={peppermint} className='resultitemimg' alt='img'></img>
                    <div className='resultitemname'>ペパーミント</div>
                    <img src={editimg} className='resulteditimg' alt='img'></img>
                </div>
            </div>
        </div>
    </>
  )
}
