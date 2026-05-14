AOS.init({ duration: 1500, once: true });

// Nhạc nền
const audio = document.getElementById('bgMusic');
const icon = document.getElementById('music-icon');

function toggleMusic() {
    if (audio.paused) { audio.play(); icon.innerText = "⏸️"; }
    else { audio.pause(); icon.innerText = "🎵"; }
}

// Countdown 31/05/2026
const weddingDate = new Date("May 31, 2026 12:30:00").getTime();
setInterval(() => {
    const now = new Date().getTime();
    const gap = weddingDate - now;
    const d = 1000 * 60 * 60 * 24;
    const h = d / 24, m = h / 60, s = m / 60;
    if (gap > 0) {
        document.getElementById("days").innerText = Math.floor(gap / d);
        document.getElementById("hours").innerText = Math.floor((gap % d) / h);
        document.getElementById("minutes").innerText = Math.floor((gap % h) / m);
        document.getElementById("seconds").innerText = Math.floor((gap % m) / s);
    }
}, 1000);

// Slider
let current = 0;
const slides = document.querySelectorAll('.slide');
if (slides.length > 0) {
    setInterval(() => {
        slides[current].classList.remove('active');
        current = (current + 1) % slides.length;
        slides[current].classList.add('active');
    }, 3000);
}

// Tự động phát nhạc khi cuộn lần đầu
window.addEventListener('scroll', () => {
    if (audio.paused) audio.play().then(() => icon.innerText = "⏸️").catch(() => {});
}, { once: true });
