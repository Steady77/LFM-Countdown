import { renderDateDifference, UI_ELEMENTS } from './view';
import { intervalToDuration, isValid } from 'date-fns';
import Cleave from 'cleave.js';
import { getDateFromLocalStorage, setToLocalStorage } from './storage';

new Cleave(UI_ELEMENTS.DATE_INPUT, {
  delimiters: ['/', '/', ' ', ':'],
  blocks: [4, 2, 2, 2, 2],
});

function getDateDifference(targetDate = getDateFromLocalStorage('date')) {
  const currentDate = new Date();

  return intervalToDuration({
    start: currentDate,
    end: targetDate,
  });
}

UI_ELEMENTS.FORM.addEventListener('submit', (event) => {
  event.preventDefault();

  const inputDate = UI_ELEMENTS.DATE_INPUT.value;

  const targetDate = new Date(inputDate);

  const isDateValid = isValid(targetDate) && targetDate > new Date();

  if (isDateValid) {
    setToLocalStorage('date', targetDate);
    renderDateDifference(getDateDifference(targetDate));
  } else {
    alert('Не верный формат даты или эта дата уже прошла');
  }

  UI_ELEMENTS.DATE_INPUT.value = '';
});

renderDateDifference(getDateDifference());

setInterval(() => {
  renderDateDifference(getDateDifference());
}, 60000);
