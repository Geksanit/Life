
import convertRemToPixels from '../../scripts/convertRemToPixels';

class Button {
  $element: JQuery;
  size: number;
  constructor(element) {
    this.$element = $(element).on('click.standart-button', this.rippleEffect.bind(this));
    this.size = convertRemToPixels(2);
  }
  rippleEffect({ offsetX, offsetY }): void {
    const $div: JQuery = $('<div/>').attr('id', 'button__ripple');
    $div.css({ top: `${offsetY - this.size}px`, left: `${offsetX - this.size}px` });
    this.$element.append($div);
    setTimeout(() => $div.remove(), 550);
  }
}
let buttons = [];
$('.js-standart-button').each((index, element) => { buttons.push(new Button(element)); });
