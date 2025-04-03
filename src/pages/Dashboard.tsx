import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/index';
import { addSession, openSession, closeSession, removeSession } from '../store/slices/sessionSlice';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
	const sessions = useSelector((state: RootState) => state.sessions.sessions);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleCreate = () => {
		dispatch(addSession());
	};

	const handleOpen = (id: string) => {
		dispatch(openSession(id));
		navigate(`/session/${id}`);
	};

	const handleClose = (id: string) => {
		dispatch(closeSession(id));
	};

	const handleRemove = (id: string) => {
		dispatch(removeSession(id));
	};

	return (
		<div className="p-4">
			<h1 className="mb-4 text-2xl font-bold">Dashboard</h1>

			<button onClick={handleCreate} className="cursor-pointer rounded bg-blue-500 px-2 py-1 text-white">
				Create New Session
			</button>

			<h2 className="mt-4 mb-2 text-xl">Sessions List:</h2>

			<ul>
				{sessions.map((session) => (
					<li key={session.id} className="mb-2 rounded border p-2">
						<div className="flex items-center justify-between">
							<span>
								{session.name} (ID: {session.id})
							</span>

							<div className="space-x-2">
								{session.isOpen ? (
									<>
										<button
											onClick={() => handleClose(session.id)}
											className="cursor-pointer rounded bg-yellow-500 px-2 py-1 text-white"
										>
											Close
										</button>

										<button
											onClick={() => handleRemove(session.id)}
											className="cursor-pointer rounded bg-red-500 px-2 py-1 text-white"
										>
											Remove
										</button>

										<Link
											to={`/session/${session.id}`}
											className="rounded bg-green-500 px-2 py-1 text-white"
										>
											Go to Tab
										</Link>
									</>
								) : (
									<>
										<button
											onClick={() => handleOpen(session.id)}
											className="cursor-pointer rounded bg-green-500 px-2 py-1 text-white"
										>
											Open
										</button>

										<button
											onClick={() => handleRemove(session.id)}
											className="cursor-pointer rounded bg-red-500 px-2 py-1 text-white"
										>
											Remove
										</button>
									</>
								)}
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Dashboard;
