import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppData } from "../../data/context/AppDataContext";
import Butt_Menu from "../../components/button/Butt_Menu.jsx";
import "../../CSS/AddActivityPage.css";

function AddThoughtPage() {
	const { id } = useParams();
	const navigate = useNavigate();
	const { createComment } = useAppData();

	const [text, setText] = useState("");
	const [saving, setSaving] = useState(false);

	async function handleSave() {
		if (!text.trim() || saving) return;

		setSaving(true);
		await createComment(id, text);
		navigate(-1);
	}

	return (
	<div>
		<h1>Aggiungi commento</h1>
		<textarea
			value={text}
			onChange={e => setText(e.target.value)}
			placeholder="Scrivi il tuo commento..."
		/>
		<div className="form-actions">
			<Butt_Menu
				to={`/SingleActivityPage/${id}`}
				label="Indietro"
				variant="red"
				size="medium"
			/>
			<Butt_Menu
				label="Salva"
				variant="green"
				size="medium"
				onClick={handleSave}
			/>
		</div>
	</div>
	);
}

export default AddThoughtPage;
