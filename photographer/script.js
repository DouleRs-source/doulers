/* NAV — фон при скролле */
const nav = document.getElementById('nav');
if(nav){
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive:true });
}

/* Бургер */
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
if(burger && navLinks){
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    burger.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      burger.classList.remove('open');
    });
  });
}

/* Плавное появление */
const io = new IntersectionObserver((entries) => {
  entries.forEach(en => {
    if(en.isIntersecting){
      en.target.classList.add('in');
      io.unobserve(en.target);
    }
  });
}, { threshold:0.12, rootMargin:'0px 0px -60px 0px' });
document.querySelectorAll('.rv').forEach(el => io.observe(el));

/* Фильтры портфолио (если есть) */
const filters = document.getElementById('filters');
if(filters){
  const cards = document.querySelectorAll('.work-card[data-cat]');
  filters.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter');
    if(!btn) return;
    filters.querySelectorAll('.filter').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.cat;
    cards.forEach(card => {
      const show = cat === 'all' || card.dataset.cat === cat;
      card.style.display = show ? '' : 'none';
    });
  });
}