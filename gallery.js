/* Native image links remain usable when dialog support or JavaScript is absent. */
(() => {
  'use strict';

  const links = [...document.querySelectorAll('a[data-gallery-item]')];
  const dialog = document.querySelector('#gallery-dialog');
  if (!links.length || !dialog || typeof dialog.showModal !== 'function') return;

  const image = dialog.querySelector('[data-lightbox-image]');
  const caption = dialog.querySelector('[data-lightbox-caption]');
  const count = dialog.querySelector('[data-lightbox-count]');
  const closeButton = dialog.querySelector('[data-lightbox-close]');
  const previousButton = dialog.querySelector('[data-lightbox-prev]');
  const nextButton = dialog.querySelector('[data-lightbox-next]');
  if (!image || !closeButton || !previousButton || !nextButton) return;

  let activeIndex = 0;
  let opener = null;
  let previousOverflow = '';

  const showImage = (index) => {
    activeIndex = (index + links.length) % links.length;
    const link = links[activeIndex];
    const thumbnail = link.querySelector('img');
    const description = thumbnail?.alt || 'US-1 Pools gallery photo';
    image.src = link.href;
    image.alt = description;
    if (caption) caption.textContent = description;
    if (count) count.textContent = `${activeIndex + 1} / ${links.length}`;
    previousButton.disabled = links.length < 2;
    nextButton.disabled = links.length < 2;
  };

  links.forEach((link, index) => {
    link.addEventListener('click', (event) => {
      // Preserve native new-tab and download behavior.
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      opener = link;
      showImage(index);
      previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      document.documentElement.classList.add('has-lightbox');
      dialog.showModal();
      closeButton.focus({ preventScroll: true });
    });
  });

  closeButton.addEventListener('click', () => dialog.close());
  previousButton.addEventListener('click', () => showImage(activeIndex - 1));
  nextButton.addEventListener('click', () => showImage(activeIndex + 1));

  dialog.addEventListener('keydown', (event) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    showImage(activeIndex + (event.key === 'ArrowRight' ? 1 : -1));
  });

  // Escape uses the native cancel event and native dialog focus containment.
  dialog.addEventListener('click', (event) => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (
      event.clientX < bounds.left || event.clientX > bounds.right ||
      event.clientY < bounds.top || event.clientY > bounds.bottom
    ) dialog.close();
  });

  dialog.addEventListener('close', () => {
    document.body.style.overflow = previousOverflow;
    document.documentElement.classList.remove('has-lightbox');
    opener?.focus({ preventScroll: true });
  });
})();
