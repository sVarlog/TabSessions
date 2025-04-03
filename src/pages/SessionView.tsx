import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/index';
import { closeSession } from '../store/slices/sessionSlice';

const SessionView = () => {
	const { id } = useParams<{ id: string }>();
	const session = useSelector((state: RootState) => state.sessions.sessions.find((s) => s.id === id));
	const dispatch = useDispatch();

	const handleClose = () => {
		if (id) {
			dispatch(closeSession(id));
		}
	};

	if (!session) {
		return (
			<div className="p-4">
				<h2 className="text-xl font-bold">Session not found</h2>

				<Link to="/dashboard" className="text-blue-500 underline">
					Back to Dashboard
				</Link>
			</div>
		);
	}

	return (
		<div className="p-4">
			<h2 className="mb-4 text-2xl font-bold">{session.name}</h2>

			<p className="mb-2">Session ID: {session.id}</p>

			<button onClick={handleClose} className="cursor-pointer rounded bg-yellow-500 px-2 py-1 text-white">
				Close This Tab
			</button>

			<Link to="/dashboard" className="mt-4 block text-blue-500 underline">
				Back to Dashboard
			</Link>
		</div>
	);
};

export default SessionView;
