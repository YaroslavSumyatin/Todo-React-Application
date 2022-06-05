import { Component } from "react";
import "./search-panel.css";

export default class SearchPanel extends Component {
	state = { searchText: "" };

	onSearchItem = (e) => {
		const searchText = e.target.value;
		this.setState({ searchText });
		this.props.onSearchItem(searchText);
	};

	render() {
		return (
			<input
				type="text"
				className="form-control search-input"
				placeholder="Type to search..."
				onChange={this.onSearchItem}
				value={this.state.searchText}
			/>
		);
	}
}
