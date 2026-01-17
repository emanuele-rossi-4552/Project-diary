import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppDataProvider } from './data/context/AppDataContext.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<AppDataProvider>
			<App />
		</AppDataProvider>
	</StrictMode>
)
