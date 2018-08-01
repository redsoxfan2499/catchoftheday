import React from 'react';

class AddFishForm extends React.Component {
	nameRef = React.createRef();
	priceRef = React.createRef();
	statusRef = React.createRef();
	descRef = React.createRef();
	imageRef = React.createRef();
	createFish = event => {
		// 1. stop form from submitting
		event.preventDefault();
		// 2. get the text from the input
		const fish = {
			name: this.nameRef.value.value,
			price: parseFloat(this.priceRef.value.value),
			status: this.statusRef.value.value,
			desc: this.descRef.value.value,
			image: this.imageRef.value.value
		};
		// 3. chang ethe page to /store/what they entered
		this.props.addFish(fish);
		// 4. refresh form
		event.currentTarget.reset();
	};
	render() {
		return (
			<React.Fragment>
				<form className="fish-edit" onSubmit={this.createFish}>
					<input
						name="name"
						type="text"
						placeholder="Name"
						ref={this.nameRef}
					/>
					<input
						name="price"
						type="text"
						placeholder="Price"
						ref={this.priceRef}
					/>
					<select name="status" ref={this.statusRef}>
						<option value="available">Fresh!</option>
						<option value="unavailable">Sold Out!</option>
					</select>
					<textarea name="desc" placeholder="Desc" ref={this.descRef} />
					<input
						name="image"
						type="text"
						placeholder="Image"
						ref={this.imageRef}
					/>
					<button type="submit">+ Add Fish</button>
				</form>
			</React.Fragment>
		);
	}
}

export default AddFishForm;
