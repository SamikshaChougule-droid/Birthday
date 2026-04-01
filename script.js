// ✨ FLOATING HEARTS & SPARKLES
function initFloatingMagic() {
    const container = document.getElementById('floatingMagic');
    if (!container) return;

    const hearts = ['💖','💕','💝','💗','🩷','💓','💞'];
    const sparkles = ['✨','⭐','🌟','💫','🌈','🎇'];

    // ❤️ Hearts
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart-float';
        heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 4 + 8) + 's';

        container.appendChild(heart);
        setTimeout(() => heart.remove(), 12000);
    }, 200);

    // ✨ Sparkles
    setInterval(() => {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.innerHTML = sparkles[Math.floor(Math.random() * sparkles.length)];
        sparkle.style.left = Math.random() * 100 + 'vw';
        sparkle.style.animationDuration = (Math.random() * 3 + 5) + 's';

        container.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 8000);
    }, 500);
}

//////////////////////////////////////////////////////
// 🎵 MUSIC CONTROL (FIXED)
//////////////////////////////////////////////////////

let musicPlaying = false;

function toggleMusic() {
    const music = document.getElementById('birthdayMusic');
    const btn = document.querySelector('.music-btn');

    if (!music) return;

    musicPlaying = !musicPlaying;

    if (musicPlaying) {
        music.play().catch(() => console.log("Autoplay blocked"));
        if (btn) {
            btn.innerHTML = '<i class="fas fa-volume-up"></i> 🎵 Party ON!';
        }
    } else {
        music.pause();
        if (btn) {
            btn.innerHTML = '<i class="fas fa-music"></i> 🎵 Party Started!';
        }
    }
}

//////////////////////////////////////////////////////
// 💌 SAVE MESSAGE (NEW FEATURE)
//////////////////////////////////////////////////////

function saveArpitaMsg() {
    const msg = document.getElementById('arpitaMsg');
    if (!msg) return;

    localStorage.setItem('arpitaMessage', msg.value);
    alert('💖 Message saved successfully!');
}

function loadArpitaMsg() {
    const msg = document.getElementById('arpitaMsg');
    const saved = localStorage.getItem('arpitaMessage');

    if (msg && saved) {
        msg.value = saved;
    }
}

//////////////////////////////////////////////////////
// 🧠 MEMORY GAME
//////////////////////////////////////////////////////

let gameClicks = [];

function initMemoryGame() {
    const hearts = document.querySelectorAll('.memory-heart');
    if (!hearts.length) return;

    gameClicks = [];

    hearts.forEach(heart => {
        heart.onclick = () => {
            const order = parseInt(heart.dataset.order);
            gameClicks.push(order);

            heart.style.transform = 'scale(1.4)';
            setTimeout(() => heart.style.transform = 'scale(1)', 300);

            if (gameClicks.length === 4) {
                checkGame();
            }
        };
    });
}

function checkGame() {
    const msg = document.getElementById('gameMessage');

    if (gameClicks.join('') === '1234') {
        msg.innerHTML = '🎉 PERFECT! You remember everything! 💖';
        launchConfetti();
    } else {
        msg.innerHTML = '😅 Oops! Try again!';
    }
}

function resetGame() {
    gameClicks = [];
    const msg = document.getElementById('gameMessage');
    if (msg) {
        msg.innerHTML = 'Click hearts in order: 1️⃣ → 2️⃣ → 3️⃣ → 4️⃣';
    }
}

//////////////////////////////////////////////////////
// 🎯 QUIZ GAME
//////////////////////////////////////////////////////

const quizData = [
    {
        question: "What is Arpita to you?",
        options: ["Friend", "Bestie", "Soul Sister 💖", "Everything"],
        correct: 2
    },
    {
        question: "Favorite activity?",
        options: ["Eating 🍕", "Talking 🌙", "Photos 📸", "All 💕"],
        correct: 3
    },
    {
        question: "Arpita is...",
        options: ["Cute", "Kind", "Crazy 😂", "All 👑"],
        correct: 3
    }
];

let currentQ = 0;

function loadQuestion() {
    const qBox = document.getElementById('quizQuestion');
    const qText = document.getElementById('questionText');
    const optionsDiv = document.getElementById('options');

    if (!qBox || !qText || !optionsDiv) return;

    const q = quizData[currentQ];

    qText.innerText = `Question ${currentQ + 1}: ${q.question}`;
    optionsDiv.innerHTML = '';

    q.options.forEach((opt, index) => {
        const btn = document.createElement('div');
        btn.className = 'quiz-option';
        btn.innerText = opt;

        btn.onclick = () => selectOption(index);

        optionsDiv.appendChild(btn);
    });

    updateProgress();
}

function selectOption(index) {
    const options = document.querySelectorAll('.quiz-option');

    options.forEach(opt => opt.classList.remove('selected'));
    options[index].classList.add('selected');

    document.getElementById('nextBtn').style.display = 'block';
}

function nextQuestion() {
    currentQ++;

    if (currentQ < quizData.length) {
        loadQuestion();
        document.getElementById('nextBtn').style.display = 'none';
    } else {
        showResult();
    }
}

function updateProgress() {
    const progress = document.getElementById('quizProgress');
    if (!progress) return;

    const percent = (currentQ / quizData.length) * 100;
    progress.style.width = percent + '%';
}

function showResult() {
    const box = document.getElementById('quizQuestion');
    if (!box) return;

    box.innerHTML = "<h2>🎉 You completed the quiz! 💖</h2>";
    launchConfetti();
}

//////////////////////////////////////////////////////
// 🎉 CONFETTI EFFECT
//////////////////////////////////////////////////////

function launchConfetti() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';

        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.background = `hsl(${Math.random() * 360},100%,50%)`;

        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 4000);
    }
}

//////////////////////////////////////////////////////
// 🚀 INIT EVERYTHING
//////////////////////////////////////////////////////

window.onload = () => {
    initFloatingMagic();
    initMemoryGame();
    loadQuestion();
    loadArpitaMsg();
};
