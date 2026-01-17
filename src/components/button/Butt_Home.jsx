import { useNavigate } from 'react-router-dom';
import '../../CSS/Butt_Home.css';

function Butt_Home({ label, variant, to, state }) {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(to);
	};

	return (
		<div className="home-card">
			<button
				className={`button-base home-button variant-${variant}`}
				onClick={handleClick}
			>
				<h2>{label}</h2>
			</button>
		</div>
	);
}

export default Butt_Home;