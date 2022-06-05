import "./item-add-form.css";

const ItemAddForm = ({ onItemAdded }) => {
	const text = "Some Text";
	return (
		<div className="item-add-form">
			<button
				type="button"
				className="btn btn-outline-secondary"
				onClick={() => onItemAdded(text)}
			>
				Add Item
			</button>
		</div>
	);
};

export default ItemAddForm;
