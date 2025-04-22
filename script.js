// Theme toggle
document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Language toggle (EN <-> BN)
let isBn = false;
document.getElementById('langToggle').addEventListener('click', () => {
  isBn = !isBn;
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = isBn ? el.getAttribute('data-bn') : el.getAttribute('data-en');
  });
  document.getElementById('langToggle').textContent = isBn ? 'EN' : 'BN';
});

// Tools filter
document.querySelectorAll('.filters button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filters button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.getAttribute('data-filter');
    document.querySelectorAll('.card-container .card').forEach(card => {
      card.style.display = (filter === 'all' || card.getAttribute('data-type') === filter) ? 'flex' : 'none';
    });
  });
});