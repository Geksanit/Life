
import convertRemToPixels from '../../scripts/convertRemToPixels';

class Slider {
  $block: JQuery;
  $slider: JQuery;
  $view: JQuery;
  $line: JQuery;
  constructor(element) {
    this.$block = $(element);
    this.$slider = this.$block.find('.js-slider__input');
    this.$view = this.$block.find('.js-slider__view');
    this.$line = this.$block.find('.js-slider__line');
    this.sliderChange.call(this);
    this.$slider.on('input.slider', this.sliderChange.bind(this));
  }
  sliderChange(): void {
    const { $slider } = this;
    const width: number = $slider.width() - convertRemToPixels(1.25);
    const value: number = Number($slider.val());
    const min: number = Number(this.$slider.prop('min'));
    const max: number = Number(this.$slider.prop('max'));
    const newLeft: number = ((width / (max - min)) * (value - min)) - convertRemToPixels(0.625);
    this.$view.text(value).css({ left: newLeft });
    const newWidth: number = ((width / (max - min)) * (value - min)) + convertRemToPixels(0.625);
    this.$line.width(newWidth);
  }
}

let sliders: Slider[] = [];
$('.js-slider').each((index, element) => { sliders.push(new Slider(element)); });
