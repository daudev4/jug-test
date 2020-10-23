import {load} from './../utils/load';

const UPLOAD_URL = 'https://echo.htmlacademy.ru';
const SUBSCRIBE_MESSAGE = 'Спасибо, что подписались на нашу рассылку!';

const subscribe = document.querySelector('#subscribe');
const subscribeContent = subscribe.querySelector('.subscribe__content');

const showMessage = (text) => {
  const onLoadMessage = document.createElement('p');

  onLoadMessage.textContent = text;
  onLoadMessage.classList.add('subscribe__message', 'hidden');
  subscribeContent.innerHTML = '';
  subscribeContent.appendChild(onLoadMessage);
  requestAnimationFrame(() => {
    onLoadMessage.classList.remove('hidden');
  });
};

const onLoadSuccess = () => {
  showMessage(SUBSCRIBE_MESSAGE);
};

const onLoadError = (statusText) => {
  showMessage(statusText);
};

const initSubscribe = () => {
  if (subscribe) {
    const subscribeForm = subscribeContent.querySelector('.subscribe__form form');
    subscribeForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      const data = new FormData(evt.target);

      load(onLoadSuccess, onLoadError, UPLOAD_URL, data);
    });
  }
};

export {initSubscribe};
