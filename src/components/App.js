import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';

class App extends React.Component {
	state = {
		fishes: {},
		order: {}
	};
	addFish = fish => {
		// 1. take a copy of the exisint state
		const fishes = { ...this.state.fished };
		// 2. add our new fish to that fishes variable
		fishes[`fish${Date.now()}`] = fish;
		// 3. set the new fishes object to stateless
		this.setState({
			fishes: fishes
		});
	};
	render() {
		return (
			<React.Fragment>
				<div className="catch-of-the-day">
					<div className="menu">
						<Header tagline="Fresh Seafood Market" />
					</div>
					<Order />
					<Inventory addFish={this.addFish} />
				</div>
			</React.Fragment>
		);
	}
}

export default App;
