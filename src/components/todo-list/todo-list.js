import TodoListItem from "../todo-list-item";
import "./todo-list.css";

const TodoList = ({ todos, onItemRemoved }) => {
	const todoItems = todos.map((item) => {
		const { id, ...itemProps } = item;

		return (
			<li key={id} className="list-group-item">
				<TodoListItem
					{...itemProps}
					onItemRemoved={() => onItemRemoved(id)}
				/>
			</li>
		);
	});

	return <ul className="list-group todo-list">{todoItems}</ul>;
};

export default TodoList;
