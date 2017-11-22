// slider

const sC = function sliderChange(element) {
  const { value } = element;
  element.previousSibling.innerText = value;

  const width = element.parentElement.clientWidth - 20;
  const min = element.attributes.min.value;
  const max = element.attributes.max.value;
  element.previousSibling.style.left = (((width / (max - min)) * (value - min)) - 8.75) + 'px';
};

window.sliderInput = function (event) {
  sC(event.target);
};

(function () {
  const elements = document.querySelectorAll('input.slider');
  for (let i = 0; i < elements.length; i += 1) {
    sC(elements[i]);
  }
}());

// slider-percentage
const sPC = function sliderPercentageChange(element) {
  const { value } = element;

  const width = element.parentElement.clientWidth - 20;
  const min = element.attributes.min.value;
  const max = element.attributes.max.value;
  element.previousSibling.style.width = (((width / (max - min)) * (value - min)) + 1) + 'px';
};

window.sliderPercentageInput = function (event) {
  sPC(event.target);
};

(function () {
  const elements = document.querySelectorAll('input.slider-percentage');
  for (let i = 0; i < elements.length; i += 1) {
    sPC(elements[i]);
  }
}());
