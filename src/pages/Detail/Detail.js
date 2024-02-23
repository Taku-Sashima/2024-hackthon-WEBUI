import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./Detail.css"

import SimilarScent from '../../component/Detail/SimilarScent.js'
import useSimilarScent from '../../component/Detail/GetSimilarScent.js'
import ReversedRank from '../../component/Detail/ReversedRank.js'

const bgImg = {
	'--back-detail-url': `url('/moc/img/backdetail.png')`
}

export default function Detail() {
	const [similarScent, getSimilarScent] = useSimilarScent();
	const [isReversed, setIsReversed] = useState(false)

	const { userScentId } = useParams()
	console.log(userScentId)

	useEffect(() => {
		getSimilarScent(userScentId);
	}, [userScentId]);

	return (
		<div className='detail' style={bgImg}>
			<div className="border">
				{/* <div id = "changetext" className="detailtop" onClick= {changeText} >似た匂いの商品</div> */}
				<ReversedRank isReversed={isReversed}  setIsReversed={setIsReversed}/>
				<div className="itemall">
					{similarScent && Object.keys(isReversed ? similarScent.toReversed() : similarScent).map(key => <SimilarScent key={key} details={similarScent[key]} listIndex={key} />)}
				</div>
			</div>
		</div>
	)
}
