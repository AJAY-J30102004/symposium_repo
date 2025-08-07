document.addEventListener("DOMContentLoaded", function () {
    const eventLink = document.getElementById("event-link");
    const eventModal = document.getElementById("event-modal");
    const eventModalCloseBtn = document.querySelector('[data-modal="event-modal"]');
    const eventBoxes1 = document.querySelectorAll(".event-box-ig");
    const eventBoxes2 = document.querySelectorAll(".event-box-pit");
    const eventBoxes3 = document.querySelectorAll(".event-box-pro");
    const eventBoxes4 = document.querySelectorAll(".event-box-dra");
    const eventBoxes5 = document.querySelectorAll(".event-box-jit");
    const eventModals = document.querySelectorAll(".event-modal");
    const closeBtns = document.querySelectorAll(".close-btn");
    const aboutLink = document.getElementById('about-link');
    const aboutcloseBtn = document.getElementById("about-close-id")
    const aboutSection = document.getElementById('about');
    const homebtn = document.getElementById('home-link');
    const contactlink = document.getElementById('contact-link');
    const contactcloseBtn = document.getElementById("contact-close-id")
    const contactSection = document.getElementById('contact');

    // Show main event modal
    eventLink.addEventListener("click", function (e) {
        e.preventDefault();
        aboutSection.style.display = "none";
        contactSection.style.display = "none";
        eventModal.style.display = "flex";
        document.body.style.overflow = "hidden";
    });

    // Close main event modal
    eventModalCloseBtn.addEventListener("click", function () {
        eventModal.style.display = "none";
        document.body.style.overflow = "auto";
    });

    // Show specific event modal
    eventBoxes1.forEach(box => {
        box.addEventListener("click", function () {
            const eventModalId = this.getAttribute("data-event") + "-modal";
            eventModals.forEach(modal => {
                if (modal.id === eventModalId) {
                    modal.style.display = "flex";
                } else {
                    modal.style.display = "none";
                }
            });
        });
    });
    eventBoxes2.forEach(box => {
        box.addEventListener("click", function () {
            const eventModalId = this.getAttribute("data-event") + "-modal";
            eventModals.forEach(modal => {
                if (modal.id === eventModalId) {
                    modal.style.display = "flex";
                } else {
                    modal.style.display = "none";
                }
            });
        });
    });
    eventBoxes3.forEach(box => {
        box.addEventListener("click", function () {
            const eventModalId = this.getAttribute("data-event") + "-modal";
            eventModals.forEach(modal => {
                if (modal.id === eventModalId) {
                    modal.style.display = "flex";
                } else {
                    modal.style.display = "none";
                }
            });
        });
    });
    eventBoxes4.forEach(box => {
        box.addEventListener("click", function () {
            const eventModalId = this.getAttribute("data-event") + "-modal";
            eventModals.forEach(modal => {
                if (modal.id === eventModalId) {
                    modal.style.display = "flex";
                } else {
                    modal.style.display = "none";
                }
            });
        });
    });
    eventBoxes5.forEach(box => {
        box.addEventListener("click", function () {
            const eventModalId = this.getAttribute("data-event") + "-modal";
            eventModals.forEach(modal => {
                if (modal.id === eventModalId) {
                    modal.style.display = "flex";
                } else {
                    modal.style.display = "none";
                }
            });
        });
    });

    // Close modals
    closeBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            const modalId = this.getAttribute("data-modal");
            if (modalId) {
                document.getElementById(modalId).style.display = "none";
            } else {
                // Close the parent event modal
                this.closest('.event-modal').style.display = "none";
            }
            document.body.style.overflow = "auto";
        });
    });

    // Close modals when clicking outside
    window.addEventListener("click", function (e) {
        if (e.target == eventModal) {
            eventModal.style.display = "none";
            document.body.style.overflow = "auto";
        }
        eventModals.forEach(modal => {
            if (e.target == modal) {
                modal.style.display = "none";
                document.body.style.overflow = "auto";
            }
        });
        if (e.target == aboutSection) {
            aboutSection.style.display = "none";
            document.body.style.overflow = "auto";
        }
        if (e.target == contactSection) {
            contactSection.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });

    //about us
    aboutLink.addEventListener('click', (e) => {
        e.preventDefault();
        contactSection.style.display = "none";
        eventModal.style.display = "none";
        aboutSection.style.display = "flex";
        document.body.style.overflow = "hidden";
    });
    
    aboutcloseBtn.addEventListener("click", function () {
        aboutSection.style.display = "none";
        document.body.style.overflow = "auto";
    });

    homebtn.addEventListener("click", function () {
        eventModal.style.display = "none";
        aboutSection.style.display = "none";
        contactSection.style.display = "none";
        document.body.style.overflow = "auto";
    });

    //contact us
    contactlink.addEventListener('click', (e) => {
        e.preventDefault();
        aboutSection.style.display = "none";
        eventModal.style.display = "none";
        contactSection.style.display = "flex";
        document.body.style.overflow = "hidden";
    });
    
    contactcloseBtn.addEventListener("click", function () {
        contactSection.style.display = "none";
        document.body.style.overflow = "auto";
    });

    // Add smooth scrolling and enhanced interactions
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add loading animation for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
    });

    // Enhanced keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Close any open modals
            eventModal.style.display = "none";
            aboutSection.style.display = "none";
            contactSection.style.display = "none";
            eventModals.forEach(modal => {
                modal.style.display = "none";
            });
            document.body.style.overflow = "auto";
        }
    });

});
