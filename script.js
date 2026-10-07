// ================= Data Structures =================
const nodeName = [
    "", "Engineering Building", "YKSG-2", "RASG-1", "Food Court", "Auditorium",
    "AB-4", "Annex Building", "Admission Building", "Hall Accommodation",
    "ID Card Section", "Gate-4", "Gate-3", "Gate-2", "AB-1", "Teachers Home",
    "Gate-8", "Mosque", "AB-3", "Green Garden", "Gate-1", "Transport Building"
];

const edges = [
    { u: 6, v: 7, length: 120, cost: 12000, capacity: 100, load: 25 }, { u: 6, v: 5, length: 80, cost: 8000, capacity: 100, load: 45 },
    { u: 5, v: 4, length: 60, cost: 6000, capacity: 100, load: 60 }, { u: 4, v: 3, length: 90, cost: 9000, capacity: 100, load: 30 },
    { u: 3, v: 2, length: 70, cost: 7000, capacity: 100, load: 70 }, { u: 2, v: 1, length: 100, cost: 10000, capacity: 100, load: 80 },
    { u: 3, v: 14, length: 110, cost: 11000, capacity: 100, load: 35 }, { u: 6, v: 14, length: 75, cost: 7500, capacity: 100, load: 20 },
    { u: 6, v: 11, length: 50, cost: 5000, capacity: 100, load: 75 }, { u: 6, v: 8, length: 95, cost: 9500, capacity: 100, load: 40 },
    { u: 9, v: 8, length: 65, cost: 6500, capacity: 100, load: 25 }, { u: 9, v: 12, length: 85, cost: 8500, capacity: 100, load: 55 },
    { u: 8, v: 12, length: 55, cost: 5500, capacity: 100, load: 65 }, { u: 8, v: 10, length: 45, cost: 4500, capacity: 100, load: 30 },
    { u: 10, v: 13, length: 70, cost: 7000, capacity: 100, load: 50 }, { u: 14, v: 15, length: 90, cost: 9000, capacity: 100, load: 45 },
    { u: 15, v: 16, length: 60, cost: 6000, capacity: 100, load: 70 }, { u: 14, v: 17, length: 50, cost: 5000, capacity: 100, load: 35 },
    { u: 17, v: 18, length: 65, cost: 6500, capacity: 100, load: 50 }, { u: 18, v: 3, length: 80, cost: 8000, capacity: 100, load: 25 },
    { u: 3, v: 19, length: 75, cost: 7500, capacity: 100, load: 40 }, { u: 3, v: 20, length: 100, cost: 10000, capacity: 100, load: 65 },
    { u: 14, v: 21, length: 120, cost: 12000, capacity: 100, load: 30 }
];

const credentials = {
    "sadid": "252-15-880", "sabbir": "252-15-884",
    "bayezid": "252-15-892", "jayed": "252-15-896"
};

// ================= UI Initialization & Typewriter =================
// ================= UI Initialization & Typewriter =================
window.onload = () => {
    populateDropdowns();
    addTechInput();
    addFaultInput();
    typeWriterEffect("System Authentication Required...", document.getElementById("typewriter-text"), 50);

    // Enter Key Press Event for Login
    const loginInputs = document.querySelectorAll('#username, #password');
    loginInputs.forEach(input => {
        input.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                handleLogin();
            }
        });
    });
};

function typeWriterEffect(text, element, speed) {
    let i = 0; element.innerHTML = "";
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++; setTimeout(type, speed);
        }
    }
    type();
}

function populateDropdowns() {
    let nodeOptions = '<option value="">-- Select Campus Node --</option>';
    for (let i = 1; i < nodeName.length; i++) nodeOptions += `<option value="${i}">${nodeName[i]}</option>`;
    document.querySelectorAll('.node-select').forEach(sel => sel.innerHTML = nodeOptions);

    let edgeOptions = '<option value="">-- Target Edge Connection --</option>';
    edges.forEach((e, i) => edgeOptions += `<option value="${i}">${i + 1}. ${nodeName[e.u]} <-> ${nodeName[e.v]}</option>`);
    document.getElementById('fail-edge-select').innerHTML = edgeOptions;
}

// ================= Auth & Navigation =================
function handleLogin() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const btn = document.querySelector('.login-box button');

    if (credentials[user] && credentials[user] === pass) {
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Authenticating...';
        setTimeout(() => {
            document.getElementById('login-container').classList.add('hidden');
            document.getElementById('dashboard-container').classList.remove('hidden');
            document.getElementById('admin-name').innerText = user.charAt(0).toUpperCase() + user.slice(1);
        }, 800);
    } else {
        document.getElementById('login-error').classList.remove('hidden');
        document.getElementById('login-container').style.animation = "none";
        setTimeout(() => document.getElementById('login-container').style.animation = "popCenter 0.3s ease", 10);
    }
}

function logout() {
    document.getElementById('username').value = ''; document.getElementById('password').value = '';
    document.getElementById('dashboard-container').classList.add('hidden');
    document.getElementById('login-container').classList.remove('hidden');
    document.getElementById('login-error').classList.add('hidden');
    const btn = document.querySelector('.login-box button');
    btn.innerHTML = '<span>ACCESS SYSTEM</span>';
    typeWriterEffect("Session terminated. Re-authenticate.", document.getElementById("typewriter-text"), 50);
}

function showSection(id) {
    document.querySelectorAll('.section').forEach(s => { s.classList.add('hidden'); s.classList.remove('animate-slide-up'); });
    document.querySelectorAll('.nav-links li').forEach(l => l.classList.remove('active'));
    let target = document.getElementById(id);
    target.classList.remove('hidden'); target.classList.add('animate-slide-up');
    event.currentTarget.classList.add('active');
}

// ================= Core Dijkstra Algorithm =================
function runDijkstra(start, dest, ignoreEdge = -1, reqBandwidth = 0) {
    const n = nodeName.length;
    let dist = Array(n).fill(Infinity), parent = Array(n).fill(-1), visited = Array(n).fill(false);
    dist[start] = 0;

    for (let count = 1; count < n; count++) {
        let u = -1;
        for (let i = 1; i < n; i++) if (!visited[i] && (u === -1 || dist[i] < dist[u])) u = i;
        if (u === -1 || dist[u] === Infinity) break;
        visited[u] = true;

        edges.forEach((edge, idx) => {
            if (idx === ignoreEdge || (edge.capacity - edge.load) < reqBandwidth) return;
            let v = (edge.u === u) ? edge.v : (edge.v === u) ? edge.u : -1;
            if (v !== -1 && !visited[v] && dist[u] + edge.length < dist[v]) {
                dist[v] = dist[u] + edge.length; parent[v] = u;
            }
        });
    }
    if (dist[dest] === Infinity) return null;
    let path = []; let curr = dest;
    while (curr !== -1) { path.push(curr); curr = parent[curr]; }
    return { path: path.reverse(), distance: dist[dest] };
}

function getPathDetails(pathArray, ignoreEdge = -1) {
    let cost = 0, minBW = Infinity;
    for (let i = 0; i < pathArray.length - 1; i++) {
        let u = pathArray[i], v = pathArray[i + 1];
        let edge = edges.find((e, idx) => idx !== ignoreEdge && ((e.u === u && e.v === v) || (e.u === v && e.v === u)));
        if (edge) { cost += edge.cost; minBW = Math.min(minBW, edge.capacity - edge.load); }
    }
    return { cost, minBW };
}

// ================= Problem Executions =================

// Prob 1
function searchCable() {
    const uId = parseInt(document.getElementById('search-node').value);
    const box = document.getElementById('search-result');
    if (!uId) return box.innerHTML = '<p class="error">Select a target node first.</p>';

    let resHTML = '';
    const filtered = edges.filter(e => e.u === uId || e.v === uId);
    if (filtered.length === 0) return box.innerHTML = '<p>No active connections found.</p>';

    filtered.forEach((e, idx) => {
        // Staggered animation effect logic
        resHTML += `<div class="result-item" style="animation: popInCard 0.5s ease forwards ${idx * 0.1}s; opacity: 0;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <span class="highlight-cyan"><i class="fas fa-link"></i> ${nodeName[e.u]} <i class="fas fa-arrows-alt-h text-muted"></i> ${nodeName[e.v]}</span>
                <span style="background:rgba(255,255,255,0.1); padding:4px 8px; border-radius:5px; font-size:12px;">Tk. ${e.cost}</span>
            </div>
            <div class="mt-15" style="color:#aaa; font-size:13px;">
                <i class="fas fa-ruler-horizontal"></i> ${e.length}m &nbsp;&nbsp;|&nbsp;&nbsp; 
                <i class="fas fa-wifi"></i> BW: ${e.capacity - e.load}/${e.capacity} Mbps
            </div>
        </div>`;
    });
    box.innerHTML = resHTML;
}

// Prob 2
function findShortestPath() {
    const s = parseInt(document.getElementById('start-node').value);
    const d = parseInt(document.getElementById('end-node').value);
    const box = document.getElementById('path-result');
    if (!s || !d) return box.innerHTML = '<p class="error">Select both Origin and Destination.</p>';

    const result = runDijkstra(s, d);
    if (!result) return box.innerHTML = '<p class="error">Isolation detected. No route exists.</p>';

    const details = getPathDetails(result.path);
    const pathStr = result.path.map(id => nodeName[id]).join(' <i class="fas fa-angle-right highlight-purple"></i> ');

    box.innerHTML = `
        <div class="path-card" style="animation: popInCard 0.5s ease forwards; opacity: 0;">
            <h3 class="highlight-cyan mb-10"><i class="fas fa-check-circle"></i> Optimal Route Established</h3>
            <p style="line-height:1.8;"><strong>Trace:</strong> ${pathStr}</p>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px; margin-top:15px; padding-top:15px; border-top:1px solid rgba(255,255,255,0.1);">
                <p><i class="fas fa-location-arrow text-muted"></i> <strong>Distance:</strong> ${result.distance}m</p>
                <p><i class="fas fa-coins text-muted"></i> <strong>Cost Estimate:</strong> Tk. ${details.cost}</p>
            </div>
        </div>`;
}

// Prob 3
function simulateFailure() {
    const edgeIdx = parseInt(document.getElementById('fail-edge-select').value);
    const box = document.getElementById('failure-result');
    if (isNaN(edgeIdx)) return box.innerHTML = '<p class="error">Acknowledge target edge to sever.</p>';

    const edge = edges[edgeIdx];
    let visited = Array(nodeName.length).fill(false);
    let q = [edge.u]; visited[edge.u] = true; let compU = 0;
    while (q.length > 0) {
        let curr = q.shift(); compU++;
        edges.forEach((e, i) => {
            if (i === edgeIdx) return;
            let v = (e.u === curr) ? e.v : (e.v === curr) ? e.u : -1;
            if (v !== -1 && !visited[v]) { visited[v] = true; q.push(v); }
        });
    }

    const totalNodes = nodeName.length - 1;
    let html = `<div class="path-card" style="animation: popInCard 0.4s ease forwards; opacity: 0;">
                <p class="mb-10 text-muted">Severed Link: <span class="highlight-purple">${nodeName[edge.u]} <i class="fas fa-times text-pink"></i> ${nodeName[edge.v]}</span></p>`;

    if (compU === totalNodes) {
        const backup = runDijkstra(edge.u, edge.v, edgeIdx);
        html += `<h3 class="highlight-green"><i class="fas fa-shield-alt"></i> SYSTEM SAFE</h3><p class="text-muted mt-15">Failover protocol engaged. Redundant path found.</p>`;
        if (backup) html += `<div class="mt-15" style="background:rgba(0,255,170,0.1); padding:10px; border-left:3px solid #00ffaa;">
            <p><strong>Reroute:</strong> ${backup.path.map(id => nodeName[id]).join(' &rarr; ')}</p>
            <p style="font-size:12px; margin-top:5px;">Distance: ${backup.distance}m | Loss Cost: Tk.${getPathDetails(backup.path, edgeIdx).cost}</p></div>`;
    } else if (compU === 1 || (totalNodes - compU) === 1) {
        html += `<h3 class="highlight-purple"><i class="fas fa-exclamation-triangle"></i> SECTOR ISOLATED</h3><p class="mt-15 text-muted">A single terminal has lost connection to the main grid.</p>`;
    } else {
        html += `<h3 class="highlight-red"><i class="fas fa-radiation"></i> CRITICAL FRACTURE</h3><p class="mt-15 text-muted">Network split into fragmented zones (${compU} nodes / ${totalNodes - compU} nodes). Core communication severed.</p>`;
    }
    box.innerHTML = html + `</div>`;
}

// Prob 4
function addTechInput() {
    let div = document.createElement('div'); div.className = 'dynamic-row';
    div.innerHTML = `<select class="custom-select tech-sel" style="flex-grow:1;">${document.querySelector('.node-select').innerHTML}</select> <button class="action-btn warning-btn" style="padding:0 15px;" onclick="this.parentElement.remove()"><i class="fas fa-trash"></i></button>`;
    document.getElementById('tech-inputs').appendChild(div);
}
function addFaultInput() {
    let div = document.createElement('div'); div.className = 'dynamic-row';
    div.innerHTML = `<select class="custom-select fault-sel" style="flex-grow:1;">${document.querySelector('.node-select').innerHTML}</select> <button class="action-btn warning-btn" style="padding:0 15px;" onclick="this.parentElement.remove()"><i class="fas fa-trash"></i></button>`;
    document.getElementById('fault-inputs').appendChild(div);
}
function dispatchTechnicians() {
    const techNodes = Array.from(document.querySelectorAll('.tech-sel')).map(s => parseInt(s.value)).filter(v => v);
    const faultNodes = Array.from(document.querySelectorAll('.fault-sel')).map(s => parseInt(s.value)).filter(v => v);
    const box = document.getElementById('dispatch-result');

    if (!techNodes.length || !faultNodes.length) return box.innerHTML = '<p class="error">Data insufficient for AI execution.</p>';

    let matrix = techNodes.map(t => faultNodes.map(f => (runDijkstra(t, f)?.distance || Infinity)));
    let assignedFault = Array(techNodes.length).fill(-1), faultAssignedStatus = Array(faultNodes.length).fill(false), totalTravel = 0;

    for (let k = 0; k < Math.min(techNodes.length, faultNodes.length); k++) {
        let bestDist = Infinity, bT = -1, bF = -1;
        for (let i = 0; i < techNodes.length; i++) {
            if (assignedFault[i] !== -1) continue;
            for (let j = 0; j < faultNodes.length; j++) {
                if (!faultAssignedStatus[j] && matrix[i][j] < bestDist) { bestDist = matrix[i][j]; bT = i; bF = j; }
            }
        }
        if (bT === -1) break;
        assignedFault[bT] = bF; faultAssignedStatus[bF] = true; totalTravel += bestDist;
    }

    let html = `<h3 class="highlight-cyan mb-10"><i class="fas fa-clipboard-check"></i> Dispatch Manifest</h3>`;
    techNodes.forEach((t, i) => {
        html += `<div class="result-item" style="animation: popInCard 0.4s ease forwards ${i * 0.1}s; opacity: 0;">
            <strong style="color:var(--neon-purple);"><i class="fas fa-user-cog"></i> Unit ${i + 1}</strong> 
            <span class="text-muted" style="font-size:12px;">(Loc: ${nodeName[t]})</span><br>`;
        if (assignedFault[i] !== -1) {
            let dist = matrix[i][assignedFault[i]];
            html += `<div class="mt-15"><i class="fas fa-arrow-right text-muted"></i> Dispatched to <span class="highlight-cyan">${nodeName[faultNodes[assignedFault[i]]]}</span><br>
            <span style="font-size:13px; color:#aaa;"><i class="fas fa-tachometer-alt"></i> Travel: ${dist}m | ETA: ${(dist / 100).toFixed(1)} mins</span></div>`;
        } else html += `<div class="mt-15 highlight-green"><i class="fas fa-coffee"></i> STANDBY MODE</div>`;
        html += `</div>`;
    });
    box.innerHTML = html + `<p class="mt-15 text-muted text-center">Operation Logistics: ${totalTravel}m Total Movement | ${faultAssignedStatus.filter(v => !v).length} Anomalies Unresolved.</p>`;
}

// Prob 5
function checkTrafficRoute() {
    const s = parseInt(document.getElementById('traffic-start').value);
    const d = parseInt(document.getElementById('traffic-end').value);
    const reqBW = parseInt(document.getElementById('traffic-bw').value);
    const box = document.getElementById('traffic-result');

    if (!s || !d || !reqBW) return box.innerHTML = '<p class="error">Parameters incomplete.</p>';

    const normalPath = runDijkstra(s, d);
    const trafficPath = runDijkstra(s, d, -1, reqBW);

    if (!trafficPath) return box.innerHTML = `<div class="path-card" style="border-left-color:#ff3366;"><h3 class="highlight-red"><i class="fas fa-ban"></i> TRAFFIC BLOCKED</h3><p class="text-muted mt-15">Network density too high. Impossible to allocate ${reqBW} Mbps safely.</p></div>`;

    const details = getPathDetails(trafficPath.path);
    const usage = (reqBW / details.minBW) * 100;

    let html = `<div class="path-card" style="animation: popInCard 0.5s ease forwards; opacity: 0; border-left-color: ${usage > 50 ? 'var(--neon-pink)' : '#00ffaa'}">`;
    if (normalPath && normalPath.distance !== trafficPath.distance)
        html += `<p class="error mb-10" style="font-size:12px;"><i class="fas fa-code-branch"></i> Core route congested. Diverting traffic to secondary trunk.</p>`;

    html += `<h3 class="${usage > 50 ? 'highlight-red' : 'highlight-green'}"><i class="fas ${usage > 50 ? 'fa-thermometer-half' : 'fa-thermometer-empty'}"></i> STATUS: ${usage > 50 ? 'CONGESTED' : 'OPTIMAL'}</h3>
        <p class="mt-15 text-muted"><strong>Stream:</strong> ${trafficPath.path.map(id => nodeName[id]).join(' <i class="fas fa-caret-right highlight-cyan"></i> ')}</p>
        <div style="background:rgba(0,0,0,0.3); padding:10px; border-radius:5px; margin-top:15px; font-size:13px; color:#aaa;">
            Distance: ${trafficPath.distance}m | Minimum Available Pipe: ${details.minBW} Mbps
        </div></div>`;
    box.innerHTML = html;
}
