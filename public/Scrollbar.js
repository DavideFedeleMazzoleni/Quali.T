(() => {
  const thumb = document.querySelector('.floating-scrollbar-thumb');
  if (!thumb) return;
  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? window.scrollY / max : 0;
    const track = 65;
    thumb.style.top = `${ratio * (track - 25)}px`;
  };
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
})();
