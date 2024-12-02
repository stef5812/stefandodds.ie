// Select all drawer headers
const drawerHeaders = document.querySelectorAll('.drawer-header');

// Add event listeners to toggle drawer content visibility
drawerHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const drawer = header.parentElement;
    drawer.classList.toggle('open');
  });
});
