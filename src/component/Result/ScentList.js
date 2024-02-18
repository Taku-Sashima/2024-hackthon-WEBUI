import React from 'react'

export default function ScentList(props){
  const MOC_URL = "/moc/img/"

  return(
    <div className="resultdetail">
      <img src={`${MOC_URL}peppermint.png`} className='resultitemimg' alt='img'></img>
      <div className='resultitemname'>{props.details.user_scent_meta_label}</div>
      <img src={`${MOC_URL}edit.png`} className='resulteditimg' alt='img'></img>
    </div>
  )
}