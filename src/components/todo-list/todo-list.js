import TodoListItem from "../todo-list-item";
import "./todo-list.css";

const TodoList = ({todos}) => {
	const todoItems = todos.map((item) => {
		const {id, ...itemProps} = item;

		return (
			<li key={id} className="list-group-item">
				<TodoListItem {...itemProps}/>
			</li>
		);
	});

	return (
		<ul className="list-group todo-list">
			{todoItems}
		</ul>
	);
};

export default TodoList;