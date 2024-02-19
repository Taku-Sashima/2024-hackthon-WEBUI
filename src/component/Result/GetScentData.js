import { useEffect, useState } from 'react';
import axios from 'axios'
import '../../pages/Result/Result.css';

export default function useGetScentData() {
  const url = 'http://localhost:8000/user_scents?offset=0&limit=10&desc=true'

  const [updateCount, setUpdateCount] = useState(0)
  const [scentObject, setScentObject] = useState({});

  useEffect(() => {
    getScentData();
  }, [updateCount]);

  const getScentData = () => {
    axios.get(url)
      .then(response => {
        setScentObject(response.data);
        console.log(scentObject);
      })
      .catch(() => {
        console.log('通信に失敗しました');
      });
  }
  return [scentObject, () => setUpdateCount((prevCount) => prevCount + 1)]
}