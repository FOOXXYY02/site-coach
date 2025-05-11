// Animation simple sur scroll
window.addEventListener('scroll', () => {
    const services = document.querySelector('.services');
    const servicesTop = services.getBoundingClientRect().top;
    if (servicesTop < window.innerHeight) {
      services.style.opacity = 1;
      services.style.transform = 'translateY(0)';
    }
  });
  
  // Styles initiaux pour animation
  document.addEventListener('DOMContentLoaded', () => {
    const services = document.querySelector('.services');
    services.style.opacity = 0;
    services.style.transform = 'translateY(50px)';
    services.style.transition = 'all 0.6s ease-out';
  });
  var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
  sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  sidenav.classList.remove("active");
}
/* animation avis */

document.addEventListener('DOMContentLoaded', () => {
  // Animation scroll existante
  const services = document.querySelector('.services');
  services.style.opacity = 0;
  services.style.transform = 'translateY(50px)';
  services.style.transition = 'all 0.6s ease-out';

  window.addEventListener('scroll', () => {
    const servicesTop = services.getBoundingClientRect().top;
    if (servicesTop < window.innerHeight) {
      services.style.opacity = 1;
      services.style.transform = 'translateY(0)';
    }
  });

  // Slider des avis
  const slider = document.querySelector('.avis-slider');
  const leftBtn = document.querySelector('.avis-left');
  const rightBtn = document.querySelector('.avis-right');

  let scrollAmount = 0;
  const scrollStep = 320;

  rightBtn.addEventListener('click', () => {
    scrollAmount += scrollStep;
    slider.style.transform = `translateX(-${scrollAmount}px)`;
  });

  leftBtn.addEventListener('click', () => {
    scrollAmount -= scrollStep;
    if (scrollAmount < 0) scrollAmount = 0;
    slider.style.transform = `translateX(-${scrollAmount}px)`;
  });
});
// Slider des services
const servicesSlider = document.querySelector('.services-slider');
const serviceLeftBtn = document.querySelector('.service-left');
const serviceRightBtn = document.querySelector('.service-right');

let serviceScrollAmount = 0;
const serviceScrollStep = 270;

serviceRightBtn.addEventListener('click', () => {
  serviceScrollAmount += serviceScrollStep;
  servicesSlider.style.transform = `translateX(-${serviceScrollAmount}px)`;
});

serviceLeftBtn.addEventListener('click', () => {
  serviceScrollAmount -= serviceScrollStep;
  if (serviceScrollAmount < 0) serviceScrollAmount = 0;
  servicesSlider.style.transform = `translateX(-${serviceScrollAmount}px)`;
});

