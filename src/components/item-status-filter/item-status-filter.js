import { Component } from "react";
import "./item-status-filter.css";

export default class ItemStatusFilter extends Component {
	setButtonClassNames = (isSelected) => {
		let classNames = "btn";
		if (isSelected) {
			return (classNames += " btn-info");
		}
		return (classNames += " btn-outline-secondary");
	};

	render() {
		const { filter, onFilter } = this.props;
		return (
			<div className="btn-group">
				<button
					type="button"
					className={this.setButtonClassNames(filter.all)}
					onClick={() => onFilter("all")}
				>
					All
				</button>
				<button
					type="button"
					className={this.setButtonClassNames(filter.active)}
					onClick={() => onFilter("active")}
				>
					Active
				</button>
				<button
					type="button"
					className={this.setButtonClassNames(filter.done)}
					onClick={() => onFilter("done")}
				>
					Done
				</button>
			</div>
		);
	}
}
