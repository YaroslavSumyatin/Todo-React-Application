import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import ItemAddForm from "../item-add-form";

import "./app.css";
import { Component } from "react";

export default class App extends Component {
	maxId = 100;

	state = {
		data: [
			{ label: "Drink Coffee", important: false, id: 1 },
			{ label: "Suit Up", important: false, id: 2 },
			{ label: "Learn React", important: true, id: 3 },
		],
	};

	removeItem = (id) => {
		this.setState(({ data }) => {
			return {
				data: data.filter((el) => el.id !== id),
			};
		});
	};

	addItem = (text) => {
		const newItem = { label: text, important: false, id: this.maxId++ };
		this.setState(({ data }) => {
			return {
				data: [...data, newItem],
			};
		});
	};

	render() {
		const { data } = this.state;
		return (
			<div className="todo-app">
				<AppHeader todo={1} done={3} />
				<div className="top-panel d-flex">
					<SearchPanel />
					<ItemStatusFilter />
				</div>
				<TodoList todos={data} onItemRemoved={this.removeItem} />
				<ItemAddForm onItemAdded={this.addItem} />
			</div>
		);
	}
}
