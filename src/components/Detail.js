import React from 'react'
import number1 from '../img/number1.png';
import number2 from '../img/number2.png';
import number3 from '../img/number3.png';
import peppermint from '../img/peppermint.png';
import "./Detail.css"

export default function Detail() {
  return (
    <div className='detail'>
        <div className="border">
            <div className="inlineborder">
                <div className="detailtop">似た匂いの商品</div>
                <div className="itemall">
                    <div className="item">
                        <div className="itemdetail">
                            <div className='imgname'>
                                <img src={number1} className='numberimg' alt='number1'></img>
                                <div className='itemname'>ペパーミント</div>
                            </div>
                            <img src={peppermint} className='itemimg' alt='number1'></img>
                            <div className="details">
                                <div className="detail_company">DAISO</div>
                                <div className="feature">ミント、シトラス</div>
                                <div className="class">#シャンプー</div>
                            </div>
                            <div className="similarity">97%</div>
                        </div>
                    </div>
                    <div className="item">
                    <div className="itemdetail">
                            <div className='imgname'>
                                <img src={number2} className='numberimg' alt='number1'></img>
                                <div className='itemname'>ペパーミント</div>
                            </div>
                            <img src={peppermint} className='itemimg' alt='number1'></img>
                            <div className="details">
                                <div className="detail_company">DAISO</div>
                                <div className="feature">ミント、シトラス</div>
                                <div className="class">#シャンプー</div>
                            </div>
                            <div className="similarity">86%</div>
                        </div>
                    </div>
                    <div className="item">
                    <div className="itemdetail">
                            <div className='imgname'>
                                <img src={number3} className='numberimg' alt='number1'></img>
                                <div className='itemname'>ペパーミント</div>
                            </div>
                            <img src={peppermint} className='itemimg' alt='number1'></img>
                            <div className="details">
                                <div className="detail_company">DAISO</div>
                                <div className="feature">ミント、シトラス</div>
                                <div className="class">#シャンプー</div>
                            </div>
                            <div className="similarity">58%</div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}
