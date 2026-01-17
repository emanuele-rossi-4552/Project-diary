import { useState } from "react";
import { useParams } from "react-router-dom";
import { useAppData } from "../../data/context/AppDataContext";
import { useEffect } from "react";
import Button from "../../components/button/Butt_Menu.jsx";
import Commento from "../../components/button/Butt_commento.jsx";
import ChangeStateModal from "../../components/ChangeStateModal.jsx";
import ConfirmDeleteModal from "../../components/button/ConfirmDeleteModal.jsx";
import "../../CSS/SingleActivityPage.css";

function SingleActivityPage(){
	const { activities,
			comments,
			loadComments,
			removeComment 
		} = useAppData();

	const { id } = useParams();
	const activitiRecord = activities.find(el => el.id === id)

	const [showModal, setShowModal] = useState(false);

	const [selectedCommentId, setSelectedCommentId] = useState(null);
	const [showConfirm, setShowConfirm] = useState(false);


	useEffect(() => {
		if(id){
			loadComments(id);
		}
	}, [id]);

	return (
		<div className="activity-page">
			<div className="activity-header">
				<div className="activity-actions">
					<Button to="/" label="Home" variant="Standard" size="small" />
					<Button to={`/ActivityPage/${activitiRecord.stato}`} label="Indietro" variant="Standard" size="small" />
					<Button to={`/AddThoughtPage/${activitiRecord.id}`} label="Commenta" variant="Standard" size="small" />
					<Button onClick={() => setShowModal(true)} label="Cambia Stato" variant="Standard" size="small" />
				</div>

				{showModal && (
					<ChangeStateModal
						activity={activitiRecord}
						oldState={activitiRecord.stato}
						onClose={() => setShowModal(false)}
					/>
				)}

				<div className="activity-name">
					<span>Nome:</span>
					<p>{activitiRecord.nome}</p>
				</div>
				<div className="activity-description">
					<span>Descrizione:</span>
					<p>{activitiRecord.descrizione}</p>
				</div>

				<h2 className="comments-title">Commenti</h2>
			</div>

			<div className="comments-content">
				{comments
					.sort((a, b) => b.createdAt - a.createdAt)
					.map(comment => (
						<Commento
							key={comment.id}
							comment={comment}
							isSelected={selectedCommentId === comment.id}
							onSelect={() => setSelectedCommentId(comment.id)}
							onDeselect={() => setSelectedCommentId(null)}
							onAskDelete={() => setShowConfirm(true)}
						/>
					))
				}
			</div>

			{showConfirm && (
				<ConfirmDeleteModal
					title="Eliminare il commento?"
					onConfirm={() => {
						removeComment(selectedCommentId);
						setShowConfirm(false);
						setSelectedCommentId(null);
					}}
					onCancel={() => {
						setShowConfirm(false);
						setSelectedCommentId(null);
					}}
				/>
			)}
		</div>
	);
}

export default SingleActivityPage;