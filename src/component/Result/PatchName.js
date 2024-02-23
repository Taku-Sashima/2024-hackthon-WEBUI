import axios from 'axios'
import '../../pages/Result/Result.css';
import { host } from '../../config.js'


export default function usePatchName() {
  const patchName = async (itemID, newName) => {
    const url = host + '/user_scent/' + String(itemID)
    try {
      const res = await axios.patch(url, { label: newName })
      console.log("new lable name", res.data.label);
    } catch {
      console.log('通信に失敗しました');
    }
  }
  return patchName
}
