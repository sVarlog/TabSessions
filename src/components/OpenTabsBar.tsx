import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/index';
import { closeSession } from '../store/slices/sessionSlice';
import { Link, useMatch, useNavigate } from 'react-router-dom';
import clsx from 'clsx';

const OpenTabsBar = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const openSessions = useSelector((state: RootState) => state.sessions.sessions.filter((session) => session.isOpen));
	const match = useMatch('/session/:id');

	const handleClose = (id: string) => {
		dispatch(closeSession(id));

		if (match?.params?.id === id) {
			navigate('/dashboard');
		}
	};

	return (
		<div className="mb-2 flex h-16 items-center space-x-4 bg-white p-2 shadow">
			<div
				className={clsx(
					'flex h-full items-center space-x-2 rounded border px-4 py-2',
					!match?.params?.id ? 'bg-amber-50' : 'bg-white'
				)}
			>
				<Link to={'/dashboard'} className="text-blue-500 underline">
					Dashboard
				</Link>
			</div>

			{openSessions.map((session) => (
				<div
					key={session.id}
					className={clsx(
						'flex h-full items-center space-x-2 rounded border px-4 py-2 duration-200',
						match?.params?.id === session.id ? 'bg-amber-50' : 'bg-white'
					)}
				>
					<Link to={`/session/${session.id}`} className="text-blue-500 underline">
						{session.name}
					</Link>

					<button
						onClick={() => handleClose(session.id)}
						className="h-8 w-8 cursor-pointer rounded bg-red-500 px-2 py-1 text-white"
					>
						x
					</button>
				</div>
			))}
		</div>
	);
};

export default OpenTabsBar;
