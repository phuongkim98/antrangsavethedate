// Khởi tạo AOS với cấu hình mượt mà
AOS.init({ 
    duration: 1500, 
    once: true,
    easing: 'ease-out-quart'
});

// Ngày cưới dự kiến: 15/05/2026
const weddingDate = new Date("May 31, 2026 12:30:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const gap = weddingDate - now;

    const second = 1000, minute = second * 60, hour = minute * 60, day = hour * 24;

    if (gap > 0) {
        document.getElementById("days").innerText = Math.floor(gap / day);
        document.getElementById("hours").innerText = Math.floor((gap % day) / hour);
        document.getElementById("minutes").innerText = Math.floor((gap % hour) / minute);
        document.getElementById("seconds").innerText = Math.floor((gap % minute) / second);
    } else {
        document.getElementById("countdown").innerHTML = "<h3 style='font-family: var(--font-serif); font-size: 2rem;'>The Celebration has Begun!</h3>";
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Hiệu ứng Parallax cho ảnh nền Hero khi cuộn
window.addEventListener('scroll', () => {
    const scrollPos = window.pageYOffset;
    const hero = document.querySelector('.hero');
    hero.style.backgroundPositionY = (scrollPos * 0.4) + 'px';
});
function startImageSlider() {
    const slides = document.querySelectorAll('.slide');
    if (slides.length === 0) return;

    let currentIndex = 0;

    setInterval(() => {
        // Gỡ bỏ trạng thái hiện tại
        slides[currentIndex].classList.remove('active');
        
        // Tính toán ảnh tiếp theo
        currentIndex = (currentIndex + 1) % slides.length;
        
        // Hiển thị ảnh mới
        slides[currentIndex].classList.add('active');
    }, 3000); // 3 giây đổi 1 lần
}

// 1. NGAY KHI MỞ WEB: Chặn cuộn trang luôn
document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add('stop-scrolling');
    window.scrollTo(0, 0); // Đảm bảo luôn ở đầu trang khi mở
});

// 2. HÀM KHI NHẤP VÀO CHỮ "CUỘN XUỐNG ĐỂ XEM"
function startEverything() {
    const music = document.getElementById('weddingMusic');
    const scrollText = document.querySelector('.scroll-down');
    const musicBtn = document.getElementById('music-control');

    // Hiệu ứng chữ zoom to và biến mất
    if (scrollText) {
        scrollText.classList.add('zoom-out-effect');
    }

    // Phát nhạc
    if (music) {
        music.play().catch(e => console.log("Trình duyệt chặn autoplay:", e));
        if (musicBtn) musicBtn.classList.add('rotating');
    }

    // Đợi 0.5s cho hiệu ứng đẹp rồi mới mở khóa cuộn và nhảy xuống
    setTimeout(() => {
        document.body.classList.remove('stop-scrolling'); // MỞ KHÓA CUỘN TRANG
        
        // Tự động nhảy xuống phần sự kiện
        const nextSection = document.querySelector('.events-section');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    }, 600);
}

// Giữ lại hàm toggle nhạc cho nút tròn ở góc
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
.zoom-out-effect {
    transform: scale(3); /* Phóng to gấp 3 lần */
    opacity: 0 !important;
    transition: all 0.8s ease-out; /* Chạy trong 0.8 giây */
    pointer-events: none; /* Tránh việc nhấn liên tiếp */
}

.scroll-down {
    display: inline-block;
    color: white; /* Chữ màu trắng như bà muốn */
    text-decoration: none;
    font-size: 0.9rem;
    letter-spacing: 2px;
    cursor: pointer;
    transition: 0.3s;
}
}

