fetch('/data/data.json')
  .then(res => res.json())
  .then(data => {
    const home = data.home;
    document.getElementById('hero-title').textContent = home.title || '-';
    document.getElementById('hero-subtitle').textContent = home.sub_title || '-';
    document.getElementById('hero-image').src = '/storage/' + (home.image || 'default.jpg');
  })
  .catch(err => {
    console.error('Gagal load JSON:', err);
  });
