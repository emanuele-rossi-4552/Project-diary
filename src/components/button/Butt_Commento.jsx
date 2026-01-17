import "../../CSS/Butt_Commento.css";

function Commento({ comment, isSelected, onSelect, onAskDelete }) {
	let pressTimer;

	const handleMouseDown = () => {
		pressTimer = setTimeout(onSelect, 600);
	};

	const handleMouseUp = () => clearTimeout(pressTimer);

	return (
		<div className={`comment-card ${isSelected ? "selected" : ""}`}>
			<button
				onDoubleClick={onSelect}
				onMouseDown={handleMouseDown}
				onMouseUp={handleMouseUp}
				onTouchStart={handleMouseDown}
				onTouchEnd={handleMouseUp}
			>
				<div>
					<p>Data: {new Date(comment.createdAt).toLocaleString()}</p>
				</div>
				<div>
					<p>{comment.text}</p>
				</div>
			</button>

			{isSelected && (
				<button
				className="delete-btn"
				onClick={onAskDelete}
				type="button"
				>
					Elimina
				</button>
			)}
		</div>
	);
}


export default Commento;
