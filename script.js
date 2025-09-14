/*
 * Simple JavaScript to toggle the mobile navigation menu.  When the screen is
 * narrow, the navigation links are hidden behind a hamburger icon.  Clicking
 * the icon triggers this function to show or hide the menu.
 */

function toggleMenu() {
  const navList = document.querySelector('nav ul');
  navList.classList.toggle('open');
}