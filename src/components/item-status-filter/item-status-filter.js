import { Component } from "react";
import "./item-status-filter.css";

export default class ItemStatusFilter extends Component {
	buttons = [
		{ name: "all", label: "All" },
		{ name: "active", label: "Active" },
		{ name: "done", label: "Done" },
	];

	setButtonClassNames = (isSelected) => {
		return "btn " + (isSelected ? "btn-info" : "btn-outline-secondary");
	};

	render() {
		const { filter, onFilter } = this.props;

		const buttons = this.buttons.map(({ name, label }) => {
			const activeClass = filter[name]
				? "btn-info"
				: "btn-outline-secondary";
			return (
				<button
					key={name}
					type="button"
					className={`btn ${activeClass}`}
					onClick={() => onFilter(name)}
				>
					{label}
				</button>
			);
		});

		return <div className="btn-group">{buttons}</div>;
	}
}
