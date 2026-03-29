document.addEventListener("DOMContentLoaded", () => {
    const banner = document.querySelector('.cookies_banner');
    const acceptBtn = document.getElementById('accept-cookies');
    const rejectBtn = document.getElementById('reject-cookies');
    const hideBanner = () => {
        if (banner) {
            banner.classList.add('hidden');
            setTimeout(() => {
                banner.style.display = 'none';
            }, 500);
        }
    };
    if (acceptBtn) acceptBtn.addEventListener('click', hideBanner);
    if (rejectBtn) rejectBtn.addEventListener('click', hideBanner);
});

function toggleAcc(id) {
    const item = document.getElementById(id);

    document.querySelectorAll('.accordion').forEach(acc => {
        if (acc.id !== id) acc.classList.remove('accordion--active');
    });

    item.classList.toggle('accordion--active');
}


document.addEventListener('mousemove', function (e) {
    const intro = document.querySelector('.intro');
    if (!intro) return;

    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const x = (mouseX / window.innerWidth) * 50;
    const y = (mouseY / window.innerHeight) * 50;

    intro.style.backgroundPosition = `calc(50% + ${x}px) calc(50% + ${y}px)`;
});

window.addEventListener('DOMContentLoaded', () => {
    const introContent = document.querySelector('.intro');
    setTimeout(() => {
        introContent.style.opacity = '1';
        introContent.style.transform = 'translateY(0)';
    }, 200);
});