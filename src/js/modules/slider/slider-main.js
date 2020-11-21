import Slider from './slider';

export default class MainSlider extends Slider {
  constructor(btnNext, btnPrev) {
    super(btnNext, btnPrev);
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

  btnTrigger(btn, n) {
    btn.forEach((item) => {
      item.addEventListener('click', () => {
        this.plusSlides(n);
      });

      item.parentNode.previousElementSibling.addEventListener('click', (e) => {
        e.preventDefault();
        this.showSlides((this.slideIndex = 1));
      });
    });
  }

  render() {
    if (this.container) {
      this.btnTrigger(this.btnNext, 1);
      this.btnTrigger(this.btnPrev, -1);

      this.showSlides(this.slideIndex);
    }
  }
}
