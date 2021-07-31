"use strict";

// go through all instances of nav menus
document.querySelectorAll('[data-nav-id]').forEach(function (menu) {
  var navId = menu.dataset.navId;
  var navigationToggleButtons = document.querySelectorAll("[data-nav-toggle=\"".concat(navId, "\"]")); // check if toggle exists for nav menu

  if (navigationToggleButtons.length === 0) {
    document.error("No toggle found for nav-id: ".concat(navId, ". Create a toggle by creating an element with property: data-nav-toggle=\"").concat(navId, "\""));
  } else {
    var navigationMenu = menu.cloneNode(true);
    var documentBody = document.querySelector('body'); // append to document body and remove attribute to initialized element

    navigationMenu.removeAttribute('class');
    documentBody.append(navigationMenu);
    menu.removeAttribute('data-nav-id'); // close if overlay is clicked

    navigationMenu.addEventListener('click', function (e) {
      e.preventDefault();

      if (e.target === navigationMenu) {
        closeNavigation(documentBody, navigationMenu);
      }
    });
    navigationToggleButtons.forEach(function (navigationToggle) {
      navigationToggle.addEventListener('click', function (e) {
        e.preventDefault();

        if (navigationToggle.dataset.navStatus === 'active') {
          // close if open
          closeNavigation(documentBody, navigationMenu);
        } else {
          // open if close
          openNavigation(documentBody, navigationMenu);
        }
      });
    });
  }
});

var openNavigation = function openNavigation(body, navMenu) {
  body.dataset.navStatus = 'active';
  navMenu.dataset.navStatus = 'active';
};

var closeNavigation = function closeNavigation(body, navMenu) {
  body.dataset.navStatus = 'closed';
  navMenu.dataset.navStatus = 'closed';
};