import Slider from './slider';

export default class MiniSlider extends Slider {
  constructor(container, next, prev, activeClass, animate, autoplay) {
    super(container, next, prev, activeClass, animate, autoplay);
  }

  decorizeSlides() {
    this.slides.forEach((slide) => {
      slide.classList.remove(this.activeClass);
      if (this.animate) {
        slide.querySelector('.card__title').style.opacity = '0.4';
        slide.querySelector('.card__controls-arrow').style.opacity = '0';
      }
      if (slide.nodeType === 'BUTTON') {
        console.log('but');
      }
    });

    this.slides[0].classList.add(this.activeClass);
    if (this.animate) {
      this.slides[0].querySelector('.card__title').style.opacity = '1';
      this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
    }
  }

  nextSlide() {
    this.container.appendChild(this.slides[0]);
    this.decorizeSlides();
  }

  bindTriggers() {
    this.next.addEventListener('click', () => {
      this.nextSlide();
    });
    this.prev.addEventListener('click', () => {
      let active = this.slides[this.slides.length - 1]; // last slide
      this.container.insertBefore(active, this.slides[0]);
      this.decorizeSlides();
      //перемещаем последний слайд на верх и он становится перед первым
    });
  }

  init() {
    try {
      this.container.style.cssText = `
        display: flex;
        flex-wrap: wrap;
        overflow: hidden
      `;

      this.bindTriggers();
      this.decorizeSlides();

      if (this.autoplay) {
        setInterval(() => this.nextSlide(), 3000);
      }
    } catch (e) {}
  }
}
