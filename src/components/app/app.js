import { Component } from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import ItemAddForm from "../item-add-form";

import "./app.css";

export default class App extends Component {
	maxId = 0;

	state = {
		searchText: "",
		filter: { all: true, active: false, done: false },
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
			const item = data.find((el) => el.id === id);
			const newItem = { ...item, [property]: !item[property] };
			return {
				data: data.map((el) => (el.id === id ? newItem : el)),
			};
		});
	}

	doFilter = (filterName) => {
		this.setState(({ filter }) => {
			const newFilterState = {
				...filter,
			};
			Object.keys(newFilterState).map(
				(key) => (newFilterState[key] = false)
			);
			newFilterState[filterName] = true;
			return {
				filter: newFilterState,
			};
		});
	};

	doSearch = (searchText) => {
		this.setState({ searchText });
	};

	filterData() {
		const { data, filter, searchText } = this.state;
		const newData = this.searchByText(data, searchText);
		if (filter.all) {
			return newData;
		}
		return newData.filter((el) => el.done === filter.done);
	}

	searchByText(data, searchText) {
		if (!searchText.length) {
			return [...data];
		}
		const text = searchText.toLowerCase();
		return data.filter((el) => el.label.toLowerCase().includes(text));
	}

	render() {
		const { data, filter } = this.state;
		const filteredData = this.filterData();
		const doneItemsCount = data.filter((el) => el.done).length;
		const todoItemsCount = data.length - doneItemsCount;
		return (
			<div className="todo-app">
				<AppHeader todo={todoItemsCount} done={doneItemsCount} />
				<div className="top-panel d-flex">
					<SearchPanel onSearchItem={this.doSearch} />
					<ItemStatusFilter
						filter={filter}
						onFilter={this.doFilter}
					/>
				</div>
				<TodoList
					todos={filteredData}
					onRemoveItem={this.removeItem}
					onToggleImportant={this.toggleImportant}
					onToggleDone={this.toggleDone}
				/>
				<ItemAddForm onAddItem={this.addItem} />
			</div>
		);
	}
}
