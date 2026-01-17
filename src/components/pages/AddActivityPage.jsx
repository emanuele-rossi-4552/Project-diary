import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppData } from "../../data/context/AppDataContext";
import Butt_Menu from "../button/Butt_Menu";
import "../../CSS/AddActivityPage.css";

function NewActivityPage() {
	const navigate = useNavigate();
	const { createActivity } = useAppData();

	const [nome, setNome] = useState("");
	const [descrizione, setDescrizione] = useState("");
	const [stato, setStato] = useState("ready");

	async function handleSubmit(e) {
		e.preventDefault();
		if (!nome.trim()) return;
		await createActivity({
			nome,
			descrizione,
			stato
		});
		navigate("/");
	}

	return (
		<div className="add-activity-page-container">
			<form className="add-activity" onSubmit={handleSubmit}>
				<h1>Nuova Attività</h1>
				<label>
					Nome:
					<input
						type="text"
						value={nome}
						onChange={e => setNome(e.target.value)}
						required
					/>
				</label>

				<label>
					Descrizione:
					<textarea
						value={descrizione}
						onChange={e => setDescrizione(e.target.value)}
					/>
				</label>

				<label>
					Stato
					<select value={stato} onChange={e => setStato(e.target.value)}>
						<option value="progres">In corso</option>
						<option value="ready">Programmata</option>
					</select>
				</label>

				<div className="form-actions">
					<Butt_Menu
						to="/"
						label="Home"
						variant="red"
						size="medium"
					/>
					<Butt_Menu
						label="Salva"
						variant="green"
						size="medium"
						onClick={handleSubmit}
					/>
				</div>
			</form>
		</div>
	);
}
export default NewActivityPage;
