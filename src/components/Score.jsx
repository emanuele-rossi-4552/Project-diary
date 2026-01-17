import { useAppData } from '../data/context/AppDataContext';
import '../CSS/Score.css';

function Score() {
	const { activities } = useAppData();

	let p = 0;
	let d = 0;
	let s = 0;
	let w = 0;

	activities.forEach(activity => {
		if (activity.stato === 'progres')
			p += 1;
		else if (activity.stato === 'death')
			d += 1;
		else if (activity.stato === 'done')
			s += 1;
		else if (activity.stato === 'ready')
			w += 1;     
		});

	return (
		<div className="status-bar">
			<div className="status-bar__content">

				<div className="status-item is-progress">
					<span className="status-item_label">In corso:</span>
					<span className="status-item_value is-progress">{p}</span>
				</div>

				<div className="status-item is-ready">
					<span className="status-item_label">Programmate:</span>
					<span className="status-item_value is-ready">{w}</span>
				</div>

				<div className="status-item is-done">
					<span className="status-item_label">Completate:</span>
					<span className="status-item_value is-done">{s}</span>
				</div>

				<div className="status-item is-death">
					<span className="status-item_label">Abbandonata:</span>
					<span className="status-item_value is-death">{d}</span>
				</div>

			</div>
		</div>
	);
}
export default Score;