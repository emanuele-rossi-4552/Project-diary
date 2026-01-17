import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import ActivityPage from './components/pages/ActivityPage';
import AddActivityPage from './components/pages/AddActivityPage';
import SingleActivityPage from './components/pages/SingleActivityPage';
import AddThoughtPage from './components/pages/AddThoughtPage';
import './App.css';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/ActivityPage/:statop" element={<ActivityPage />} />
				<Route path="/NewActivity" element={<AddActivityPage />} />
				<Route path="/SingleActivityPage/:id" element={<SingleActivityPage />} />
				<Route path="/AddThoughtPage/:id" element={<AddThoughtPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;