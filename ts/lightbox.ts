/**
 * Lightbox slideshow for image grids, backed by PhotoSwipe.
 *
 * Expects `.imgLink` anchors whose `href` is the large image URL and which
 * declare its `data-pswp-width` / `data-pswp-height`. The child `<img>` has an
 * `alt` used as the caption.
 */

import PhotoSwipe from 'photoswipe';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

const lightbox = new PhotoSwipeLightbox({
  gallery: '.grid',
  children: 'a.imgLink',
  pswpModule: PhotoSwipe,
  bgOpacity: 0.92,
  // keeps tall images clear of the caption
  padding: { top: 30, bottom: 70, left: 20, right: 20 },
});

lightbox.on('uiRegister', () => {
  lightbox.pswp?.ui?.registerElement({
    name: 'caption',
    appendTo: 'root',
    onInit: (el, pswp) => {
      el.className = 'pswp-caption';
      pswp.on('change', () => {
        const img =
          pswp.currSlide?.data.element?.querySelector<HTMLImageElement>('img');
        el.textContent = img?.alt ?? '';
      });
    },
  });
});

lightbox.init();
