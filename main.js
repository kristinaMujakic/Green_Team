document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

const yearUpdate = document.querySelector('#yearUpdate');
const currentYear = new Date().getFullYear();
yearUpdate.innerText = currentYear;
