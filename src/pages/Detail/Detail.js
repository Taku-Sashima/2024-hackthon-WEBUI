import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import './Detail.css'

import SimilarScent from '../../component/Detail/SimilarScent.js'
import useSimilarScent from '../../component/Detail/GetSimilarScent.js'
import ReversedRank from '../../component/Detail/ReversedRank.js'


const bgImg = {
  '--back-detail-url': `url('/moc/img/backdetail.png')`
}

export default function Detail() {
  const [similarScent, getSimilarScent] = useSimilarScent()
  const [isReversed, setIsReversed] = useState(false)
  const { userScentId } = useParams()

  useEffect(() => {
    getSimilarScent(userScentId)
  }, [userScentId])

  const similarScentShow = isReversed ? similarScent?.toReversed() : similarScent

  return (
    <div className="detail" style={bgImg} >
      <div className="border">
        <ReversedRank isReversed={isReversed} setIsReversed={setIsReversed} />
        <div className="itemall">
          {similarScentShow &&
            similarScentShow
              .slice(0, 10)
              .map((v, i) => <SimilarScent key={v.id} details={v} listIndex={i} />)}
        </div>
        <Link to="/" className="reverseButton">
          一覧に戻る
        </Link>
      </div>
    </div>
  )
}
