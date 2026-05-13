// 1. Khởi tạo AOS
AOS.init({ 
    duration: 1500, 
    once: true,
    easing: 'ease-out-quart'
});

// 2. Đồng hồ đếm ngược
const weddingDate = new Date("May 31, 2026 12:30:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const gap = weddingDate - now;
    const second = 1000, minute = second * 60, hour = minute * 60, day = hour * 24;

    const daysEl = document.getElementById("days");
    if (!daysEl) return;

    if (gap > 0) {
        document.getElementById("days").innerText = Math.floor(gap / day);
        document.getElementById("hours").innerText = Math.floor((gap % day) / hour);
        document.getElementById("minutes").innerText = Math.floor((gap % hour) / minute);
        document.getElementById("seconds").innerText = Math.floor((gap % minute) / second);
    } else {
        document.getElementById("countdown").innerHTML = "<h3>The Celebration has Begun!</h3>";
    }
}
setInterval(updateCountdown, 1000);
updateCountdown();

// 3. Slider ảnh tự động
function startImageSlider() {
    const slides = document.querySelectorAll('.slide');
    if (slides.length === 0) return;
    let currentIndex = 0;
    setInterval(() => {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add('active');
    }, 3000);
}

// 4. Khi load trang: Chặn cuộn và chạy Slider
document.addEventListener("DOMContentLoaded", function() {
    window.scrollTo(0, 0);
    startImageSlider();
});

// 5. Hàm quan trọng: Kích hoạt mọi thứ khi nhấn nút
function startEverything() {
    const music = document.getElementById('weddingMusic');
    const scrollText = document.querySelector('.scroll-down');
    const musicBtn = document.getElementById('music-control');

    // Hiệu ứng biến mất cho chữ
    if (scrollText) scrollText.classList.add('zoom-out-effect');

    // Phát nhạc
    if (music) {
        music.play().catch(e => console.log("Cần tương tác để phát nhạc"));
        if (musicBtn) musicBtn.classList.add('rotating');
    }

    // Mở khóa cuộn trang sau 0.6s
    setTimeout(() => {
        document.body.classList.remove('stop-scrolling');
        const nextSec = document.querySelector('.events-section');
        if (nextSec) nextSec.scrollIntoView({ behavior: 'smooth' });
    }, 600);
}

// 6. Nút tắt/mở nhạc thủ công
function toggleMusic() {
    const music = document.getElementById('weddingMusic');
    const musicBtn = document.getElementById('music-control');
    if (music.paused) {
        music.play();
        musicBtn.classList.add('rotating');
    } else {
        music.pause();
        musicBtn.classList.remove('rotating');
    }
}
