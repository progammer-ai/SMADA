function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  }

  // Toggle dropdown menu
  function toggleDropdown(event) {
    event.preventDefault();
    const dropdown = event.target.parentElement;
    dropdown.classList.toggle('active');
  }