// slider
const sliderChange = function sliderChange(element) {
  const { value } = element;
  element.previousSibling.innerText = value;

  const width = element.parentElement.clientWidth - 20;
  const min = element.attributes.min.value;
  const max = element.attributes.max.value;
  element.previousSibling.style.left = (((width / (max - min)) * (value - min)) - 8.75) + 'px';
};

window.sliderInput = function sliderInput(event) {
  sliderChange(event.target);
};

(function initSliders() {
  const elements = document.querySelectorAll('input.slider');
  for (let i = 0; i < elements.length; i += 1) {
    sliderChange(elements[i]);
  }
}());

// slider-percentage
const sliderPercentageChange = function sliderPercentageChange(element) {
  const { value } = element;

  const width = element.parentElement.clientWidth - 20;
  const min = element.attributes.min.value;
  const max = element.attributes.max.value;
  element.previousSibling.style.width = (((width / (max - min)) * (value - min)) + 1) + 'px';
};

window.sliderPercentageInput = function sliderPercentageInput(event) {
  sliderPercentageChange(event.target);
};

(function initSliders() {
  const elements = document.querySelectorAll('input.slider-percentage');
  for (let i = 0; i < elements.length; i += 1) {
    sliderPercentageChange(elements[i]);
  }
}());
