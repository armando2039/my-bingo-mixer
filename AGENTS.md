# AI Coding Agent Instructions

This repository is a small React + TypeScript + Vite application for an in-person bingo mixer game.

## Key points for AI agents

- Use `npm install` to install dependencies.
- Use `npm run dev` to start the local Vite development server.
- Use `npm run build` to build production assets.
- Use `npm run lint` to verify ESLint rules.
- Use `npm run test` to run Vitest unit tests.

## Project structure

- `src/App.tsx`: main app entry.
- `src/components/`: React components for game UI.
- `src/hooks/useBingoGame.ts`: core game state and behavior.
- `src/utils/bingoLogic.ts`: bingo board generation and win detection logic.
- `src/test/setup.ts`: Vitest jsdom test setup.
- `vite.config.ts`: Vite config including React and Tailwind CSS plugin.

## Important implementation details

- The app is a purely frontend React application.
- Tailwind CSS v4 is configured via `@tailwindcss/vite`.
- The build uses `tsc -b && vite build`.
- Tests run in `jsdom` and use `vitest`.
- `vite.config.ts` sets a GitHub Pages compatible `base` path when `VITE_REPO_NAME` is present.

## Behavior guidance for agents

- Prefer small, focused changes instead of broad rewrites.
- Keep UI and logic changes aligned with existing app patterns.
- Link to existing docs rather than duplicating them when possible.
- Do not modify workshop content unless explicitly asked.

## Useful documentation

- [README.md](README.md) for project overview and setup.
- [workshop/GUIDE.md](workshop/GUIDE.md) for lab-style walkthroughs and feature context.
