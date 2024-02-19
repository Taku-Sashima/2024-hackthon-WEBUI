import React, { useState } from 'react';
import '../../pages/Result/Result.css';
import RenameFunction from './RenameFunction.js';
import { Link } from 'react-router-dom';

export default function ScentList(props){
  const MOC_URL = "/moc/img/"
  const [showModal, setShowModal] = useState(false); // Modalコンポーネントの表示の状態を定義する
  const [text, setText] = useState(""); //新しい名前に変更する
  const [newName, setNewName] = useState(props.details.label);

  const ShowModal = () => {
    setShowModal(true);
  };

  const Text = (newValue) => {
    setText(newValue);
  };

  return(
    <div className="resultdetail">
      <img src={`${MOC_URL}peppermint.png`} className='resultitemimg' alt='img'></img>
      <div className='resultitemname'><Link to='./detail' style={{ textDecoration: 'none', color: 'black' }}>{newName}</Link></div>
      <img src={`${MOC_URL}edit.png`} onClick={ShowModal} className='resulteditimg' alt='img'></img>
      <RenameFunction showModal={showModal} setShowModal={setShowModal} Text={Text} newName={newName} setNewName={setNewName} text={text} update={props.update} itemID={props.details.id}/>
    </div>
  )
}