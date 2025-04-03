# Session Manager

Session Manager is a Vite-based React application built with TypeScript, Tailwind CSS, and Redux Toolkit. It allows users to manage sessions (tabs) with persistent state stored in localStorage and features an open tabs header for quick navigation.

## Prerequisites

- **Node.js:** v21.1.0 or later
- **Git**

## Getting Started

1. **Clone the repository:**

    ```bash
    git clone https://github.com/sVarlog/TabSessions.git
    cd session-manager
    Install dependencies:
    ```

    1.1. Instalation:

    ```bash
    npm install
    ```

2. **Run the development server:**

    ```bash
    npm run dev
    ```

3. **Open your browser:**

    Navigate to [http://localhost:5173](http://localhost:5173) (or the port specified by Vite) to view the application.

## Project Structure

The project structure provides an overview of the application's file organization, helping developers quickly locate and understand key components and configurations.

```
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
├── .gitignore
├── .prettierrc
├── eslint.config.js
├── README.md
├── src/
│   ├── assets/                    # Optional assets folder (e.g. images)
│   ├── components/
│   │   └── OpenTabsBar.tsx        # Header for open tabs
│   ├── pages/
│   │   ├── Dashboard.tsx          # Dashboard to manage sessions
│   │   └── SessionView.tsx        # View for individual session
│   ├── store/
│   │   ├── index.ts               # Redux store setup (configureStore, rootReducer)
│   │   └── slices/
│   │       └── sessionSlice.ts    # Redux Toolkit slice for session state
│   ├── App.tsx                    # Root component with routes and layout
│   ├── main.tsx                   # App entry point
│   └── vite-env.d.ts              # Vite TypeScript env types
```

## Available Scripts

- `npm run dev` - Starts the development server.
- `npm run build` - Bundles the app into static files for production.
- `npm run preview` - Locally preview the production build.
