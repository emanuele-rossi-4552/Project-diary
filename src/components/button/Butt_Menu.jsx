import { useNavigate } from "react-router-dom";
import "../../CSS/Butt_Menu.css";

function Butt_Menu({ to, onClick, label, variant = "default", size = "medium"}) {
	
	const navigate = useNavigate();

	const handleClick = () => {
		if (onClick) {
			onClick();
			return;
		}
		if (to) {
			navigate(to);
		}
	};

	return (
		<div className="button-wrapper">
			<button
				className={`button-base ${variant} ${size}`}
				onClick={handleClick}
			>
				<h2>{label}</h2>
			</button>
		</div>
	);
}
export default Butt_Menu;
