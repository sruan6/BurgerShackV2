import React, { Component } from 'react';

class Basket extends Component {
	render() {
		return(
			<div>
				<div className="row">
					<div className="col-12">
						<h1>-BASKET-</h1>
						<h6>all baskets come with french fries</h6>
					</div>

					<div className="col-12">
						<div className="row">
							<div className='col-lg-10 col-md-10 col-9'>
								<h3 className='foodName'>Fish & Chips</h3>
							</div>
							<div className='col-lg-2 col-md-2 col-3'>
								<h3 className='foodPrice'>8.75</h3>
							</div>
							<div className='col-lg-10 col-md-10 col-9'>
								<h3 className='foodName'>Chicken Strips</h3>
							</div>
							<div className='col-lg-2 col-md-2 col-3'>
								<h3 className='foodPrice'>8.00</h3>
							</div>
							<div className='col-lg-10 col-md-10 col-9'>
								<h3 className='foodName'>6 pc Chicken Nuggets</h3>
							</div>
							<div className='col-lg-2 col-md-2 col-3'>
								<h3 className='foodPrice'>5.75</h3>
							</div>
							<div className='col-lg-10 col-md-10 col-9'>
								<h3 className='foodName'>9 pc Chicken Nuggets</h3>
							</div>
							<div className='col-lg-2 col-md-2 col-3'>
								<h3 className='foodPrice'>7.00</h3>
							</div>
							<div className='col-lg-10 col-md-10 col-9'>
								<h3 className='foodName'>20 pc Chicken Nuggets</h3>
							</div>
							<div className='col-lg-2 col-md-2 col-3'>
								<h3 className='foodPrice'>11.50</h3>
							</div>
						</div>

						<div className="col-12">
							<h4 className="exchange">Exchange french fries for curly fries,onion rings(1.00)</h4>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default Basket;