/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*=====MENU SHOW =====*/
/*validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
/*=====MENU HIDDEN ====*/
/*Validate if constant exists*/
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelector(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav__link");
  //when we click on each nav__link, we remove the show menu
  navMenu.foreach((n) => n.addEventListener("click", linkAction));
};

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
  const header = document.getElementById("header");
  //when the scroll is greater than 50 viewport height, and the blur-header class
  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();
  //serviceID - templateID - #form - publicKey
  emailjs
    .sendForm(
      "service_zzw1gyb",
      "template_ts4x38k",
      "#contact-form",
      "w56mj1lefLWgQI_Fs"
    )
    .then(
      () => {
        // show sent message
        contactMessage.textContent = "Message sent successfully ☑️";

        //remove  message after 5 sec
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);

        // Clear input fields
        contactForm.reset();
      },
      () => {
        contactMessage.textContent = "Message not sent (server error) ❎";
      }
    );
};

contactForm.addEventListener("submit", sendEmail);


/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  //when the scroll is heigher than 350 viewport height, add the show-scroll class to the a tag with the scrollup
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener('scroll', scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
  const scrollY = window.pageYOffset
  
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id'),
      sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
    
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link')
    } else {
      sectionsClass.classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  //reset: true //animation repeat
})

sr.reveal(`.home__data, .home__social, .contact__container, .footer__container`)
sr.reveal(`.home__image`, { origin: 'bottom' });
sr.reveal(`.about__data, .skills__data`, { origin: 'left' });
sr.reveal(`.about__image, .skills__content`, { origin: "right" });
sr.reveal(`.services__card, .projects__card`, { intervel: 100 });


 