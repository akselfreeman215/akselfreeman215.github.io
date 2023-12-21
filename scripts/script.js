/*
======================================================================
File: home.js
Author: Aksel Ray Freeman
Date: December 7, 2023
Description: Script for home page
Version: 1.0
====================================================================== 
*/

//dropdown container
document.addEventListener('DOMContentLoaded', function() {
  // Get references to the menu icon and dropdown container
  var menuIcon = document.getElementById('menu-icon');
  var dropdownContainer = document.querySelector('.dropdown-container');

  // Add click event listener to the menu icon
  menuIcon.addEventListener('click', function() {
    // Toggle the 'show' class on the dropdown container
    dropdownContainer.classList.toggle('show');
  });
});

//responsive changes
var toteContainer = document.getElementById('toteContainer');

if (window.innerWidth <= 805) {
    toteContainer.addEventListener('click', function() {
        this.classList.toggle('click-animation');
    });
}

var toteContainer = document.getElementById('team-info');

if (window.innerWidth <= 805) {
    toteContainer.addEventListener('click', function() {
        this.classList.toggle('click-animation');
    });
}

//dynamic change to copyright year
document.getElementById('copyrightYear').innerHTML = new Date().getFullYear();


//links to scroll to and highlight
document.addEventListener('DOMContentLoaded', function() {
  var scrollLinks = document.querySelectorAll('a[href^="#"]');
  
  scrollLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      var targetId = this.getAttribute('href').substring(1);
      var targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Add a class to the target section for the blinking effect

        if (targetId === 'team-info') {
          targetElement.classList.add('highlight-scroll-team');
          window.scrollTo({
            top: targetElement.offsetTop - 180,
            behavior: 'smooth'
          });
        } else {
          // For other elements, use the default class (highlight-section)
          targetElement.classList.add('highlight-scroll-contact');
          window.scrollTo({
            top: targetElement.offsetTop - 110,
            behavior: 'smooth'
          });
        }


        var dropdownContainer = document.querySelector('.dropdown-container');
        dropdownContainer.classList.remove('show');

        // Remove the class after a delay (adjust as needed)
        setTimeout(function() {
          targetElement.classList.remove('highlight-scroll-contact');
          targetElement.classList.remove('highlight-scroll-team');
        }, 1000);
      }
    });
  });
});

