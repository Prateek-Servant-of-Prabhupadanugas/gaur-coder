// Synchronized heading & background carousel
        (function() {
            const topics = [
                "AI Automation",
                "Python",
                "Artificial Intelligence",
                "Machine Learning",
                "Data Science",
                "App Development"
            ];
            const imgs = document.querySelectorAll('.hero-carousel-bg .carousel-img');
            const topicSpan = document.getElementById('hero-topic');
            let idx = 0;
            setInterval(() => {
                // Fade out topic
                topicSpan.style.opacity = 0;
                setTimeout(() => {
                    // Change topic text
                    topicSpan.textContent = topics[idx];
                    // Change background
                    imgs.forEach((img, i) => img.classList.toggle('active', i === idx));
                    // Fade in topic
                    topicSpan.style.opacity = 1;
                    // Next index
                    idx = (idx + 1) % topics.length;
                }, 400);
            }, 3800);
        })();

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Hamburger menu functionality
        const hamburger = document.getElementById('hamburger-menu');
        const mobileNav = document.getElementById('mobile-nav');
        
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            mobileNav.classList.toggle('open');
        });

        // Close mobile menu when a link is clicked
        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('open');
                mobileNav.classList.remove('open');
            });
        });

        // 3D Cube interaction: mouse drag on desktop, touch swipe + arrow keys on mobile
        (function(){
    const cube = document.getElementById('cube');
    const wrap = document.getElementById('cubeWrap');
    let rotX = -18, rotY = 22;
    let auto = true;
    let hovering = false;
    let frame;

    function render() {
        if (auto) {
            rotY += 0.6;
            rotX += 0.15;
        }
        cube.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
        frame = requestAnimationFrame(render);
    }

    function setRotationFromPointer(x, y, rect) {
        // x, y: pointer position relative to wrap
        const percentX = (x / rect.width - 0.5) * 2; // -1 to 1
        const percentY = (y / rect.height - 0.5) * 2; // -1 to 1
        rotY = percentX * 60;
        rotX = -percentY * 60;
        cube.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    }

    wrap.addEventListener('mouseenter', () => {
        auto = false;
        hovering = true;
    });
    wrap.addEventListener('mouseleave', () => {
        auto = true;
        hovering = false;
    });
    wrap.addEventListener('mousemove', (e) => {
        if (!hovering) return;
        const rect = wrap.getBoundingClientRect();
        setRotationFromPointer(e.clientX - rect.left, e.clientY - rect.top, rect);
    });

    // Touch support for mobile
    wrap.addEventListener('touchstart', (e) => {
        auto = false;
        hovering = true;
        const t = e.touches[0];
        const rect = wrap.getBoundingClientRect();
        setRotationFromPointer(t.clientX - rect.left, t.clientY - rect.top, rect);
    });
    wrap.addEventListener('touchmove', (e) => {
        if (!hovering) return;
        const t = e.touches[0];
        const rect = wrap.getBoundingClientRect();
        setRotationFromPointer(t.clientX - rect.left, t.clientY - rect.top, rect);
    });
    wrap.addEventListener('touchend', () => {
        auto = true;
        hovering = false;
    });

    // Start animation
    render();
})();

    function openEnrollPopup() {
    document.getElementById('enroll-popup').style.display = 'flex';
    }
    function closeEnrollPopup() {
    document.getElementById('enroll-popup').style.display = 'none';
    document.getElementById('enroll-status').textContent = '';
    document.getElementById('enroll-form').reset();
    }

    const scriptURL = 'https://script.google.com/macros/s/AKfycbxb0kkLbhGSibG9_gWaVF1Vffg8H7AialAYVLkQlAdvdPiie0G6VzNdZ1hQlViYHXWE/exec';


    const form = document.getElementById('enroll-form');
    form.addEventListener('submit', function(e) {
    e.preventDefault();
    const status = document.getElementById('enroll-status');
    status.textContent = 'Submitting...';
    const formData = new FormData(form);
    fetch(scriptURL, {
        method: 'POST',
        body: formData
    })
    .then(res => res.text())
    .then(txt => {
        status.textContent = 'Thank you! Your enrollment is received.';
        setTimeout(closeEnrollPopup, 1800);
    })
    .catch(err => {
        status.textContent = 'Error. Please try again.';
    });
    });

    // Handling Scrolling and sticking of section 2 
    const stickyElement = document.getElementById('cube-section');

    