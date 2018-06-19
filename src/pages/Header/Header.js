import React, { Component } from 'react';
import Scroll from 'react-scroll-to-element';
import logo from './logo.png'

class Header extends Component {
	render() {
		return(
			<div>
				<span id="Header"></span>

				<section className="Header">
				<img src="https://s3-media2.fl.yelpcdn.com/bphoto/9pDQeS-UXFejnuavuIHeMg/o.jpg" className="headerImg"/>
				<div className="row">
			
					<div className="col-lg-4 col-md-4 col-4">
						<img src={logo} className="logo"/>
					</div>
					
						<Scroll type="class" element="Menu">
							<div className="icon">
									<i className="fas fa-chevron-down"></i>
									<b className="icon-text">NEXT</b>
							</div>
						</Scroll>

					</div>
				</section>
			</div>
		)
	}
}
export default Header;