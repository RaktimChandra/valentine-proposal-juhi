// ===== AURORA BACKGROUND ANIMATION =====
const auroraCanvas = document.getElementById('aurora-canvas');
const auroraCtx = auroraCanvas.getContext('2d');

auroraCanvas.width = window.innerWidth;
auroraCanvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    auroraCanvas.width = window.innerWidth;
    auroraCanvas.height = window.innerHeight;
});

class AuroraWave {
    constructor(y, speed, color) {
        this.y = y;
        this.speed = speed;
        this.color = color;
        this.offset = 0;
    }
    
    draw() {
        this.offset += this.speed;
        auroraCtx.beginPath();
        
        for (let x = 0; x < auroraCanvas.width; x++) {
            const y = this.y + Math.sin((x + this.offset) * 0.01) * 50;
            if (x === 0) {
                auroraCtx.moveTo(x, y);
            } else {
                auroraCtx.lineTo(x, y);
            }
        }
        
        auroraCtx.lineTo(auroraCanvas.width, auroraCanvas.height);
        auroraCtx.lineTo(0, auroraCanvas.height);
        auroraCtx.closePath();
        
        const gradient = auroraCtx.createLinearGradient(0, this.y - 100, 0, this.y + 200);
        gradient.addColorStop(0, this.color + '00');
        gradient.addColorStop(0.5, this.color + '40');
        gradient.addColorStop(1, this.color + '00');
        
        auroraCtx.fillStyle = gradient;
        auroraCtx.fill();
    }
}

const auroraWaves = [
    new AuroraWave(100, 0.5, '#e91e63'),
    new AuroraWave(200, 0.3, '#9c27b0'),
    new AuroraWave(300, 0.7, '#3f51b5')
];

function animateAurora() {
    auroraCtx.clearRect(0, 0, auroraCanvas.width, auroraCanvas.height);
    auroraWaves.forEach(wave => wave.draw());
    requestAnimationFrame(animateAurora);
}

animateAurora();

// ===== PARTICLE SYSTEM =====
const particleCanvas = document.getElementById('particle-canvas');
const particleCtx = particleCanvas.getContext('2d');

particleCanvas.width = window.innerWidth;
particleCanvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    particleCanvas.width = window.innerWidth;
    particleCanvas.height = window.innerHeight;
});

class Particle {
    constructor() {
        this.x = Math.random() * particleCanvas.width;
        this.y = Math.random() * particleCanvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.2;
    }
    
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > particleCanvas.width) this.x = 0;
        if (this.x < 0) this.x = particleCanvas.width;
        if (this.y > particleCanvas.height) this.y = 0;
        if (this.y < 0) this.y = particleCanvas.height;
    }
    
    draw() {
        particleCtx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        particleCtx.beginPath();
        particleCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        particleCtx.fill();
    }
}

const particles = [];
for (let i = 0; i < 100; i++) {
    particles.push(new Particle());
}

function animateParticles() {
    particleCtx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
    
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });
    
    // Draw connections
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
                particleCtx.strokeStyle = `rgba(255, 255, 255, ${0.2 * (1 - distance / 100)})`;
                particleCtx.lineWidth = 0.5;
                particleCtx.beginPath();
                particleCtx.moveTo(particles[i].x, particles[i].y);
                particleCtx.lineTo(particles[j].x, particles[j].y);
                particleCtx.stroke();
            }
        }
    }
    
    requestAnimationFrame(animateParticles);
}

animateParticles();

// ===== COUNTDOWN TIMER =====
// Set your special date here (when you met)
const meetingDate = new Date('2024-02-14T00:00:00'); // Approximately 2 years together!

function updateCountdown() {
    const now = new Date();
    const diff = now - meetingDate;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// ===== 100 REASONS I LOVE YOU =====
const reasons = [
    "Your smile lights up my entire world",
    "The way you laugh at my silly jokes",
    "Your kindness towards everyone",
    "How you make me feel loved every day",
    "Your beautiful eyes that I could get lost in",
    "The way you hold my hand",
    "Your passion for life",
    "How you support my dreams",
    "Your incredible strength",
    "The way you care for others",
    "Your adorable quirks",
    "How you make ordinary moments special",
    "Your intelligence and wisdom",
    "The way you understand me",
    "Your warm hugs",
    "How you believe in me",
    "Your amazing sense of humor",
    "The way you inspire me",
    "Your gentle heart",
    "How you make me a better person",
    "Your love for adventure",
    "The way you listen to me",
    "Your beautiful soul",
    "How you always know what to say",
    "Your positive energy",
    "How your eyes light up when you talk about your passions",
    "The way you never give up on us",
    "How your presence calms all my fears",
    "Your creativity",
    "How you remember my favorite things",
    "Your thoughtfulness",
    "How you remember little details",
    "Your confidence",
    "How you accept all my flaws and love me anyway",
    "Your patience with me",
    "How you make me laugh",
    "How you always tell me the truth, even when it's hard",
    "How you inspire me to chase my dreams",
    "Your compassion",
    "The way you choose love over anger",
    "Your loyalty",
    "The way you challenge me",
    "Your grace",
    "How you bring out the best in me",
    "Your spontaneity",
    "The way you comfort me",
    "Your wisdom",
    "How you make me feel special",
    "Your resilience",
    "How completely you give your heart to me",
    "Your generosity",
    "How you share your world with me",
    "Your authenticity",
    "The way you accept me",
    "Your courage",
    "How you make home feel like home",
    "Your tenderness",
    "The way you believe in us",
    "The way you find light in the darkest moments",
    "How you stand by me",
    "Your gentleness",
    "How you worry about me even when I'm fine",
    "Your empathy",
    "How you celebrate my victories",
    "Your trustworthiness",
    "The way you motivate me",
    "Your playfulness",
    "How you make me feel alive",
    "Your dedication",
    "The way you make every moment memorable",
    "Your warmth",
    "How you respect me",
    "Your independence",
    "The way you appreciate the little things",
    "Your selflessness",
    "How you make me want to be better",
    "Your joy",
    "The way you see beauty everywhere",
    "How you understand me without words",
    "How you remember what matters",
    "Your integrity",
    "The way you keep your promises",
    "Your humility",
    "How you make every day brighter",
    "Your passion",
    "How your love makes me want to be a better person",
    "Your faith in me",
    "How you are my best friend",
    "Your presence",
    "The way you complete me",
    "Your love",
    "How you chose me",
    "Your forever",
    "The way you are simply... YOU",
    "How you make me believe in forever",
    "Your everything",
    "The way you are my soulmate",
    "How you are my one and only",
    "Your perfect imperfections",
    "The way you are my home",
    "Because you are the love of my life"
];

function revealReasons() {
    const grid = document.getElementById('reasonsGrid');
    const btn = document.querySelector('.reveal-btn');
    
    if (grid.style.display === 'none') {
        grid.style.display = 'grid';
        btn.style.display = 'none';
        
        reasons.forEach((reason, index) => {
            setTimeout(() => {
                const card = document.createElement('div');
                card.className = 'reason-card';
                card.style.animationDelay = `${index * 0.05}s`;
                card.innerHTML = `
                    <div class="reason-number">#${index + 1}</div>
                    <div class="reason-text">${reason}</div>
                `;
                grid.appendChild(card);
            }, index * 50);
        });
    }
}

// ===== LOVE QUIZ =====
const quizQuestions = [
    {
        question: "What is Juhi's favorite thing about us?",
        options: ["Our silly moments", "Our deep conversations", "Our inside jokes", "All of the above"],
        correct: 3
    },
    {
        question: "What makes our love special?",
        options: ["Our trust", "Our laughter", "Our understanding", "Everything together"],
        correct: 3
    },
    {
        question: "What do I love most about Juhi?",
        options: ["Her smile", "Her heart", "Her soul", "Everything"],
        correct: 3
    },
    {
        question: "Where do we belong?",
        options: ["Together", "Forever", "In each other's hearts", "All of the above"],
        correct: 3
    },
    {
        question: "What is our future?",
        options: ["Bright", "Beautiful", "Forever together", "All of the above"],
        correct: 3
    }
];

let currentQuestion = 0;

function startQuiz() {
    currentQuestion = 0;
    showQuestion();
}

function showQuestion() {
    if (currentQuestion >= quizQuestions.length) {
        document.getElementById('quizCard').style.display = 'none';
        document.getElementById('quizScore').style.display = 'block';
        createCelebrationHearts();
        return;
    }
    
    const q = quizQuestions[currentQuestion];
    document.getElementById('quizQuestion').textContent = q.question;
    
    const optionsDiv = document.getElementById('quizOptions');
    optionsDiv.innerHTML = '';
    
    q.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'quiz-option';
        optionDiv.textContent = option;
        optionDiv.onclick = () => selectAnswer(index);
        optionsDiv.appendChild(optionDiv);
    });
    
    document.querySelector('.quiz-btn').textContent = 'Next Question';
    document.querySelector('.quiz-btn').onclick = () => {
        currentQuestion++;
        showQuestion();
    };
}

function selectAnswer(index) {
    const options = document.querySelectorAll('.quiz-option');
    options.forEach(opt => opt.classList.remove('correct'));
    options[index].classList.add('correct');
    
    setTimeout(() => {
        currentQuestion++;
        showQuestion();
    }, 1000);
}

function createCelebrationHearts() {
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '💖';
            heart.style.cssText = `
                position: fixed;
                font-size: ${30 + Math.random() * 40}px;
                left: ${Math.random() * 100}%;
                top: 100%;
                animation: float-up 3s ease-out forwards;
                z-index: 3000;
                pointer-events: none;
            `;
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 3000);
        }, i * 100);
    }
}

// Music Player
const musicToggle = document.getElementById('music-toggle');
const backgroundMusic = document.getElementById('background-music');
let isPlaying = false;

musicToggle.addEventListener('click', () => {
    if (isPlaying) {
        backgroundMusic.pause();
        musicToggle.innerHTML = '<i class="fas fa-music"></i><span>Play Music</span>';
    } else {
        backgroundMusic.play().catch(e => {
            console.log('Audio play failed:', e);
            alert('Please add a music file to the music folder! See instructions below.');
        });
        musicToggle.innerHTML = '<i class="fas fa-pause"></i><span>Pause Music</span>';
    }
    isPlaying = !isPlaying;
});

// Smooth Scroll Navigation
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Photo Modal
function openPhotoModal(photoId) {
    const modal = document.getElementById('photoModal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Add custom messages based on photo ID
    const modalPhoto = modal.querySelector('.photo-placeholder-large p');
    const messages = {
        1: "The day our story began - I'll never forget how you smiled",
        2: "Every moment with you is precious and unforgettable",
        3: "Your happiness is my favorite thing in the world",
        4: "Adventures are better when you're by my side",
        5: "In your arms, I've found my home",
        6: "Building our future, one dream at a time"
    };
    
    modalPhoto.textContent = messages[photoId] || "Our precious memory together";
}

function closePhotoModal() {
    const modal = document.getElementById('photoModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    const modal = document.getElementById('photoModal');
    if (event.target === modal) {
        closePhotoModal();
    }
});

// Proposal Handlers
function handleYes() {
    // Hide proposal section
    document.getElementById('proposal').style.display = 'none';
    
    // Show celebration section
    const celebration = document.getElementById('celebration');
    celebration.style.display = 'block';
    
    // Scroll to celebration
    setTimeout(() => {
        celebration.scrollIntoView({ behavior: 'smooth' });
    }, 100);
    
    // Create celebration effects
    createFireworks();
    createConfetti();
    createFloatingHearts();
    
    // Play celebration sound (if available)
    playCelebrationSound();
    
    // Show success message
    setTimeout(() => {
        showSuccessMessage();
    }, 1000);
}

function handleNo() {
    const noBtn = document.querySelector('.no-btn');
    const messages = [
        "Are you sure? 🥺",
        "Think about it again... 💕",
        "I'll wait forever for you ⏰",
        "But we're perfect together! 🌟",
        "One more chance? 💝",
        "Please say yes... 🙏",
        "I love you so much! ❤️",
        "Forever and always? 💍"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    noBtn.textContent = randomMessage;
    
    // Make the button move away on hover
    noBtn.style.position = 'relative';
    noBtn.addEventListener('mouseenter', function moveButton() {
        const maxX = window.innerWidth - this.offsetWidth - 100;
        const maxY = window.innerHeight - this.offsetHeight - 100;
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;
        
        this.style.transform = `translate(${randomX}px, ${randomY}px)`;
        this.removeEventListener('mouseenter', moveButton);
        
        setTimeout(() => {
            this.addEventListener('mouseenter', moveButton);
        }, 1000);
    });
}

// Celebration Effects
function createFireworks() {
    const fireworksContainer = document.querySelector('.fireworks');
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            createFirework(fireworksContainer);
        }, i * 200);
    }
}

function createFirework(container) {
    const firework = document.createElement('div');
    firework.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: ${getRandomColor()};
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: firework-explode 1s ease-out forwards;
    `;
    
    container.appendChild(firework);
    
    // Create explosion particles
    setTimeout(() => {
        createExplosion(firework.offsetLeft, firework.offsetTop, container);
        firework.remove();
    }, 500);
}

function createExplosion(x, y, container) {
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        const angle = (i * 30) * Math.PI / 180;
        const velocity = 50 + Math.random() * 50;
        
        particle.style.cssText = `
            position: absolute;
            width: 3px;
            height: 3px;
            background: ${getRandomColor()};
            border-radius: 50%;
            left: ${x}px;
            top: ${y}px;
            animation: explode 1s ease-out forwards;
        `;
        
        container.appendChild(particle);
        
        setTimeout(() => particle.remove(), 1000);
    }
}

function createConfetti() {
    const confettiContainer = document.querySelector('.confetti');
    const colors = ['#e91e63', '#f06292', '#4caf50', '#66bb6a', '#ffd54f', '#ffb300'];
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: absolute;
            width: 10px;
            height: 10px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            left: ${Math.random() * 100}%;
            top: -20px;
            animation: confetti-fall ${3 + Math.random() * 2}s linear forwards;
            transform: rotate(${Math.random() * 360}deg);
        `;
        
        confettiContainer.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 5000);
    }
}

function createFloatingHearts() {
    const celebration = document.getElementById('celebration');
    
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.style.cssText = `
                position: absolute;
                font-size: ${20 + Math.random() * 30}px;
                left: ${Math.random() * 100}%;
                bottom: -50px;
                animation: float-up ${4 + Math.random() * 3}s ease-out forwards;
                opacity: 0.8;
            `;
            
            celebration.appendChild(heart);
            
            setTimeout(() => heart.remove(), 7000);
        }, i * 100);
    }
}

function playCelebrationSound() {
    // Create a simple celebration sound using Web Audio API
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    function playTone(frequency, duration) {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = frequency;
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + duration);
    }
    
    // Play a little celebration melody
    const notes = [523, 587, 659, 698, 784, 880, 987, 1046]; // C major scale
    notes.forEach((note, index) => {
        setTimeout(() => playTone(note, 0.3), index * 100);
    });
}

function showSuccessMessage() {
    const celebration = document.getElementById('celebration');
    const message = document.createElement('div');
    message.innerHTML = `
        <div style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            text-align: center;
            z-index: 3000;
            animation: success-pop 0.5s ease-out;
        ">
            <h2 style="font-family: 'Dancing Script', cursive; font-size: 3rem; color: #e91e63; margin-bottom: 20px;">
                💕 She Said YES! 💕
            </h2>
            <p style="font-size: 1.3rem; color: #666; margin-bottom: 30px;">
                Get ready for the most amazing journey together!
            </p>
            <button onclick="this.parentElement.remove()" style="
                background: linear-gradient(135deg, #e91e63, #f06292);
                color: white;
                border: none;
                padding: 15px 30px;
                border-radius: 25px;
                font-size: 1.1rem;
                cursor: pointer;
                font-family: 'Montserrat', sans-serif;
                font-weight: 600;
            ">
                Begin Forever 💍
            </button>
        </div>
    `;
    
    celebration.appendChild(message);
    
    setTimeout(() => {
        if (message.parentElement) {
            message.remove();
        }
    }, 10000);
}

// Utility functions
function getRandomColor() {
    const colors = ['#e91e63', '#f06292', '#4caf50', '#66bb6a', '#ffd54f', '#ffb300', '#2196f3', '#42a5f5'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes firework-explode {
        0% { transform: scale(1); opacity: 1; }
        100% { transform: scale(0); opacity: 0; }
    }
    
    @keyframes explode {
        0% { transform: translate(0, 0) scale(1); opacity: 1; }
        100% { 
            transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) scale(0); 
            opacity: 0; 
        }
    }
    
    @keyframes confetti-fall {
        0% { transform: translateY(0) rotate(0deg); opacity: 1; }
        100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
    }
    
    @keyframes float-up {
        0% { transform: translateY(0) rotate(0deg); opacity: 0.8; }
        100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
    }
    
    @keyframes success-pop {
        0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
        50% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }
        100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
    }
`;
document.head.appendChild(style);

// Parallax effect on scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hearts-background');
    if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add interactive heart animations on click
document.addEventListener('click', (e) => {
    if (e.target.closest('.cta-button') || e.target.closest('.yes-btn')) {
        createClickHeart(e.pageX, e.pageY);
    }
});

function createClickHeart(x, y) {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        font-size: 20px;
        pointer-events: none;
        animation: click-heart 1s ease-out forwards;
        z-index: 1000;
    `;
    
    document.body.appendChild(heart);
    
    setTimeout(() => heart.remove(), 1000);
}

// Add click heart animation
const clickHeartStyle = document.createElement('style');
clickHeartStyle.textContent = `
    @keyframes click-heart {
        0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
        100% { transform: translate(-50%, -150%) scale(1.5); opacity: 0; }
    }
`;
document.head.appendChild(clickHeartStyle);

// Initialize page with entrance animations
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closePhotoModal();
    }
    
    // Easter egg: Konami code for extra effects
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    if (!window.konamiInput) window.konamiInput = [];
    
    if (e.key === konamiCode[window.konamiInput.length]) {
        window.konamiInput.push(e.key);
        if (window.konamiInput.length === konamiCode.length) {
            activateEasterEgg();
            window.konamiInput = [];
        }
    } else {
        window.konamiInput = [];
    }
});

function activateEasterEgg() {
    // Create rainbow hearts and extra effects
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = ['❤️', '💕', '💖', '💗', '💝', '💘', '💞', '💓'][Math.floor(Math.random() * 8)];
            heart.style.cssText = `
                position: fixed;
                font-size: ${20 + Math.random() * 40}px;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: easter-egg-float ${2 + Math.random() * 3}s ease-out forwards;
                z-index: 1000;
            `;
            
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 5000);
        }, i * 50);
    }
    
    // Add easter egg animation
    const easterEggStyle = document.createElement('style');
    easterEggStyle.textContent = `
        @keyframes easter-egg-float {
            0% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 1; }
            100% { transform: translate(${Math.random() * 400 - 200}px, ${Math.random() * 400 - 200}px) rotate(720deg) scale(0); opacity: 0; }
        }
    `;
    document.head.appendChild(easterEggStyle);
}
