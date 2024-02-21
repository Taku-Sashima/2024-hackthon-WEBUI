import React, { useState, useEffect} from 'react';
import axios from 'axios'
import '../../pages/Detail/Detail.css';
import {host} from '../../config.js'

export default function useSimilarScent(){
  const [similarScent, setSimilarScent] = useState({});

  const getSimilarScent = (itemID) =>{
    const url = host + '/user_scent/' + String(itemID) +'/similar_scent_items'
    axios.get(url)
      .then(response => {
        setSimilarScent(response.data);
        console.log("similar Scent", similarScent);
      })
      .catch(() => {
        console.log('通信に失敗しました');
      });
  }

  return [similarScent, getSimilarScent]
}