import Butt_Home from '../button/Butt_Home.jsx';
import Score from '../Score.jsx';

/*
PER DEBUG PULSANTE PER SVUOTARE DB
import { clearAllStores } from '../../data/db.js';
*/

function Home() {
	return (
		<div>
			<Score />

			<div className="home-status-container">
				<Butt_Home
					label="IN CORSO"
					variant="progres"
					to="/ActivityPage/progres"
				/>

				<Butt_Home
					label="PROGRAMMATE"
					variant="ready"
					to="/ActivityPage/ready"
				/>

				<Butt_Home
					label="COMPLETATE"
					variant="done"
					to="/ActivityPage/done"
				/>

				<Butt_Home
					label="ABBANDONATE"
					variant="death"
					to="/ActivityPage/death"
				/>

				<Butt_Home
					label="Nuova Attività"
					variant="new"
					to="/NewActivity"
				/>

					{/* PER DEBUG PULSANTE PER SVUTARE DB
						<button
							className="home-debug-button"
							onClick={async () => {
							if (confirm('Svuotare il DB?')) {
								await clearAllStores();
								window.location.reload();
							}
							}}
						>
							SVUOTA DB (DEBUG)
						</button>
					*/}
					
			</div>
		</div>
	);
}

export default Home;
