import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import "./Detail.css"

import SimilarScent from '../../component/Detail/SimilarScent.js'
import useSimilarScent from '../../component/Detail/GetSimilarScent.js'

const bgImg = {
	'--back-detail-url': `url('/moc/img/backdetail.png')`
}

export default function Detail() {
	const [similarScent, setItemID] = useSimilarScent();

	const { userScentId } = useParams()
	console.log(userScentId)
	// setItemID(userScentId)

	useEffect(() => {
		setItemID(userScentId);
	}, [userScentId]);

	return (
		<div className='detail' style={bgImg}>
			<div className="border">
				<div className="detailtop">似た匂いの商品</div>
				<div className="itemall">
					{Object.keys(similarScent).map(key => <SimilarScent key={key} details={similarScent[key]} />)}
				</div>
			</div>
		</div>
	)
}
