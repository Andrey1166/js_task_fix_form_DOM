'use strict';

const inputs = [...document.querySelectorAll('.field-text')];

function createLabel(item) {
  const label = document.createElement('label');
  const id = item.getAttribute('id');
  const inputName = item.getAttribute('name');
  let labelName = '';

  inputName.split('').forEach((char) => {
    if (char === char.toUpperCase()) {
      labelName += ' ' + char;
    } else {
      labelName += char;
    }
  });

  const placeholderName =
    labelName.charAt(0).toUpperCase() + labelName.slice(1);

  label.setAttribute('class', 'field-label');
  label.setAttribute('for', id);
  item.setAttribute('placeholder', placeholderName);
  label.textContent = labelName;
  item.before(label);
}

inputs.forEach((input) => createLabel(input));
