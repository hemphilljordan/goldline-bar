

let lastScrollTop = 0;
const header = document.getElementById("site-header");

window.addEventListener("scroll", function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scrolling down, hide the header
    header.classList.add("hidden");
  } else {
    // Scrolling up, show the header
    header.classList.remove("hidden");
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});






const image = document.getElementById("zoom-image");

window.addEventListener("scroll", function() {
  // Calculate the scroll position
  const scrollTop = window.scrollY || window.pageYOffset;

  // Calculate the scale based on the scroll position
  const scale = 1 + (scrollTop * 0.001); // Adjust the factor as needed

  // Apply the scale transformation to the image
  image.style.transform = `scale(${scale})`;
});






//  make images appear while scrolling down page

const observerUp = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show-up')
    } else {
      entry.target.classList.remove('show-up')
    }
  })
})

const hiddenUpElements = document.querySelectorAll('.hide-up');
hiddenUpElements.forEach((el) => observerUp.observe(el));


let delay = 0; // Initial delay
const observerStagger = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('show-up');
      }, delay);
      delay += 200; // Adjust the delay between appearances (in milliseconds)
    } else {
      entry.target.classList.remove('show-up');
      delay = 0; // Reset delay when element is out of view
    }
  });
}, { threshold: 0.5 }); // Adjust the threshold as needed

const hiddenStaggerElements = document.querySelectorAll('.hide-stagger');
hiddenStaggerElements.forEach((el) => observerStagger.observe(el));




function scrollToSection(selector) {
  const targetSection = document.querySelector(selector);
  if (targetSection) {
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth'
    });
  }
}






// I think when pictures appear from low to high they make the page have blank space on the right




function toggleMobileMenu(menu){
  menu.classList.toggle('open');
}