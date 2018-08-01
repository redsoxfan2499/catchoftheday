import React from 'react';
import { getFunName } from './../helpers';

class StorePicker extends React.Component {
	myInput = React.createRef();
	goToStore = event => {
		// 1. stop form from submitting
		event.preventDefault();
		// 2. get the text from the input
		const storeName = this.myInput.value.defaultValue;
		// 3. chang ethe page to /store/what they entered
		this.props.history.push(`/store/${storeName}`);
	};
	render() {
		return (
			<React.Fragment>
				<form action="" className="store-selector" onSubmit={this.goToStore}>
					<h2>Please enter a store</h2>
					<input
						type="text"
						ref={this.myInput}
						required
						placeholder="Store Name"
						defaultValue={getFunName()}
					/>
					<button type="submit">Vist Store</button>
				</form>
			</React.Fragment>
		);
	}
}

export default StorePicker;
