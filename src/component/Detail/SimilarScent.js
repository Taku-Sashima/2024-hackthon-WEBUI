import React from 'react'

export default function SimilarScent(props){
  const MOC_URL = "/moc/img/"

  return(
    <div className="item">
      <div className="itemdetail">
          <div className='imgname'>
              <img src={`${MOC_URL}number1.png`} className='numberimg' alt='number1'></img>
              <div className='itemname'>{props.details.item_name}</div>
          </div>
          <img src={`${MOC_URL}peppermint.png`} className='itemimg' alt='number1'></img>
          <div className="details">
              <div className="feature">{props.details.scent_tag.main},{props.details.scent_tag.sub}</div>
              <div className="class">#シャンプー</div>
          </div>
          <div className="similarity">{props.details.similarity*100}%</div>
      </div>
  </div>
  )
}