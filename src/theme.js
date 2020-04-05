import { load, save } from './localStorage';

const refs2 = {
  input: document.querySelector('.js-switch-input'),
  getTheme: localStorage.getItem('theme'),
};

refs2.input.addEventListener('change', switchControl);

function switchControl(e) {
  if (e.target.checked === true) {
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark-theme');
  } else if (e.target.checked !== true) {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    localStorage.setItem('theme', 'light-theme');
  }
}

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function saveTheme() {
  if (refs2.getTheme === 'dark-theme') {
    refs2.input.checked = true;
    document.body.classList.add('dark-theme');
  } else if (refs2.getTheme !== 'dark-theme') {
    refs2.input.checked = false;
    document.body.classList.add('light-theme');
  }
}

saveTheme();
