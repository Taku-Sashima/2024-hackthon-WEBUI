import React, { useState, useEffect} from 'react';
import axios from 'axios'
import '../../pages/Detail/Detail.css';
import {host} from '../../config.js'

export default function useSimilarScent(){
  const [similarScent, setSimilarScent] = useState({});
  const [itemID, setItemID] = useState(0)

  useEffect(() => {
    getSimilarScent();
  },[itemID]);


  // useEffect(() => {
  //   if (itemID !== 0) { // itemID が 0 でない場合にのみ実行
  //     getSimilarScent();
  //   }
  // }, [itemID]);

  const getSimilarScent = () =>{
    const url = host + '/user_scent/' + String(itemID) +'/similar_scent_items'
    axios.get(url)
      .then(response => {
        setSimilarScent(response.data);
        console.log(similarScent);
      })
      .catch(() => {
        console.log('通信に失敗しました');
      });
  }

  return [similarScent, setItemID]
}