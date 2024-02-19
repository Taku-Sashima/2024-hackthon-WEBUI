import React from 'react'

//props以下を擬似データのものに変更する

export default function SimilarScent(props){
  const MOC_URL = "/moc/img/"

  return(
    <div className="item">
      <div className="itemdetail">
          <div className='imgname'>
              <img src={props.details.img_url} className='numberimg' alt='number1'></img>
              <div className='itemname'>{props.details.item_name}</div>
          </div>
          <img src={`${MOC_URL}peppermint.png`} className='itemimg' alt='number1'></img>
          <div className="details">
              <div className="feature">{props.details.item_tags.tag1},{props.details.item_tags.tag2}</div>
              <div className="class">{props.details.product_label}</div>
          </div>
          <div className="similarity">{props.details.similarity*100}%</div>
      </div>
  </div>
  )
}