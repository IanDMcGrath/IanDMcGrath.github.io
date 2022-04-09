/*!
* Start Bootstrap - Freelancer v7.0.5 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
//

// const ModalHandler = import("./modalHandler.js");
// // import ModalHandler from "./modalHandler.js";
// const MODALHANDLER = new ModalHandler();


window.addEventListener('DOMContentLoaded', event => {

  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector('#mainNav');
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove('navbar-shrink');
    } else {
      navbarCollapsible.classList.add('navbar-shrink');
    }

  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener('scroll', navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  // const mainNav = document.body.querySelector('#mainNav');
  // if (mainNav) {
  //   new bootstrap.ScrollSpy(document.body, {
  //     target: '#mainNav',
  //     offset: 72,
  //   });
  // }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector('.navbar-toggler');
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll('#navbarResponsive .nav-link')
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener('click', () => {
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click();
      }
    });
  });

  // MODALHANDLER.bindCloseModalBtns();
  const MODALHANDLER = new ModalHandler();
  MODALHANDLER.bindModalBtns();


});


class ModalHandler {
  constructor() {
    this.modals = {
      modal1: {
        element: document.getElementById("portfolioModal1"),
        closeBtn: document.getElementById("portfolioModal1-btn-close"),
        openBtn: document.getElementById("portfolioModal1-btn-open"),
        xBtn: document.getElementById("portfolioModal1-btn-x")
      },
      modal2: {
        element: document.getElementById("portfolioModal2"),
        closeBtn: document.getElementById("portfolioModal2-btn-close"),
        openBtn: document.getElementById("portfolioModal2-btn-open"),
        xBtn: document.getElementById("portfolioModal2-btn-x")
      },
      modal3: {
        element: document.getElementById("portfolioModal3"),
        closeBtn: document.getElementById("portfolioModal3-btn-close"),
        openBtn: document.getElementById("portfolioModal3-btn-open"),
        xBtn: document.getElementById("portfolioModal3-btn-x")
      },
      modal4: {
        element: document.getElementById("portfolioModal4"),
        closeBtn: document.getElementById("portfolioModal4-btn-close"),
        openBtn: document.getElementById("portfolioModal4-btn-open"),
        xBtn: document.getElementById("portfolioModal4-btn-x")
      },
    };

    this.bindModalBtns = this.bindModalBtns.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal = (modal, e) => {
    // e.stopPropagation();
    // e.preventDefault();

    // stops the modal from closing when clicking contents within the modal
    if (e.currentTarget.classList.contains("portfolio-modal")) {
      if (e.currentTarget !== e.target) return;
    }

    if (modal.element.classList.contains("show")) {
      modal.element.classList.remove("show");
    } else {
      modal.element.classList.add("show");
    }
  }

  bindModalBtns = () => {
    Object.values(this.modals).forEach(modal => {
      // modal.element.bubble = false;
      // modal.closeBtn.bubble = false;
      // modal.xBtn.bubble = false;
      // modal.openBtn.bubble = false;
      modal.closeBtn.addEventListener("click", (e) => { this.toggleModal(modal, e) });
      modal.xBtn.addEventListener("click", (e) => { this.toggleModal(modal, e) });
      modal.openBtn.addEventListener("click", (e) => { this.toggleModal(modal, e) });
      modal.element.addEventListener("click", (e) => { this.toggleModal(modal, e) });
    });
  }

};

// module.exports(ModalHandler);