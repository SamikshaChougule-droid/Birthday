// Global variables
let musicPlaying = false;

// Initialize floating elements
function initFloatingBg() {
    const floatingBg = document.getElementById('floatingBg');
    const elements = ['❤️', '💖', '💕', '⭐', '✨', '🎈', '🎉'];
    
    setInterval(() => {
        const elem = document.createElement('div');
        const randomEl = elements[Math.floor(Math.random() * elements.length)];
        elem.textContent = randomEl;
        elem.className = `heart-float ${randomEl === '⭐' ? 'star-float' : randomEl.includes('🎈') ? 'balloon-float' : 'heart-float'}`;
        elem.style.left = Math.random() * 100 + 'vw';
        elem.style.fontSize = (Math.random() * 20 + 20) + 'px';
        elem.style.animationDuration = (Math.random() * 5 + 6) + 's';
        floatingBg.appendChild(elem);
        
        setTimeout(() => elem.remove(), 9000);
    }, 800);
}

// Confetti explosion
function launchConfetti() {
    for(let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = ['#ff6b9d', '#ffd93d', '#a8e6cf', '#ff9ff3'][Math.floor(Math.random() * 4)];
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 4000);
    }
}

// Music control
function toggleMusic() {
    const music = document.getElementById('bgMusic');
    if (!musicPlaying) {
        music.play();
        musicPlaying = true;
    } else {
        music.pause();
        musicPlaying = false;
    }
}

// Custom message functions
function showCustomMsg() {
    document.getElementById('customMsg').style.display = 'block';
    document.getElementById('customMsg').scrollIntoView({ behavior: 'smooth' });
}

function save
