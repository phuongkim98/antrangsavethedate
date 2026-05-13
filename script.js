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

// Chạy hàm ngay khi load xong trang
window.addEventListener('DOMContentLoaded', startImageSlider);
const music = document.getElementById('weddingMusic');

// Hàm này sẽ chạy ngay khi người dùng chạm/click vào bất cứ đâu trên trang web
document.addEventListener('click', function() {
    if (music.paused) {
        music.play();
        // Thêm hiệu ứng cho nút nhạc nếu bà có làm nút
        const musicBtn = document.getElementById('music-control');
        if(musicBtn) musicBtn.classList.add('rotating');
    }
}, { once: true }); // "once: true" đảm bảo lệnh này chỉ chạy 1 lần duy nhất khi mở web

function startEverything() {
    // 1. Phát nhạc
    const music = document.getElementById('weddingMusic');
    if (music) {
        music.play().catch(error => {
            console.log("Trình duyệt chặn nhạc, cần tương tác thêm:", error);
        });
    }

    // 2. Cuộn xuống phần nội dung bên dưới
    // Giả sử phần tiếp theo của bà có id hoặc class là .content
    const nextSection = document.querySelector('.full-width-photo') || document.querySelector('section:nth-of-type(2)');
    
    if (nextSection) {
        nextSection.scrollIntoView({ 
            behavior: 'smooth' // Cuộn mượt mà
        });
    }
    /* Hiệu ứng phóng to và biến mất */
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

