// 🔥 Highlight Course button while scrolling
const capcutButton = document.getElementById("register-capcut");
const courseSection = document.getElementById("courses");

window.addEventListener("scroll", () => {
  const rect = courseSection.getBoundingClientRect();
  if (rect.top <= window.innerHeight * 0.6 && rect.bottom >= 0) {
    capcutButton.classList.add("active-scroll");
  } else {
    capcutButton.classList.remove("active-scroll");
  }
});


// 🔥 Cursor
const dot = document.querySelector(".cursor-dot");
const outline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", e => {
  dot.style.top = `${e.clientY}px`;
  dot.style.left = `${e.clientX}px`;
  outline.style.top = `${e.clientY}px`;
  outline.style.left = `${e.clientX}px`;
});


// Basic interactivity + smooth scroll + reveal + tabs
document.addEventListener('DOMContentLoaded', () => {

  // Smooth scrolling for links
  document.querySelectorAll('.scroll-link').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      const href = this.getAttribute('href');
      if(!href || href === '#') return;
      const el = document.querySelector(href);
      if(!el) {
        // fallback: if it's a page link (login.html) let it navigate
        if(href.includes('.html')) window.location.href = href;
        return;
      }
      el.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });

  // Reveal on load & scroll
  const revealEls = document.querySelectorAll('.reveal');
  function runReveal(){
    revealEls.forEach(el=>{
      const top = el.getBoundingClientRect().top;
      if(top < window.innerHeight - 100) el.classList.add('active');
    });
  }
  runReveal();
  window.addEventListener('scroll', runReveal);

  // Register button toggles details
  const registerBtn = document.getElementById('register-capcut');
  const details = document.getElementById('capcut-details');
  if(registerBtn && details){
    registerBtn.addEventListener('click', ()=>{
      if(details.style.display === 'block'){
        details.style.display = 'none';
        registerBtn.textContent = 'Join Us - Register Now';
      } else {
        details.style.display = 'block';
        registerBtn.textContent = 'Hide Course Links';
      }
    });
  }

  // If CTA join points to login.html (already set), no more action needed.
});
