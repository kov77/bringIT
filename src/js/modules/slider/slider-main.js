import Slider from './slider';

export default class MainSlider extends Slider {
  constructor(btns) {
    super(btns);
  }

  showSlides(n) {
    this.$blockTime = document.querySelector('.hanson');

    if (n > this.slides.length) {
      this.slideIndex = 1;
    }

    if (n < 1) {
      this.slideIndex = this.slides.length;
    }
    try {
      this.$blockTime.style.opacity = '0';
      if (n === 3) {
        setTimeout(() => {
          this.$blockTime.classList.add('animated');
          this.$blockTime.style.opacity = '1';
          this.$blockTime.classList.add('slideInUp');
        }, 3000);
        console.log(this.$blockTime);
      } else {
        this.$blockTime.classList.remove('slideInUp');
      }
    } catch (e) {}

    this.slides.forEach((slide) => {
      slide.style.display = 'none';
    });

    this.slides[this.slideIndex - 1].style.display = 'block';
  }

  plusSlides(n) {
    this.showSlides((this.slideIndex += n));
  }

  render() {
    if (this.container) {
      this.btns.forEach((item) => {
        item.addEventListener('click', () => {
          this.plusSlides(1);
        });

        item.parentNode.previousElementSibling.addEventListener(
          'click',
          (e) => {
            e.preventDefault();
            this.showSlides((this.slideIndex = 1));
          }
        );
      });

      this.showSlides(this.slideIndex);
    }
  }
}
