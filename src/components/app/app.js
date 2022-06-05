import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import ItemAddForm from "../item-add-form";

import "./app.css";
import { Component } from "react";

export default class App extends Component {
	maxId = 0;

	state = {
		data: [
			this.createTodoItem("Drink Coffee"),
			this.createTodoItem("Suit Up"),
			this.createTodoItem("Build an App"),
		],
	};

	createTodoItem(label) {
		return {
			label,
			important: false,
			done: false,
			id: this.maxId++,
		};
	}

	removeItem = (id) => {
		this.setState(({ data }) => {
			return {
				data: data.filter((el) => el.id !== id),
			};
		});
	};

	addItem = (text) => {
		this.setState(({ data }) => {
			return {
				data: [...data, this.createTodoItem(text)],
			};
		});
	};

	toggleImportant = (id) => {
		this.toggleProperty(id, "important");
	};

	toggleDone = (id) => {
		this.toggleProperty(id, "done");
	};

	toggleProperty(id, property) {
		this.setState(({ data }) => {
			const itemIndex = data.findIndex((el) => el.id === id);
			const item = data[itemIndex];
			const newItem = { ...item, [property]: !item[property] };
			return {
				data: [
					...data.slice(0, itemIndex),
					newItem,
					...data.slice(itemIndex + 1),
				],
			};
		});
	}

	render() {
		const { data } = this.state;
		const doneItemsCount = data.filter((el) => el.done).length;
		const todoItemsCount = data.length - doneItemsCount;
		return (
			<div className="todo-app">
				<AppHeader todo={todoItemsCount} done={doneItemsCount} />
				<div className="top-panel d-flex">
					<SearchPanel />
					<ItemStatusFilter />
				</div>
				<TodoList
					todos={data}
					onRemoveItem={this.removeItem}
					onToggleImportant={this.toggleImportant}
					onToggleDone={this.toggleDone}
				/>
				<ItemAddForm onAddItem={this.addItem} />
			</div>
		);
	}
}
