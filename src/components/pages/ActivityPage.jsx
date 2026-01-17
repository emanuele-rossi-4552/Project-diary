import { useParams } from "react-router-dom";
import { useAppData } from "../../data/context/AppDataContext";
import Butt_ActivityCard from "../button/Butt_ActivityCard.jsx";
import Butt_Menu from "../button/Butt_Menu.jsx";
import "../../CSS/ActivityCard_page.css";

function ActivityPage() {
	const { activities } = useAppData();
	const { statop } = useParams();

	let title;

	if (statop === 'progres') {
		title = 'In Corso';
	} else if (statop === 'ready') { 
		title = 'Programmate';
	} else if (statop === 'done'){
		title = 'Completate';
	} else if (statop === 'death'){
		title = 'Abbandonate';
	}

	return (
		<div className="activity-page-container">
			<h1>{title}</h1>
			<div className="activity-page">
				{activities
					.filter(el => el.stato === statop)
					.map(el => (<Butt_ActivityCard key={el.id} id={el.id} />))
				}
			</div>
			<div className="activity-page-home">
				<Butt_Menu
					to="/"
					label="Home"
					variant="red"
					size="full"
				/>
			</div>
		</div>
	);
}

export default ActivityPage;
