import { useState } from "react";
import { useAppData } from "../data/context/AppDataContext";
import { useNavigate } from "react-router-dom";
import "../CSS/ChangeStateModal.css";

const STATES = [
	{ value: "progres", label: "In corso" },
	{ value: "ready", label: "Programmata" },
	{ value: "done", label: "Completata" },
	{ value: "death", label: "Abbandonata" }
];

function ChangeStateModal({ activity, oldState, onClose }) {
	const { updateActivityState } = useAppData();
	const [selected, setSelected] = useState(activity.stato);
	const navigate = useNavigate();

    async function handleSave() {
		await updateActivityState(activity.id, selected);
		onClose();
		navigate(`/ActivityPage/${oldState}`, { replace: true });
    }
	return (
		<div className="modal-overlay">
			<div className="modal-box">
				<h2>Seleziona stato</h2>
			
				<div className="state-grid">
					{STATES.map(s => (
						<label key={s.value} className="radio-row">
							<input
								type="radio"
								name="state"
								value={s.value}
								checked={selected === s.value}
								onChange={() => setSelected(s.value)}
							/>
							{s.label}
						</label>
					))}
				</div>

				<div className="modal-actions">
					<button onClick={onClose}>Indietro</button>
					<button onClick={handleSave}>Salva</button>
				</div>
			</div>
		</div>
	);
}
export default ChangeStateModal;
