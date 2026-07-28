# zaatot Frontend

A high-performance, type-safe messaging and management dashboard built with the modern Bun + Vite ecosystem.

## 🚀 Tech Stack

- **Runtime**: [Bun](https://bun.sh/)
- **Framework**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) & [Mantine 9](https://mantine.dev/)
- **Routing**: [TanStack Router](https://tanstack.com/router)
- **Data Fetching**: [TanStack Query v5](https://tanstack.com/query)
- **Backend Sync**: [Eden Treaty](https://elysiajs.com/eden/treaty) (for type-safe Elysia interaction)

## 📋 Prerequisites

- **Bun**: Ensure you have [Bun](https://bun.sh/) installed (v1.1+ recommended).
- **Backend Service**: The frontend expects a zaatot backend running at `http://localhost:3000`.

## ⚙️ Environment Configuration

Currently, the API endpoint is configured in `src/api/index.ts`. Ensure your backend is reachable at:
`http://localhost:3000`

## 🛠️ Installation & Setup

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd zaatot-frontend
   ```

2. **Install dependencies**:

   ```bash
   bun install
   ```

3. **Start the development server**:

   ```bash
   bun dev
   ```

4. **Build for production**:
   ```bash
   bun build
   ```

## 📜 Available Scripts

| Script          | Description                                                    |
| :-------------- | :------------------------------------------------------------- |
| `bun dev`       | Starts the Vite development server.                            |
| `bun build`     | Compiles TypeScript and builds the production bundle.          |
| `bun preview`   | Previews the local production build.                           |
| `bun typecheck` | Runs the TypeScript compiler in `noEmit` mode to verify types. |
| `bun eden`      | Fetches the latest Eden Treaty types from the backend.         |

## 🏗️ Project Structure

- `src/api`: Eden Treaty configuration and type-safe API calls.
- `src/component`: Reusable UI components (Forms, Views, Layouts).
- `src/routes`: TanStack Router definitions and route logic.
- `src/lib`: Utilities, Enums, and custom hooks.
- `src/assets`: Static assets and global styles.

---

**Developed with ❤️ by the zaatot Team**
