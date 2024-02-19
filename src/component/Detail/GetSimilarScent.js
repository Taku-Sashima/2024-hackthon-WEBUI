import React, { useState, useEffect} from 'react';
import axios from 'axios'
import '../../pages/Detail/Detail.css';

export default function useSimilarScent(){
  const [similarScent, setSimilarScent] = useState({});
  const [itemID, setItemID] = useState(0)
  const [tempName, setTempName] = useState("")

  useEffect(() => {
    const url = 'http://localhost:8000//user_scent/' + String(itemID) +'/similar_scent_items'
    getSimilarScent(url);
  },[]);

  const getSimilarScent = (url) =>{
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