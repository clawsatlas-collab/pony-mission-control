# Orbital Command v3: The Executive Build

## Phase 1: Aesthetic & Identity
- **Name**: ORBITAL COMMAND (Rename from Pony Mission Control).
- **Vibe**: "Executive Enterprise" — move away from glowing cyberpunk to a clean, sophisticated, high-contrast dark UI. 
- **Palette**: Deep slate/charcoal backgrounds (#0a0a0b), stark white/light gray typography, subtle indigo/gold accents for "Executive" feel. No more heavy neon glows.
- **Typography**: Inter (UI) and JetBrains Mono (Data).

## Phase 2: Functional Core (Backend Bridge)
- **Query Tracker**: Update `app.js` to read from a local `data/stats.json` which I will update periodically via heartbeats.
- **Cognition Fleet**: Replace placeholder models with our actual fleet (Gemini 3 Pro, Gemini 3 Flash, Claude 4.6 Opus, Codex 5.2, Llama 3.3 70B, etc.).

## Phase 3: The Executive Kanban (Reference: Photo)
- **New Page**: `kanban.html`.
- **Sidebar**: Left-aligned "Agent List" with role tags (LEAD, SPC, INT) for assignment.
- **Live Feed**: Right-aligned vertical feed showing agent events and document updates.
- **Main View**: 5-column Mission Queue (Inbox, Assigned, In Progress, Review, Done).
- **Functionality**: Minimalist cards, tags for task type, and clear assignee icons.

## Phase 4: Global Sports Intelligence
- **Module**: Replace Detroit-only ticker with a dedicated "Live Games" dashboard/section.
- **Data**: Fetch broader NBA/MLB/NFL scores (General ball games, not just local).

## Phase 5: Implementation (The Pony Task)
1. Redesign `index.html` (Home/Dashboard) with the new Executive aesthetic.
2. Build `kanban.html` following the provided screenshot's layout/features exactly.
3. Establish a shared `app.js` for state management.
