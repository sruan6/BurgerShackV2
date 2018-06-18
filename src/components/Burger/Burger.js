import React, { Component } from 'react';

class Burger extends Component {
	render() {
		return(
			<div>
				<div className="row">
					<div className="col-12">
						<h1>-BURGERS-</h1>
					</div>
					<div className="col-12">
						<p>Our 100% angus beef contains no hormones or antibiotics. 
						Our beef is freshly ground and all burgers are cooked medium unless otherwise requested. 
						Burgers are served with lettuce, tomatoes (pickles and onions are available upon request)</p>
					</div>
					<div className="col-md-6 col-12">
						<div className="row">
							<div className="col-md-8 col-9">
								<h3 className="foodName">1/4 lb Burger</h3>
							</div>
							<div className="col-md-4 col-3">
								<h3 className="foodPrice">6.25</h3>
							</div>
							<div className='col-md-12 col-12'>
								<p className='foodDescription'>Lettuce, tomato and house mayo</p>
							</div>
							<div className='col-md-8 col-9'>
								<h3 className='foodName'>1/2 lb Burger</h3>
							</div>
							<div className='col-md-4 col-3'>
								<h3 className='foodPrice'>8.75</h3>
							</div>
							<div className='col-md-12 col-12'>
								<p className='foodDescription'>Lettuce, tomato and house mayo</p>
							</div>
							<div className='col-md-8 col-9'>
								<h3 className='foodName'>1/4 lb Shack Burger</h3>
							</div>
							<div className='col-md-4 col-3'>
								<h3 className='foodPrice'>6.25</h3>
							</div>
							<div className='col-md-12 col-12'>
								<p className='foodDescription'>Lettuce, tomato and Shack sauce</p>
							</div>
							<div className='col-md-8 col-9'>
								<h3 className='foodName'>1/2 lb Shack Burger</h3>
							</div>
							<div className='col-md-4 col-3'>
								<h3 className='foodPrice'>8.75</h3>
							</div>
							<div className='col-md-12 col-12'>
								<p className='foodDescription'>Lettuce, tomato and Shack sauce</p>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-12">
						<div className='row'>
							<div className='col-md-8 col-9'>
								<h3 className='foodName'>Veggie Burger</h3>
							</div>
							<div className='col-md-4 col-3'>
								<h3 className='foodPrice'>7.25</h3>
							</div>
							<div className='col-md-12 col-12'>
								<p className='foodDescription'>Lettuce, tomato and Shack sauce</p>
							</div>
							<div className='col-md-8 col-9'>
								<h3 className='foodName'>Turkey Burger</h3>
							</div>
							<div className='col-md-4 col-3'>
								<h3 className='foodPrice'>7.25</h3>
							</div>
							<div className='col-md-12 col-12'>
								<p className='foodDescription'>Lettuce, tomato and Shack sauce</p>
							</div>
						</div>
					</div>
					<div className="col-12">
						<h1>-FRIES-</h1>
					</div>
					<div className="col-md-6 col-12">
						<div className="row">
							<div className='col-md-8 col-9'>
								<h3 className='foodName'>French Fries</h3>
							</div>
							<div className='col-md-4 col-3'>
								<h3 className='foodPrice'>3.00</h3>
							</div>
							<div className='col-md-8 col-9'>
								<h3 className='foodName'>Garlic Fries</h3>
							</div>
							<div className='col-md-4 col-3'>
								<h3 className='foodPrice'>4.00</h3>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-12">
						<div className="row">
							<div className='col-md-8 col-9'>
								<h3 className='foodName'>Curly Fries</h3>
							</div>
							<div className='col-md-4 col-3'>
								<h3 className='foodPrice'>3.50</h3>
							</div>
							<div className='col-md-8 col-9'>
								<h3 className='foodName'>Onion Rings</h3>
							</div>
							<div className='col-md-4 col-3'>
								<h3 className='foodPrice'>4.00</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default Burger;