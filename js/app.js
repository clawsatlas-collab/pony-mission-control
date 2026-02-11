// Orbital Command - Centralized State Management
const State = {
    user: "Atlas",
    timestamp: new Date().toLocaleString(),
    overnight_spend: 0.25,
    spend_cap: 3.00,
    
    models: [
        { name: "Gemini 3 Flash", status: "Active", latency: "120ms", load: "12%" },
        { name: "Gemini 3 Pro", status: "Active", latency: "450ms", load: "45%" },
        { name: "Claude 3.5 Opus", status: "Active", latency: "890ms", load: "22%" },
        { name: "Codex X", status: "Standby", latency: "---", load: "0%" },
        { name: "Llama 3.1 70B", status: "Active", latency: "310ms", load: "68%" },
        { name: "Pony Alpha", status: "Active", latency: "15ms", load: "5%" },
        { name: "Aurora v2", status: "Optimizing", latency: "---", load: "0%" }
    ],

    financials: {
        portfolio_value: "$1,420,690.00",
        daily_change: "+4.2%",
        btc: "$98,432.10",
        eth: "$4,120.45",
        nvda: "$142.33",
        sol: "$245.12"
    },

    sports: [
        { league: "NBA", game: "Lakers vs Warriors", score: "112 - 108", status: "Q4 2:14" },
        { league: "UCL", game: "Real Madrid vs Man City", score: "2 - 1", status: "FT" },
        { league: "NHL", game: "Rangers vs Bruins", score: "3 - 2", status: "P3 10:45" }
    ],

    queries: [
        { id: "Q-8822", text: "Autonomous build sequence: Orbital v4", user: "Atlas", time: "Just now" },
        { id: "Q-8821", text: "Global financial sentiment analysis", user: "Atlas", time: "55 min ago" },
        { id: "Q-8820", text: "Portfolio rebalancing simulation", user: "Atlas", time: "1 hr ago" }
    ],

    agents: [
        { name: "Manish", role: "LEAD", status: "Active", avatar: "M" },
        { name: "Friday", role: "SPC", status: "Active", avatar: "F" },
        { name: "Fury", role: "LEAD", status: "DND", avatar: "F" },
        { name: "Jarvis", role: "SPC", status: "Active", avatar: "J" },
        { name: "Loki", role: "INT", status: "Active", avatar: "L" },
        { name: "Vision", role: "SPC", status: "Active", avatar: "V" }
    ],

    kanban: {
        inbox: [
            { id: 1, title: "Review Q1 projections", priority: "High", agent: "Manish" },
            { id: 2, title: "API Endpoint optimization", priority: "Med", agent: "Jarvis" },
            { id: 6, title: "Finalize Orbital v4 deployment", priority: "Critical", agent: "Atlas" }
        ],
        assigned: [
            { id: 3, title: "Database migration plan", priority: "High", agent: "Friday" }
        ],
        in_progress: [
            { id: 4, title: "Interface overhaul", priority: "Critical", agent: "Loki" }
        ],
        review: [],
        done: [
            { id: 5, title: "Bootstrap orbital command", priority: "High", agent: "Manish" }
        ]
    },

    feed: [
        { time: "22:15", event: "Aurora v2 started optimization sequence." },
        { time: "22:10", event: "Lakers vs Warriors game started." },
        { time: "21:45", event: "System backup completed successfully." }
    ],

    documents: [
        { title: "Project_Sovereign.pdf", size: "2.4 MB" },
        { title: "Financial_Report_Q4.xlsx", size: "1.1 MB" },
        { title: "Model_Benchmarks.md", size: "45 KB" }
    ]
};

// UI Rendering Logic
function renderDashboard() {
    // Model Spend
    const spendTotalEl = document.getElementById('spend-total');
    const spendProgressEl = document.getElementById('spend-progress');
    if (spendTotalEl && spendProgressEl) {
        spendTotalEl.innerText = `$${State.overnight_spend.toFixed(2)}`;
        const percent = (State.overnight_spend / State.spend_cap) * 100;
        spendProgressEl.style.width = `${percent}%`;
    }

    const modelContainer = document.getElementById('model-status-list');
    if (modelContainer) {
        modelContainer.innerHTML = State.models.map(m => `
            <tr>
                <td><span class="status-dot ${m.status === 'Active' ? 'status-online' : 'status-offline'}"></span> ${m.name}</td>
                <td>${m.status}</td>
                <td style="text-align: right;">${m.latency}</td>
                <td style="text-align: right;">${m.load}</td>
            </tr>
        `).join('');
    }

    const financialContainer = document.getElementById('financial-grid');
    if (financialContainer) {
        financialContainer.innerHTML = `
            <div class="stat-row"><span class="stat-label">Portfolio Value</span><span class="stat-value">${State.financials.portfolio_value}</span></div>
            <div class="stat-row"><span class="stat-label">Daily Change</span><span class="stat-value" style="color: var(--success-color)">${State.financials.daily_change}</span></div>
            <hr style="border: 0; border-top: 1px solid var(--border-color); margin: 12px 0;">
            <div class="stat-row"><span class="stat-label">BTC/USD</span><span class="stat-value">${State.financials.btc}</span></div>
            <div class="stat-row"><span class="stat-label">ETH/USD</span><span class="stat-value">${State.financials.eth}</span></div>
            <div class="stat-row"><span class="stat-label">SOL/USD</span><span class="stat-value">${State.financials.sol}</span></div>
            <div class="stat-row"><span class="stat-label">NVDA</span><span class="stat-value">${State.financials.nvda}</span></div>
        `;
    }

    const sportsContainer = document.getElementById('sports-feed');
    if (sportsContainer) {
        sportsContainer.innerHTML = State.sports.map(s => `
            <div style="margin-bottom: 16px; border-bottom: 1px solid var(--border-color); padding-bottom: 8px;">
                <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: var(--text-secondary);">
                    <span>${s.league}</span>
                    <span>${s.status}</span>
                </div>
                <div style="display: flex; justify-content: space-between; font-weight: 600; margin-top: 4px;">
                    <span>${s.game}</span>
                    <span>${s.score}</span>
                </div>
            </div>
        `).join('');
    }

    const queryContainer = document.getElementById('query-list');
    if (queryContainer) {
        queryContainer.innerHTML = State.queries.map(q => `
            <div style="padding: 12px; border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between;">
                <div>
                    <div style="font-size: 0.875rem;">${q.text}</div>
                    <div style="font-size: 0.75rem; color: var(--text-secondary);">${q.id} • ${q.user}</div>
                </div>
                <div style="font-size: 0.75rem; color: var(--text-secondary);">${q.time}</div>
            </div>
        `).join('');
    }
}

function renderKanban() {
    // Agents Sidebar
    const agentList = document.getElementById('agent-list');
    if (agentList) {
        agentList.innerHTML = State.agents.map(a => `
            <div style="display: flex; align-items: center; margin-bottom: 20px;">
                <div style="width: 32px; height: 32px; border-radius: 8px; background: #2A2A2D; display: flex; align-items: center; justify-content: center; font-weight: 700; margin-right: 12px; font-size: 0.75rem;">${a.avatar}</div>
                <div style="flex: 1;">
                    <div style="font-size: 0.875rem; font-weight: 600;">${a.name} <span class="tag tag-${a.role.toLowerCase()}">${a.role}</span></div>
                    <div style="font-size: 0.75rem; color: var(--text-secondary);"><span class="status-dot ${a.status === 'Active' ? 'status-online' : 'status-offline'}"></span> ${a.status}</div>
                </div>
            </div>
        `).join('');
    }

    // Kanban Columns
    const columns = ['inbox', 'assigned', 'in_progress', 'review', 'done'];
    columns.forEach(col => {
        const colEl = document.getElementById(`col-${col}`);
        const countEl = document.getElementById(`count-${col}`);
        if (colEl) {
            if (countEl) countEl.innerText = State.kanban[col].length;
            colEl.innerHTML = State.kanban[col].map(task => `
                <div class="task-card" draggable="true" ondragstart="handleDragStart(event)" ondragend="handleDragEnd(event)" id="task-${task.id}">
                    <div style="font-size: 0.875rem; font-weight: 500; margin-bottom: 12px;">${task.title}</div>
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <span style="font-size: 0.7rem; color: var(--text-secondary); border: 1px solid var(--border-color); padding: 1px 4px; border-radius: 4px;">${task.priority}</span>
                        <span style="font-size: 0.75rem; font-weight: 600; color: var(--accent-color);">${task.agent}</span>
                    </div>
                </div>
            `).join('') + `<button class="btn-add" onclick="openModal('${col}')">+ Add Task</button>`;
            
            // Setup Dropzone
            colEl.addEventListener('dragover', handleDragOver);
            colEl.addEventListener('dragleave', handleDragLeave);
            colEl.addEventListener('drop', handleDrop);
        }
    });
    
    // ... rest of the renderKanban logic

    // Right Sidebar: Feed
    const feedEl = document.getElementById('live-feed');
    if (feedEl) {
        feedEl.innerHTML = State.feed.map(f => `
            <div style="font-size: 0.8125rem; margin-bottom: 12px;">
                <span style="color: var(--text-secondary); margin-right: 8px;">${f.time}</span>
                <span>${f.event}</span>
            </div>
        `).join('');
    }

    // Right Sidebar: Docs
    const docsEl = document.getElementById('docs-list');
    if (docsEl) {
        docsEl.innerHTML = State.documents.map(d => `
            <div style="display: flex; align-items: center; padding: 8px; border: 1px solid var(--border-color); border-radius: 6px; margin-bottom: 8px; cursor: pointer;">
                <div style="margin-right: 12px;">📄</div>
                <div style="flex: 1;">
                    <div style="font-size: 0.8125rem;">${d.title}</div>
                    <div style="font-size: 0.7rem; color: var(--text-secondary);">${d.size}</div>
                </div>
            </div>
        `).join('');
    }
}

// Kanban Interactions
let draggedTaskId = null;
let currentTargetCol = null;

function handleDragStart(e) {
    draggedTaskId = e.target.id.replace('task-', '');
    e.target.classList.add('dragging');
    e.dataTransfer.setData('text/plain', draggedTaskId);
}

function handleDragEnd(e) {
    e.target.classList.remove('dragging');
}

function handleDragOver(e) {
    e.preventDefault();
    e.currentTarget.classList.add('drag-over');
}

function handleDragLeave(e) {
    e.currentTarget.classList.remove('drag-over');
}

function handleDrop(e) {
    e.preventDefault();
    e.currentTarget.classList.remove('drag-over');
    const taskId = parseInt(e.dataTransfer.getData('text/plain'));
    const newStatus = e.currentTarget.getAttribute('data-status');
    
    // Find task in State
    let taskToMove = null;
    let oldStatus = null;
    
    for (const status in State.kanban) {
        const index = State.kanban[status].findIndex(t => t.id === taskId);
        if (index !== -1) {
            taskToMove = State.kanban[status].splice(index, 1)[0];
            oldStatus = status;
            break;
        }
    }
    
    if (taskToMove) {
        State.kanban[newStatus].push(taskToMove);
        addLog(`Moved task [${taskToMove.title}] from ${oldStatus} to ${newStatus}`);
        renderKanban();
    }
}

// Modal & Form
let activeCol = 'inbox';
function openModal(col) {
    activeCol = col;
    document.getElementById('addTaskModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('addTaskModal').style.display = 'none';
}

function addLog(message) {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    State.feed.unshift({ time, event: message });
    if (State.feed.length > 20) State.feed.pop();
    // Re-render feed if element exists
    const feedEl = document.getElementById('live-feed');
    if (feedEl) {
        feedEl.innerHTML = State.feed.map(f => `
            <div style="font-size: 0.8125rem; margin-bottom: 12px;">
                <span style="color: var(--text-secondary); margin-right: 8px;">${f.time}</span>
                <span>${f.event}</span>
            </div>
        `).join('');
    }
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    console.log("Orbital Command Init...");
    renderDashboard();
    renderKanban();

    const addForm = document.getElementById('addTaskForm');
    if (addForm) {
        addForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const newTask = {
                id: Date.now(),
                title: document.getElementById('taskTitle').value,
                priority: document.getElementById('taskPriority').value,
                agent: document.getElementById('taskAgent').value
            };
            State.kanban[activeCol].push(newTask);
            addLog(`Deployed new task: ${newTask.title} (Agent: ${newTask.agent})`);
            closeModal();
            renderKanban();
            addForm.reset();
        });
    }
});
