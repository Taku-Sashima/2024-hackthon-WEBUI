import React from 'react'
import "./Detail.css"

import SimilarScent from '../../component/Detail/SimilarScent.js'
import SimilarObject from '../../component/Detail/SimilarObject.js'
import useSimilarScent from '../../component/Detail/GetSimilarScent.js'

const bgImg = {
    '--back-detail-url': `url('/moc/img/backdetail.png')`
}

export default function Detail() {
	const [similarScent, update] = useSimilarScent()
	// const MOC_URL = "/moc/img/"
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
