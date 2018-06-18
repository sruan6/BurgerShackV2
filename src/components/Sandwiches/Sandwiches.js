import React, { Component } from 'react';

class Sandwiches extends Component {
	render() {
		return(
			<div>
				<div className="row">
					<div className="col-12">
						<h1>-SANDWICHES-</h1>
					</div>

					<div className="col-12">
						<div className="row">
							<div className='col-md-8 col-9'>
								<h3 className='foodName'>Fried Chicken Sandwich</h3>
							</div>
							<div className='col-md-4 col-3'>
								<h3 className='foodPrice'>7.75</h3>
							</div>
							<div className='col-md-12 col-12'>
								<p className='foodDescription'>All natural chicken breast with lettuce, tomato and mayo</p>
							</div>
							<div className='col-md-8 col-9'>
								<h3 className='foodName'>Fish Sandwich</h3>
							</div>
							<div className='col-md-4 col-3'>
								<h3 className='foodPrice'>7.75</h3>
							</div>
							<div className='col-md-12 col-12'>
								<p className='foodDescription'>Breaded cod, lettuce, tomato and tartar sauce</p>
							</div>
						</div>
					</div>
					<div className="col-12">
						<h1>-EXTRAS-</h1>
					</div>
					<div className="col-4">
						<div className="row">
							<div className="col-12">
								<h4 className="extra first">Jalapeno Poppers</h4>
							</div>
							<div className="col-12">
								<p className="extraDescription first">Stuffed with cream cheese</p>
							</div>
							<div className="col-6">
								<h4 className="extraAmount first">6 pc</h4>
							</div>
							<div className="col-6">
								<h4 className="extraPrice">5.00</h4>
							</div>
							<div className="col-6">
								<h4 className="extraAmount first">9 pc</h4>
							</div>
							<div className="col-6">
								<h4 className="extraPrice">7.00</h4>
							</div>
							<div className="col-6">
								<h4 className="extraAmount first">20 pc</h4>
							</div>
							<div className="col-6">
								<h4 className="extraPrice">14.00</h4>
							</div>
						</div>
					</div>
					<div className="col-4">
						<div className="row">
							<div className="col-12">
							<br/>
							<br/>
								<h4 className="extra">Corn Dog&nbsp;&nbsp;&nbsp;&nbsp;3.00</h4>
							</div>
						</div>
					</div>
					<div className="col-4">
						<div className="row">
							<div className="col-12">
								<h4 className="extra">Mini Corn Dogs</h4>
							</div>
							<div className="col-6">
								<h4 className="extraAmount first">6 pc</h4>
							</div>
							<div className="col-6">
								<h4 className="extraPrice">3.50</h4>
							</div>
							<div className="col-6">
								<h4 className="extraAmount first">9 pc</h4>
							</div>
							<div className="col-6">
								<h4 className="extraPrice">4.50</h4>
							</div>
							<div className="col-6">
								<h4 className="extraAmount first">20 pc</h4>
							</div>
							<div className="col-6">
								<h4 className="extraPrice">8.75</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default Sandwiches;