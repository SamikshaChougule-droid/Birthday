// ✨ Initialize 200+ floating hearts & sparkles
function initFloatingMagic() {
    const container = document.getElementById('floatingMagic');
    const hearts = ['💖','💕','💝','💗','🩷','💓','💞'];
    const sparkles = ['✨','⭐','🌟','💫','🌈','🎇'];
    
    // Hearts every 200ms
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart-float';
        heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 4 + 8) + 's';
        container.appendChild(heart);
        setTimeout(() => heart.remove(), 12000);
    }, 200);
    
    // Sparkles every 500ms
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

// Music control
let musicPlaying = false;
function toggleMusic() {
    const music = document.getElementById('birthdayMusic');
    musicPlaying = !musicPlaying;
    if (musicPlaying) {
        music.play().catch(e => console.log('Music autoplay blocked'));
        event.target.innerHTML = '<i class="fas fa-volume-up"></i> 🎵 Party ON!';
    } else {
        music.pause();
        event.target.innerHTML = '<i class="fas fa-music"></i> 🎵
