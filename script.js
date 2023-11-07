document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');
    const nav = document.getElementById('nav');
    const logo = document.getElementById('logo');
  
    menuIcon.addEventListener('click', function() {
      menu.classList.toggle('active');
      nav.classList.toggle('active');
      logo.classList.toggle('active');
    });
  });

  AOS.init();

  // Make thge navbar sticky after scroll 
  