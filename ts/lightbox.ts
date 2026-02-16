/**
 * Lightweight lightbox slideshow for image grids.
 *
 * Expects `.imgLink` anchors whose `href` is the full-res image URL
 * and whose child `<img>` has an `alt` used as the caption.
 */

interface LightboxSlide {
  src: string;
  alt: string;
}

let overlay: HTMLDivElement;
let imgEl: HTMLImageElement;
let captionEl: HTMLDivElement;
let counterEl: HTMLDivElement;
let slides: LightboxSlide[] = [];
let current = 0;

function build(): void {
  overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';

  const closeBtn = document.createElement('button');
  closeBtn.className = 'lightbox-close';
  closeBtn.textContent = '\u00d7';
  closeBtn.addEventListener('click', close);

  const prevBtn = document.createElement('button');
  prevBtn.className = 'lightbox-btn lightbox-prev';
  prevBtn.textContent = '\u2039';
  prevBtn.addEventListener('click', () => go(current - 1));

  const nextBtn = document.createElement('button');
  nextBtn.className = 'lightbox-btn lightbox-next';
  nextBtn.textContent = '\u203a';
  nextBtn.addEventListener('click', () => go(current + 1));

  imgEl = document.createElement('img');
  imgEl.className = 'lightbox-img';

  captionEl = document.createElement('div');
  captionEl.className = 'lightbox-caption';

  counterEl = document.createElement('div');
  counterEl.className = 'lightbox-counter';

  overlay.append(closeBtn, prevBtn, imgEl, nextBtn, captionEl, counterEl);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) close();
  });

  document.body.appendChild(overlay);
}

function show(index: number): void {
  current = index;
  const slide = slides[current];
  imgEl.src = slide.src;
  imgEl.alt = slide.alt;
  captionEl.textContent = slide.alt;
  counterEl.textContent = `${current + 1} / ${slides.length}`;
}

function go(index: number): void {
  const wrapped = ((index % slides.length) + slides.length) % slides.length;
  show(wrapped);
}

function open(index: number): void {
  show(index);
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function close(): void {
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

function onKey(e: KeyboardEvent): void {
  if (!overlay.classList.contains('active')) return;
  if (e.key === 'Escape') close();
  if (e.key === 'ArrowLeft') go(current - 1);
  if (e.key === 'ArrowRight') go(current + 1);
}

function init(): void {
  const links = document.querySelectorAll<HTMLAnchorElement>('.imgLink');
  if (!links.length) return;

  slides = Array.from(links).map((a) => ({
    src: a.href,
    alt: a.querySelector('img')?.alt ?? '',
  }));

  build();

  links.forEach((link, i) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      open(i);
    });
  });

  document.addEventListener('keydown', onKey);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
