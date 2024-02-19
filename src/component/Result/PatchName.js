import { useEffect, useState } from 'react';
import axios from 'axios'
import '../../pages/Result/Result.css';


export default function usePatchName() {

  const [itemID, setItemID] = useState(0)
  const [tempName, setTempName] = useState("")
  const [newName, setNewName] = useState({})

  useEffect(() => {
    console.log("UseEffect is working!")
    const url = 'http://localhost:8000/user_scent/'+String(itemID)
    patchName(url)
  }, [tempName]);

  const patchName = (url) => {
    console.log('request was send')
    console.log("url is",url)
    console.log("tempName is",tempName)
    axios.patch(url, {data : tempName})
      .then(response => {
        setNewName(response.data);
        console.log(newName);
      })
      .catch(() => {
        console.log('通信に失敗しました');
      });
  }
  return [newName, setTempName, setItemID]
}