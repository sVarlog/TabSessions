import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import SessionView from './pages/SessionView';
import OpenTabsBar from './components/OpenTabsBar';

const App = () => {
	return (
		<div className="min-h-screen bg-gray-100">
			<OpenTabsBar />

			<Routes>
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/session/:id" element={<SessionView />} />
				<Route path="*" element={<Navigate to="/dashboard" replace />} />
			</Routes>
		</div>
	);
};

export default App;
