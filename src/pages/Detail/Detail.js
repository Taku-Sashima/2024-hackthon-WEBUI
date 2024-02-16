import React from 'react'
import "./Detail.css"

const bgImg = {
    '--back-detail-url': `url('/moc/img/backdetail.png')`
}

export default function Detail() {
    const MOC_URL = "/moc/img/"
    return (
    <div className='detail' style={bgImg}>
        <div className="border">
            <div className="inlineborder">
                <div className="detailtop">似た匂いの商品</div>
                <div className="itemall">
                    <div className="item">
                        <div className="itemdetail">
                            <div className='imgname'>
                                <img src={`${MOC_URL}number1.png`} className='numberimg' alt='number1'></img>
                                <div className='itemname'>ペパーミント</div>
                            </div>
                            <img src={`${MOC_URL}peppermint.png`} className='itemimg' alt='number1'></img>
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
                                <img src={`${MOC_URL}/number2.png`} className='numberimg' alt='number1'></img>
                                <div className='itemname'>ペパーミント</div>
                            </div>
                            <img src={`${MOC_URL}/peppermint.png`} className='itemimg' alt='number1'></img>
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
                                <img src={`${MOC_URL}/number3.png`} className='numberimg' alt='number1'></img>
                                <div className='itemname'>ペパーミント</div>
                            </div>
                            <img src={`${MOC_URL}/peppermint.png`} className='itemimg' alt='number1'></img>
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
