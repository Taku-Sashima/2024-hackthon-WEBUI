import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../pages/Result/Result.css';
import RenameFunction from './RenameFunction.js';


export default function ScentList(props) {
  const MOC_URL = "/moc/img/";
  // const url = '/user_scent/' + {props.details.id}+'/similar_scent_items';
  const url = `/detail/${props.details.id}`;
  const [showModal, setShowModal] = useState(false); // Modalコンポーネントの表示の状態を定義する
  const [text, setText] = useState("");


  const ShowModal = () => {
    setShowModal(true);
  };

  const Text = (newValue) => {
    setText(newValue);
  };
  
  return (
    <div className="resultdetail">
      <img src={`${MOC_URL}peppermint.png`} className='resultitemimg' alt='img'></img>
      <div className='resultitemname' ><Link to={url} style={{ textDecoration: 'none', color: 'black' }}>{props.details.label}</Link></div>
      <img src={`${MOC_URL}edit.png`} onClick={ShowModal} className='resulteditimg' alt='img'></img>
      <RenameFunction showModal={showModal} setShowModal={setShowModal} text={text} update={props.update} Text={Text} itemID={props.details.id} />
    </div>
  )
}