export const UI_ELEMENTS = {
  FORM: document.querySelector('.form'),
  DATE_INPUT: document.querySelector('.form__input'),
  SET_BUTTON: document.querySelector('.form__button'),
  YEARS: document.querySelector('.years'),
  DAYS: document.querySelector('.days'),
  HOURS: document.querySelector('.hours'),
  MINUTES: document.querySelector('.minutes'),
  DISPLAY: document.querySelector('.display'),
};

export function renderDateDifference({ years, days, hours, minutes, months }) {
  UI_ELEMENTS.DISPLAY.innerHTML = `
    <div class="display__years display__box">
      <span class="years">${years}</span>
      <p>Года</p>
    </div>
    <div class="display__years display__box">
      <span class="months">${months}</span>
      <p>Месяцы</p>
    </div>
    <div class="display__days display__box">
      <span class="days">${days}</span>
      <p>Дни</p>
    </div>
    <div class="display__hours display__box">
      <span class="hours">${hours}</span>
      <p>Часы</p>
    </div>
    <div class="display__hours display__box">
      <span class="minutes">${minutes}</span>
      <p>Минуты</p>
    </div>
  `;
}
