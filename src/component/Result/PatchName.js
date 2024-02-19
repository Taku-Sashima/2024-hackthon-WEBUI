import { useEffect, useState, useRef } from 'react';
import axios from 'axios'
import '../../pages/Result/Result.css';


export default function usePatchName() {
  const patchName = (itemID, newName) => {
    const url = 'http://localhost:8000/user_scent/' + String(itemID)
    console.log('request was send')
    console.log("url is", url)
    axios.patch(url, { label: newName })
      .then(response => {
        console.log(newName);
      })
      .catch(() => {
        console.log('通信に失敗しました');
      });
  }
  return patchName
}