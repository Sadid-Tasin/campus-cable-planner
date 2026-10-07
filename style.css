@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap');

:root {
    --bg-dark: #070714;
    --neon-cyan: #00f0ff;
    --neon-purple: #9d4edd;
    --neon-pink: #ff007f;
    --glass-bg: rgba(20, 20, 35, 0.6);
    --glass-border: rgba(255, 255, 255, 0.08);
    --text-main: #e0e0ff;
    --text-muted: #8a8aab;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}

body {
    background: var(--bg-dark);
    color: var(--text-main);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

/* ================= BACKGROUND ANIMATIONS ================= */
.bg-animation {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: radial-gradient(circle at 15% 50%, rgba(157, 78, 221, 0.15), transparent 25%),
        radial-gradient(circle at 85% 30%, rgba(0, 240, 255, 0.15), transparent 25%);
    z-index: -2;
}

.floating-shapes {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
}

.orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(60px);
    opacity: 0.5;
    animation: floatOrb 15s infinite alternate ease-in-out;
}

.orb-1 {
    width: 300px;
    height: 300px;
    background: var(--neon-purple);
    top: -10%;
    left: 10%;
    animation-delay: 0s;
}

.orb-2 {
    width: 250px;
    height: 250px;
    background: var(--neon-cyan);
    bottom: -10%;
    right: 5%;
    animation-delay: -5s;
}

.orb-3 {
    width: 200px;
    height: 200px;
    background: var(--neon-pink);
    top: 40%;
    left: 40%;
    animation-delay: -10s;
}

@keyframes floatOrb {
    0% {
        transform: translate(0, 0) scale(1);
    }

    100% {
        transform: translate(50px, 50px) scale(1.2);
    }
}

/* ================= GLASSMORPHISM ================= */
.glass-panel {
    background: var(--glass-bg);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid var(--glass-border);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.5);
}

.glass-card {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid var(--glass-border);
    border-radius: 12px;
    padding: 15px;
}

/* ================= LOGIN PANEL ================= */
.login-box {
    padding: 50px 40px;
    border-radius: 24px;
    text-align: center;
    width: 420px;
    animation: popCenter 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.floating-panel {
    animation: floatBox 6s ease-in-out infinite alternate;
}

@keyframes floatBox {
    0% {
        transform: translateY(0);
    }

    100% {
        transform: translateY(-10px);
    }
}

.glow-icon {
    font-size: 55px;
    color: var(--neon-cyan);
    margin-bottom: 15px;
    filter: drop-shadow(0 0 10px var(--neon-cyan));
}

.login-box h2 {
    font-weight: 700;
    font-size: 28px;
    background: linear-gradient(90deg, var(--neon-cyan), var(--neon-purple));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.typewriter {
    color: var(--text-muted);
    font-size: 14px;
    margin-top: 5px;
    height: 20px;
}

.input-container {
    position: relative;
    margin: 25px 0;
}

.input-container i {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--text-muted);
    transition: 0.3s;
}

.input-container input:focus+.focus-border+i {
    color: var(--neon-cyan);
}

input,
select {
    width: 100%;
    padding: 15px 15px 15px 45px;
    background: rgba(0, 0, 0, 0.3);
    border: none;
    border-bottom: 2px solid rgba(255, 255, 255, 0.1);
    color: #fff;
    font-size: 15px;
    outline: none;
    border-radius: 8px 8px 0 0;
    transition: 0.3s;
}

.focus-border {
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: var(--neon-cyan);
    transition: 0.4s ease;
    transform: translateX(-50%);
}

input:focus~.focus-border,
select:focus~.focus-border {
    width: 100%;
}

/* ================= BUTTONS & SHINE EFFECT ================= */
.neon-btn {
    width: 100%;
    padding: 15px;
    background: transparent;
    border: 2px solid var(--neon-cyan);
    color: var(--neon-cyan);
    border-radius: 8px;
    font-weight: 700;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 2px;
    position: relative;
    overflow: hidden;
    transition: 0.4s;
    z-index: 1;
}

.neon-btn:hover {
    background: var(--neon-cyan);
    color: #000;
    box-shadow: 0 0 20px var(--neon-cyan);
}

.action-btn {
    padding: 15px 30px;
    background: linear-gradient(45deg, var(--neon-purple), var(--neon-cyan));
    color: #fff;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(157, 78, 221, 0.4);
    transition: 0.3s;
    position: relative;
    overflow: hidden;
}

.action-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 240, 255, 0.6);
}

.warning-btn {
    background: linear-gradient(45deg, #ff003c, var(--neon-pink));
    box-shadow: 0 4px 15px rgba(255, 0, 127, 0.4);
}

.warning-btn:hover {
    box-shadow: 0 6px 20px rgba(255, 0, 60, 0.6);
}

/* Shine Sweep Animation */
.shine-effect::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 50%;
    height: 100%;
    background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0) 100%);
    transform: skewX(-20deg);
    transition: 0s;
    z-index: -1;
}

.shine-effect:hover::before {
    animation: sweep 0.6s;
}

@keyframes sweep {
    100% {
        left: 200%;
    }
}

/* ================= DASHBOARD ================= */
.dashboard {
    display: flex;
    width: 95vw;
    height: 92vh;
    border-radius: 20px;
    overflow: hidden;
    animation: fadeIn 1s;
}

.sidebar {
    width: 280px;
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    border-right: 1px solid var(--glass-border);
}

.sidebar-header {
    text-align: center;
    margin-bottom: 30px;
}

.avatar-glow {
    width: 70px;
    height: 70px;
    margin: 0 auto 15px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    color: var(--neon-purple);
    border: 2px solid var(--neon-purple);
    box-shadow: 0 0 15px rgba(157, 78, 221, 0.5);
}

.status-badge {
    font-size: 12px;
    color: #00ffaa;
    background: rgba(0, 255, 170, 0.1);
    padding: 4px 10px;
    border-radius: 20px;
    display: inline-block;
    margin-top: 5px;
}

.nav-links {
    list-style: none;
    flex-grow: 1;
}

.nav-links li {
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s;
    display: flex;
    align-items: center;
    color: var(--text-muted);
    font-weight: 500;
}

.nav-links li i {
    margin-right: 15px;
    font-size: 18px;
    transition: 0.3s;
}

.nav-links li:hover,
.nav-links li.active {
    background: rgba(157, 78, 221, 0.15);
    color: #fff;
    transform: translateX(5px);
}

.nav-links li.active i {
    color: var(--neon-cyan);
    filter: drop-shadow(0 0 5px var(--neon-cyan));
}

.logout-btn {
    border-color: var(--neon-pink);
    color: var(--neon-pink);
    margin-top: auto;
}

.logout-btn:hover {
    background: var(--neon-pink);
    color: #fff;
    box-shadow: 0 0 20px var(--neon-pink);
}

/* ================= MAIN CONTENT ================= */
.content {
    flex-grow: 1;
    padding: 50px;
    overflow-y: auto;
    position: relative;
}

.section-header h2 {
    font-size: 24px;
    margin-bottom: 8px;
    color: #fff;
}

.neon-text {
    color: var(--neon-cyan);
    text-shadow: 0 0 10px rgba(0, 240, 255, 0.4);
}

.neon-text-pink {
    color: var(--neon-pink);
    text-shadow: 0 0 10px rgba(255, 0, 127, 0.4);
}

.control-group {
    display: flex;
    gap: 15px;
    margin-bottom: 30px;
    align-items: center;
    background: rgba(0, 0, 0, 0.2);
    padding: 15px;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.05);
}

.custom-select,
.custom-input {
    padding: 12px 15px;
    border-radius: 8px;
    border: 1px solid var(--glass-border);
    background: rgba(20, 20, 35, 0.8);
}

.result-box {
    padding: 10px;
    min-height: 100px;
}

/* Staggered Pop-in Cards */
.result-item,
.path-card {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01));
    padding: 20px;
    border-radius: 12px;
    margin-bottom: 15px;
    border-left: 4px solid var(--neon-purple);
    backdrop-filter: blur(10px);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.result-item:hover,
.path-card:hover {
    transform: translateY(-5px) scale(1.01);
    border-left-color: var(--neon-cyan);
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2), -2px 0 15px rgba(0, 240, 255, 0.3);
}

.text-pink {
    color: var(--neon-pink);
}

.dispatch-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

.add-btn {
    background: rgba(255, 255, 255, 0.05);
    border: 1px dashed var(--text-muted);
    color: var(--text-main);
    padding: 12px;
    width: 100%;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 15px;
    transition: 0.3s;
}

.add-btn:hover {
    border-color: var(--neon-cyan);
    background: rgba(0, 240, 255, 0.1);
    color: var(--neon-cyan);
}

.dynamic-row {
    display: flex;
    gap: 10px;
    margin-bottom: 12px;
    animation: slideInLeft 0.3s ease forwards;
}

/* Helper classes */
.mt-15 {
    margin-top: 15px;
}

.mb-10 {
    margin-bottom: 10px;
}

.hidden {
    display: none !important;
}

.full-width {
    width: 100%;
}

/* Highlights */
.highlight-cyan {
    color: var(--neon-cyan);
    font-weight: 600;
}

.highlight-purple {
    color: #d4a5ff;
    font-weight: 600;
}

.highlight-green {
    color: #00ffaa;
    font-weight: 600;
    text-shadow: 0 0 8px rgba(0, 255, 170, 0.4);
}

.highlight-red {
    color: #ff3366;
    font-weight: 600;
    text-shadow: 0 0 8px rgba(255, 51, 102, 0.4);
}

/* Scrollbar */
::-webkit-scrollbar {
    width: 6px;
}

::-webkit-scrollbar-track {
    background: transparent;
}

::-webkit-scrollbar-thumb {
    background: rgba(157, 78, 221, 0.5);
    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
    background: var(--neon-cyan);
}

/* Keyframes */
@keyframes popCenter {
    0% {
        opacity: 0;
        transform: scale(0.8) translateY(20px);
    }

    100% {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes popInCard {
    0% {
        opacity: 0;
        transform: translateY(20px) scale(0.95);
    }

    100% {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

@keyframes pulse {
    0% {
        transform: scale(1);
        text-shadow: 0 0 10px var(--neon-cyan);
    }

    50% {
        transform: scale(1.1);
        text-shadow: 0 0 25px var(--neon-cyan), 0 0 35px var(--neon-purple);
    }

    100% {
        transform: scale(1);
        text-shadow: 0 0 10px var(--neon-cyan);
    }
}

@keyframes bounce-x {

    0%,
    100% {
        transform: translateX(0);
    }

    50% {
        transform: translateX(5px);
        color: var(--neon-cyan);
    }
}

@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-20px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.animate-slide-up {
    animation: slideUp 0.6s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.pulse {
    animation: pulse 2s infinite;
}

.bounce-x {
    animation: bounce-x 1.5s infinite;
}
