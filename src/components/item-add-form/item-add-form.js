import { Component } from "react";
import "./item-add-form.css";

export default class ItemAddForm extends Component {
	state = {
		inputText: "",
	};

	onChangeInput = (e) => {
		this.setState({
			inputText: e.target.value,
		});
	};

	onSubmitForm = (e) => {
		e.preventDefault();
		this.props.onAddItem(this.state.inputText);
		this.setState({
			inputText: "",
		});
	};

	render() {
		return (
			<form className="item-add-form d-flex" onSubmit={this.onSubmitForm}>
				<input
					type="text"
					className="form-control"
					onChange={this.onChangeInput}
					placeholder="What needs to be done?"
					value={this.state.inputText}
				/>
				<button className="btn btn-outline-secondary">Add Item</button>
			</form>
		);
	}
}
