const asideLinks = document.querySelectorAll('.aside-link');

asideLinks.forEach(function(asideLink) {
    asideLink.addEventListener('mouseenter', function() {
        const arrow = document.createElement('img');
        arrow.setAttribute('src', 'img/Arrow 1.svg');
        arrow.classList = 'arrow-link';
        this.appendChild(arrow);
    });

    asideLink.addEventListener('mouseleave', function() {
        const addedLink = this.querySelector('img');
        if (addedLink) {
            addedLink.remove();
        }
    });
});

const accordions = document.querySelectorAll('.question');

accordions.forEach(function(accordion) {
    accordion.addEventListener('click', function() {
        const arrow = this.querySelector('.accordion-arrow');
        const questionContent = this.querySelector('.question-content');
        const isOpen = questionContent.classList.toggle('expand-question');

        arrow.classList.toggle('rotate-arrow');

        if (isOpen) {
            questionContent.style.maxHeight = questionContent.scrollHeight + 'px';
        } else {
            questionContent.style.maxHeight = 0;
        }
    });
});

const hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerMenu.addEventListener('click', function() {
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-link');

    navList.classList.toggle('show-nav');

    setTimeout(function() {
        navLinks.forEach(function(navLink) {
            navLink.classList.toggle('show-link');
        });
    }, 300);
});
