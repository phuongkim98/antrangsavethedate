// Khởi tạo AOS
AOS.init({ 
    duration: 1500, 
    once: true,
    easing: 'ease-out-quart'
});


// =========================
// COUNTDOWN
// =========================

const weddingDate = new Date("May 31, 2026 12:30:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();
    const gap = weddingDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    if (gap > 0) {

        document.getElementById("days").innerText =
            Math.floor(gap / day);

        document.getElementById("hours").innerText =
            Math.floor((gap % day) / hour);

        document.getElementById("minutes").innerText =
            Math.floor((gap % hour) / minute);

        document.getElementById("seconds").innerText =
            Math.floor((gap % minute) / second);

    } else {

        document.getElementById("countdown").innerHTML =
            "<h3>The Celebration has Begun!</h3>";
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();


// =========================
// PARALLAX HERO
// =========================

window.addEventListener('scroll', () => {

    const scrollPos = window.pageYOffset;

    const hero = document.querySelector('.hero');

    hero.style.backgroundPositionY =
        (scrollPos * 0.4) + 'px';
});


// =========================
// IMAGE SLIDER
// =========================

function startImageSlider() {

    const slides = document.querySelectorAll('.slide');

    if (slides.length === 0) return;

    let currentIndex = 0;

    setInterval(() => {

        slides[currentIndex].classList.remove('active');

        currentIndex =
            (currentIndex + 1) % slides.length;

        slides[currentIndex].classList.add('active');

    }, 2500);
}

window.addEventListener(
    'DOMContentLoaded',
    startImageSlider
);


// =========================
// MUSIC CONTROL
// =========================

const bgMusic =
    document.getElementById("bgMusic");

const musicBtn =
    document.getElementById("musicBtn");

window.addEventListener("click", () => {

    if(bgMusic.paused){

        bgMusic.play();

        musicBtn.classList.remove("paused");
    }

}, { once:true });


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

    // FORM LỜI CHÚC
    const wishForm =
        document.getElementById("wishForm");

    if(wishForm){

        wishForm.addEventListener(
            "submit",
            async (e) => {

            e.preventDefault();

            const formData =
                new FormData(wishForm);

            try {

                const response =
                    await fetch(
                    wishForm.action,
                    {
                        method: "POST",
                        body: formData,
                        headers: {
                            'Accept': 'application/json'
                        }
                    });

                if(response.ok){

                    alert(
                        "💌 Gửi lời chúc thành công!"
                    );

                    wishForm.reset();

                } else {

                    alert("Có lỗi xảy ra!");
                }

            } catch(error){

                alert("Không gửi được!");
            }

        });
    }


    // FORM RSVP
    const rsvpForm =
        document.getElementById("rsvpForm");

    if(rsvpForm){

        rsvpForm.addEventListener(
            "submit",
            async (e) => {

            e.preventDefault();

            const formData =
                new FormData(rsvpForm);

            try {

                const response =
                    await fetch(
                    rsvpForm.action,
                    {
                        method: "POST",
                        body: formData,
                        headers: {
                            'Accept': 'application/json'
                        }
                    });

                if(response.ok){

                    alert(
                        "✨ Cảm ơn bạn đã phản hồi!"
                    );

                    rsvpForm.reset();

                } else {

                    alert("Có lỗi xảy ra!");
                }

            } catch(error){

                alert("Không gửi được!");
            }

        });
    }

});
// =========================
// STORY SLIDER
// =========================

function startStorySlider(){

    const slides =
        document.querySelectorAll('.story-slide');

    if(slides.length === 0) return;

    let current = 0;

    setInterval(() => {

        slides[current]
            .classList.remove('active');

        current =
            (current + 1) % slides.length;

        slides[current]
            .classList.add('active');

    }, 3000);
}

window.addEventListener(
    'DOMContentLoaded',
    startStorySlider
);
