document.addEventListener("DOMContentLoaded", function () {
    const eventLink = document.getElementById("event-link");
    const eventModal = document.getElementById("event-modal");
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
        aboutSection.style.display = "none";
        contactSection.style.display = "none";
        e.preventDefault();
        eventModal.style.display = "flex";
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
            document.getElementById(modalId).style.display = "none";
        });
    });

    // Close modals when clicking outside
    window.addEventListener("click", function (e) {
        if (e.target == eventModal) {
            eventModal.style.display = "none";
        }
        eventModals.forEach(modal => {
            if (e.target == modal) {
                modal.style.display = "none";
            }
        });
    });

    //about us
    aboutLink.addEventListener('click', (e) => {
        contactSection.style.display = "none";
        e.preventDefault();
        aboutSection.style.display = "flex";
    });
    
    aboutcloseBtn.addEventListener("click", function () {
        aboutSection.style.display = "none";
    });

    homebtn.addEventListener("click", function () {
        aboutSection.style.display = "none";
        contactSection.style.display = "none";
    });

    //contact us
    contactlink.addEventListener('click', (e) => {
        aboutSection.style.display = "none";
        e.preventDefault();
        contactSection.style.display = "flex";
    });
    
    contactcloseBtn.addEventListener("click", function () {
        contactSection.style.display = "none";
    });

});
