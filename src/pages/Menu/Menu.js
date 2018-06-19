import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Scroll from 'react-scroll-to-element';
import Burger from './../../components/Burger';
import Sandwiches from './../../components/Sandwiches';
import Basket from './../../components/Basket';
import Drinks from './../../components/Drinks';

class Menu extends Component {

	constructor(props) {
    super(props);
    this.state = {
    	burger: true,
    	sandwiches: false,
    	baskets: false,
    	drinks: false,
    	choice1: "foodChoiceActive",
    	choice2: "foodChoice",
    	choice3: "foodChoice",
    	choice4: "foodChoice"
    };
    this.handleBurger = this.handleBurger.bind(this);
    this.handleSandwiches = this.handleSandwiches.bind(this);
    this.handleBasket = this.handleBasket.bind(this);
    this.handleDrinks = this.handleDrinks.bind(this);
  };
  handleBurger = () => {
  	this.setState({	burger : true,
  					sandwiches : false,
  					baskets: false,
  					drinks : false,
  					choice1: "foodChoiceActive",
    				choice2: "foodChoice",
    				choice3: "foodChoice",
    				choice4: "foodChoice"
  	})
  };
  handleSandwiches = () => {
  	this.setState({	burger : false,
  					sandwiches : true,
  					baskets: false,
  					drinks : false,
  					choice1: "foodChoice",
    				choice2: "foodChoiceActive",
    				choice3: "foodChoice",
    				choice4: "foodChoice"
  	})	
  };
  handleBasket = () => {
  	this.setState({	burger : false,
  					sandwiches : false,
  					baskets: true,
  					drinks : false,
  					choice1: "foodChoice",
    				choice2: "foodChoice",
    				choice3: "foodChoiceActive",
    				choice4: "foodChoice"
  	})
  };
  handleDrinks = () => {
  	this.setState({	burger : false,
  					sandwiches : false,
  					baskets: false,
  					drinks : true,
  					choice1: "foodChoice",
    				choice2: "foodChoice",
    				choice3: "foodChoice",
    				choice4: "foodChoiceActive"
  	})
  };
	render() {
		return(
			<div>
				<span id="Menu"></span>

				<section className="Menu">
					<div className="row">


						<div className="col-md-6 col-12">
							<div className="row">
								<div className="col-12">
									<h1 className="title">Menu</h1>
								</div>
								<div className="col-md-12 col-6">
									<h6 id="firstOption" className={this.state.choice1} onClick={this.handleBurger}>BURGER & <br className="d-none d-block d-sm-block d-md-none"/>FRIES</h6>
								</div>
								<div className="col-md-12 col-6">
									<h6 className={this.state.choice2} onClick={this.handleSandwiches}>SANWICHES & <br className="d-none d-block d-sm-block d-md-none"/>EXTRAS</h6>
								</div>
								<div className="col-md-12 col-6">
									<h6 className={this.state.choice3} onClick={this.handleBasket}>BASKETS</h6>
								</div>
								<div className="col-md-12 col-6">
									<h6 className={this.state.choice4} onClick={this.handleDrinks}>DRINK & DESERT</h6>
								</div>
							</div> 
						</div>

						<div className="col-md-6 col-12">
							<div className="menuChoice">
						    <ReactCSSTransitionGroup
						      transitionName="example"
						      transitionAppear={true}
						      transitionAppearTimeout={500}
						      transitionEnter={false}
						      transitionLeave={false}>
						      {this.state.burger ? <Burger/> : null}
						   	</ReactCSSTransitionGroup>
						    <ReactCSSTransitionGroup
						      transitionName="example"
						      transitionAppear={true}
						      transitionAppearTimeout={500}
						      transitionEnter={false}
						      transitionLeave={false}>
						      {this.state.sandwiches ? <Sandwiches/> : null}
						   	</ReactCSSTransitionGroup>
						   	<ReactCSSTransitionGroup
						      transitionName="example"
						      transitionAppear={true}
						      transitionAppearTimeout={500}
						      transitionEnter={false}
						      transitionLeave={false}>
						      {this.state.baskets ? <Basket/> : null}
						   	</ReactCSSTransitionGroup>
						    <ReactCSSTransitionGroup
						      transitionName="example"
						      transitionAppear={true}
						      transitionAppearTimeout={500}
						      transitionEnter={false}
						      transitionLeave={false}>
						      {this.state.drinks ? <Drinks/> : null}
						   	</ReactCSSTransitionGroup>
						   	</div>
						</div>

						<Scroll type="class" element="Location">
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
export default Menu;