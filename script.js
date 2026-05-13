// 1. Khởi tạo AOS với cấu hình mượt mà
AOS.init({ 
    duration: 1500, 
    once: true,
    easing: 'ease-out-quart'
});

// 2. Countdown - Ngày cưới: 31/05/2026
const weddingDate = new Date("May 31, 2026 12:30:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const gap = weddingDate - now;

    const second = 1000, minute = second * 60, hour = minute * 60, day = hour * 24;

    // Kiểm tra xem các phần tử có tồn tại không trước khi gán giá trị để tránh lỗi dừng script
    const daysEl = document.getElementById("days");
    if (!daysEl) return; 

    if (gap > 0) {
        daysEl.innerText = Math.floor(gap / day);
        document.getElementById("hours").innerText = Math.floor((gap % day) / hour);
        document.getElementById("minutes").innerText = Math.floor((gap % hour) / minute);
        document.getElementById("seconds").innerText = Math.floor((gap % minute) / second);
    } else {
        document.getElementById("countdown").innerHTML = "<h3 style='font-family: var(--font-serif); font-size: 2rem;'>The Celebration has Begun!</h3>";
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();

// 3. Hiệu ứng Parallax - CHỈ CHẠY TRÊN MÁY TÍNH (Để tránh lỗi đứng yên trên điện thoại)
window.addEventListener('scroll', () => {
    if (window.innerWidth > 768) { // Chỉ chạy nếu màn hình rộng hơn 768px
        const scrollPos = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.backgroundPositionY = (scrollPos * 0.4) + 'px';
        }
    }
});

// 4. Slider ảnh kỷ niệm
function startImageSlider() {
    const slides = document.querySelectorAll('.slide');
    if (slides.length === 0) return;

    let currentIndex = 0;

    setInterval(() => {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add('active');
    }, 3000); // 3 giây đổi 1 lần cho đỡ bị nhanh quá
}

// Chạy các hàm khi trang đã tải xong
window.addEventListener('DOMContentLoaded', () => {
    startImageSlider();
    
    // Xử lý cuộn mượt cho các link # (Sửa lỗi nhấn vào đứng yên)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
