import "./item-add-form.css";

const ItemAddForm = ({ onAddItem }) => {
	const text = "Some Text";
	return (
		<div className="item-add-form">
			<button
				type="button"
				className="btn btn-outline-secondary"
				onClick={() => onAddItem(text)}
			>
				Add Item
			</button>
		</div>
	);
};

export default ItemAddForm;
