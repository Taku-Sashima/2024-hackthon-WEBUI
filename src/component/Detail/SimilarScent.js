import React from 'react'

//props以下を擬似データのものに変更する

export default function SimilarScent(props) {
  return (
    <div className="item">
      <div className="itemdetail">
        <div className="imgname">
          <img
            src={'/img/ranking/number' + `${Number(props.listIndex) + 1}` + '.png'}
            className="numberimg"
            alt="number1"
          ></img>
          <div className="itemname">{props.details.item_name}</div>
        </div>
        <img
          src={`/img/item/item${props.details.img_url}.png`}
          className="itemimg"
          alt={'item_img' + props.details.id}
        ></img>
        <div className="details">
          <div className="feature">
            {props.details.item_tags[0]},{props.details.item_tags[1]}
          </div>
          <div className="class">{props.details.product_label}</div>
        </div>
        <div className="similarity">{Math.floor(props.details.similarity * 100, 2)}%</div>
      </div>
    </div>
  )
}
