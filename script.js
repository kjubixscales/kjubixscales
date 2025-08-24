// Animacje przy scrollowaniu portfolio
const portfolioItems = document.querySelectorAll('.portfolio-item');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {threshold:0.2});

portfolioItems.forEach(el=>observer.observe(el));

// Funkcja scroll do "O nas"
function scrollToAbout() {
  document.getElementById('about').scrollIntoView({behavior: 'smooth'});
}

// funkcja do scroll
function scrollToOffer() {
  const section = document.getElementById('offer');
  if(section) {
    section.scrollIntoView({behavior: 'smooth'});
  }
}
