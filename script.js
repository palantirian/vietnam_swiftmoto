
const links = document.querySelectorAll('.nav .links a');
const sections = [...links].map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    const id = '#' + e.target.id;
    const link = document.querySelector(`.nav .links a[href="${id}"]`);
    if (e.isIntersecting) {
      links.forEach(l => l.style.opacity='.7');
      if (link) link.style.opacity='1';
    }
  });
}, {rootMargin:'-40% 0px -55% 0px', threshold:0.01});
sections.forEach(sec => io.observe(sec));
