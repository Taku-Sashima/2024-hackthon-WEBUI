import React from 'react'
import backimg from '../img/backimg.png';
import './Result.css';

export default function Result() {
  return (
    <>
        <div className='back'>
            <div className="border">
                <div className="backimg">
                    <img  className="img" src={backimg} alt="back" />   
                </div>
                <div className="topname">Perfume Pairing</div>
            </div>
        </div>
    </>
  )
}
