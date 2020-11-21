import { error, info } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

export function noCountry() {
  info({
    title: 'Помилка!',
    text: 'Введіть коректно запит ...(Ukraine)',
    delay: 2000,
    closerHover: true,
  });
}

export function outputInfo() {
  error({
    title: 'Такої країни не існує !',
    text: 'Зробіть новий повторний пошук ...(USA)',
    delay: 2000,
    closerHover: true,
  });
}
export function onFetchError() {
  alert('Дані для пошуку країни відсутні ..');
}
