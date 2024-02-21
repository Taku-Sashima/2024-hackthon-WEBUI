import { useEffect, useState } from 'react';
import axios from 'axios'
import '../../pages/Result/Result.css';
import { host } from '../../config.js'


export default function useGetScentData() {
  const url = host + '/user_scents?offset=0&limit=10&desc=true'

  const [scentObject, setScentObject] = useState(undefined);

  function fetchData() {
    axios.get(url)
      .then(response => {
        setScentObject(response.data);
        console.log("from response.data", response.data);
      })
      .catch(() => {
        console.log('通信に失敗しました');
      });
  }


  useEffect(() => {
    fetchData()
  }, []);

  return [scentObject, fetchData]
}