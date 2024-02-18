import React from 'react'
import "./Detail.css"

import SimilarScent from '../../component/Detail/SimilarScent.js'
import SimilarObject from '../../component/Detail/SimilarObject.js'

const bgImg = {
    '--back-detail-url': `url('/moc/img/backdetail.png')`
}

export default function Detail() {
	// const MOC_URL = "/moc/img/"
	return (
		<div className='detail' style={bgImg}>
			<div className="border">
					<div className="detailtop">似た匂いの商品</div>
					<div className="itemall">
						{Object.keys(SimilarObject["analysis_result"]).map(key => <SimilarScent key={key} details={SimilarObject["analysis_result"][key]} />)}	
					</div>
				</div>
		</div>
  )
}
