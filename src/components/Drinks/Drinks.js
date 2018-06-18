import React, { Component } from 'react';

class Drinks extends Component {
	render() {
		return(
			<div>
				<div className="row">
					<div className="col-12">
						<h1>-DRINKS&DESERTS-</h1>
					</div>

					<div className="col-12">
						<div className="row">
							<div className='col-md-8 col-9'>
								<h3 className='foodName'>Fountain Soda</h3>
							</div>
							<div className='col-md-4 col-3'>
								<h3 className='foodPrice'>2.25</h3>
							</div>
							<div className='col-md-8 col-9'>
								<h3 className='foodName'>Milkshakes</h3>
							</div>
							<div className='col-md-4 col-3'>
								<h3 className='foodPrice'>5.00</h3>
							</div>
							<div className='col-md-8 col-9'>
								<h3 className='foodName'>Root Beer Float</h3>
							</div>
							<div className='col-md-4 col-3'>
								<h3 className='foodPrice'>5.00</h3>
							</div>
							<div className='col-md-8 col-9'>
								<h3 className='foodName'>Ice Cream Cone</h3>
							</div>
							<div className='col-md-4 col-3'>
								<h3 className='foodPrice'>3.00</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default Drinks;