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
    }, 2500); // 2.5 giây đổi 1 lần
}

// Chạy hàm ngay khi load xong trang
window.addEventListener('DOMContentLoaded', startImageSlider);
const wishForm = document.getElementById("wishForm");

if (wishForm){

    wishForm.addEventListener("submit", async function(e){

        e.preventDefault();

        const formData = new FormData(wishForm);

        try {

            const response = await fetch(wishForm.action, {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if(response.ok){

                alert("💌 Gửi lời chúc thành công!");

                wishForm.reset();

            } else {

                alert("Có lỗi xảy ra!");

            }

        } catch(error){

            alert("Không thể gửi. Thử lại nhé!");

        }

    });

}
// =========================
// MUSIC CONTROL
// =========================

const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

// Tự phát nhạc khi user click lần đầu
window.addEventListener("click", () => {

    if(bgMusic.paused){

        bgMusic.play();

        musicBtn.classList.remove("paused");
    }

}, { once:true });


// Bật / tắt nhạc
musicBtn.addEventListener("click", () => {

    if(bgMusic.paused){

        bgMusic.play();

        musicBtn.classList.remove("paused");

    } else {

        bgMusic.pause();

        musicBtn.classList.add("paused");
    }

});
// =========================
// FORM KHÔNG NHẢY TRANG
// =========================

document.addEventListener("DOMContentLoaded", () => {

    const wishForm = document.getElementById("wishForm");

    if(wishForm){

        wishForm.addEventListener("submit", async (e) => {

            e.preventDefault();

            const formData = new FormData(wishForm);

            try {

                const response = await fetch(
                    "https://formspree.io/f/xjgldjak",
                    {
                        method: "POST",
                        body: formData,
                        headers: {
                            'Accept': 'application/json'
                        }
                    }
                );

                if(response.ok){

                    alert("💌 Gửi lời chúc thành công!");

                    wishForm.reset();

                } else {

                    alert("Có lỗi xảy ra!");

                }

            } catch(error){

                alert("Không gửi được!");

            }

        });

    }

});
