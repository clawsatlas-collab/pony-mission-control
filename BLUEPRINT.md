# Mission Control v2: Technical Blueprint

## Stack
- **Frontend**: Single-page HTML/Tailwind CSS/Alpine.js (Zero-build, high performance).
- **Theme**: Minimalist Dark (OLED Black #000, Slate-900 accents).
- **Typography**: Inter / JetBrains Mono.

## Component Breakdown (Tasks for Pony)
1. **Layout & Shell**: The core responsive sidebar and dark-mode glassmorphism containers.
2. **Enterprise Kanban**: Drag-and-drop-ready UI for "Pipeline" tracking.
3. **Model Intelligence Hub**: Status grid for Flash, Pro, Opus, Codex, and Grunts.
4. **Financial Command**: Daily/Monthly charts + modal for query-level drill-down.
5. **Task Tree View**: Nested progress steps with status icons.
6. **Sports Ticker**: Live score widget for current ball games.
7. **Mock Data Engine**: A JS-based simulation of your session data to make the UI live immediately.

## Directory Structure
- `index.html` (Shell)
- `js/app.js` (State management)
- `css/style.css` (Custom minimalist overrides)
