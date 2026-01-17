import { createPortal } from "react-dom";
import "../../CSS/ConfirmDeleteModal.css";

function ConfirmDeleteModal({ title, onConfirm, onCancel }) {
	return createPortal(
		<div className="confirm-overlay">
			<div className="confirm-box">
				<h2>{title}</h2>
				<div className="confirm-actions">
					<button className="button-base red large" onClick={onCancel}>
						No
					</button>
					<button className="button-base green large" onClick={onConfirm}>
						Sì
					</button>
				</div>
			</div>
		</div>,
		document.body
	);
}
export default ConfirmDeleteModal