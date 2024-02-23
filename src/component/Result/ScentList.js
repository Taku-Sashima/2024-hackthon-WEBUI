import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../pages/Result/Result.css';
import RenameFunction from './RenameFunction.js';
import { motion } from "framer-motion"


export default function ScentList(props) {
  const MOC_URL = "/moc/img/";
  // const url = '/user_scent/' + {props.details.id}+'/similar_scent_items';
  const url = `/detail/${props.details.id}`;
  const [showModal, setShowModal] = useState(false); // Modalコンポーネントの表示の状態を定義する
  const [text, setText] = useState(props.details.label);


  const ShowModal = () => {
    setShowModal(true);
  };

  const Text = (newValue) => {
    setText(newValue);
  };
  
  return (
    <motion.div className="resultdetail" initial={{ opacity: 0, y:-20}} animate={{opacity:1, y:0}} transition={{duration:0.7}}>
      <img src={`${MOC_URL}perfume_ill.png`} className='resultitemimg' alt='img'></img>
      <div className='resultitemname' >
        <Link to={url} className="resultitemname">{props.details.label.length > 6 ? (props.details.label.slice(0, 6) + "...")  : props.details.label}</Link>
      </div>
      <img src={`${MOC_URL}edit.png`} onClick={ShowModal} className='resulteditimg' alt='img'></img>
      <RenameFunction showModal={showModal} setShowModal={setShowModal} text={text} update={props.update} Text={Text} itemID={props.details.id} />
    </motion.div>
  )
}