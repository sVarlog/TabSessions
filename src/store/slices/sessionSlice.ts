import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Session {
	id: string;
	name: string;
	isOpen: boolean;
}

interface SessionsState {
	sessions: Session[];
}

const loadSessionsFromStorage = (): Session[] => {
	const data = localStorage.getItem('mySessions');

	return data ? JSON.parse(data) : [];
};

const initialState: SessionsState = {
	sessions: loadSessionsFromStorage(),
};

const sessionsSlice = createSlice({
	name: 'sessions',
	initialState,
	reducers: {
		addSession(state) {
			const newSession: Session = {
				id: crypto.randomUUID(),
				name: `Session ${new Date().toLocaleTimeString()}`,
				isOpen: false,
			};

			state.sessions.push(newSession);
			localStorage.setItem('mySessions', JSON.stringify(state.sessions));
		},
		openSession(state, action: PayloadAction<string>) {
			const session = state.sessions.find((s) => s.id === action.payload);

			if (session) {
				session.isOpen = true;
				localStorage.setItem('mySessions', JSON.stringify(state.sessions));
			}
		},
		closeSession(state, action: PayloadAction<string>) {
			const session = state.sessions.find((s) => s.id === action.payload);

			if (session) {
				session.isOpen = false;
				localStorage.setItem('mySessions', JSON.stringify(state.sessions));
			}
		},
		removeSession(state, action: PayloadAction<string>) {
			state.sessions = state.sessions.filter((s) => s.id !== action.payload);
			localStorage.setItem('mySessions', JSON.stringify(state.sessions));
		},
	},
});

export const { addSession, openSession, closeSession, removeSession } = sessionsSlice.actions;
export default sessionsSlice.reducer;
