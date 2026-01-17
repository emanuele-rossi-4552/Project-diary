import { useAppData } from "../../data/context/AppDataContext";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import "../../CSS/ActivityCard_Page.css";

function ActivityCard ({id}){
	const { activities, removeActivity } = useAppData();
	const navigate = useNavigate();
	const [showConfirm, setShowConfirm] = useState(false);

	const activity = activities.find(a => a.id === id);

	const passId = () => {
		navigate(`/SingleActivityPage/${activity.id}`);
	};

	return (
		<div className="activity-card">
			<button
			className="activity-card-button"
			onClick={passId}
			>
				<div className="row-container">
					<div className="activity-row">
						<p className="label">Attività:</p>
						<p className="value name">{activity.nome}</p>
					</div>
					<div className="activity-row">
						<p className="label">Descrizione:</p>
						<p className="value description">{activity.descrizione}</p>
					</div>
				</div>
			</button>


			<button className= "delete-btn"
				onClick={() => setShowConfirm(true)}
				type="button"
			>
				Elimina
			</button>

			{showConfirm && (
				<ConfirmDeleteModal
				title={`Eliminare l'attività "${activity.nome}"?`}
				onConfirm={() => {
					removeActivity(activity.id);
					setShowConfirm(false);
				}}
				onCancel={() => setShowConfirm(false)}
				/>
			)}
		</div>
	);
}
export default ActivityCard;