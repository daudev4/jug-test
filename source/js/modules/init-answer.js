import {load} from '../utils/load';

const UPLOAD_URL = 'https://echo.htmlacademy.ru';
const SHARE_MESSAGE = 'Спасибо, что поделились!';
const IMAGE_PARAMETERS = {
  src: 'img/emoji-thumb@1x.png',
  width: 100,
  height: 100,
  srcset: 'img/emoji-thumb@1x.png 1x, img/emoji-thumb@2x.png 2x',
  alt: 'Эмоджи палец вверх',
};

const answer = document.querySelector('.answer');
const answerForm = answer.querySelector('.answer__form form');

const showMessage = (text, image) => {
  const onLoadMessage = document.createElement('div');
  const onLoadMessageText = document.createElement('p');

  if (image) {
    const onLoadMessageImage = document.createElement('img');

    onLoadMessageImage.src = image.src;
    onLoadMessageImage.width = image.width;
    onLoadMessageImage.height = image.height;
    onLoadMessageImage.srcset = image.srcset;
    onLoadMessageImage.alt = image.alt;

    onLoadMessage.appendChild(onLoadMessageImage);
  }

  onLoadMessageText.classList.add('answer__message-text');
  onLoadMessageText.textContent = text;
  onLoadMessage.appendChild(onLoadMessageText);
  onLoadMessage.classList.add('answer__message', 'hidden');

  answer.innerHTML = '';
  answer.appendChild(onLoadMessage);

  requestAnimationFrame(() => {
    onLoadMessage.classList.remove('hidden');
  });
};

const onLoadSuccess = () => {
  showMessage(SHARE_MESSAGE, IMAGE_PARAMETERS);
};

const onLoadError = (statusText) => {
  showMessage(statusText);
};

const initAnswer = () => {
  answerForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const data = new FormData(evt.target);

    load(onLoadSuccess, onLoadError, UPLOAD_URL, data);
  });
};

export {initAnswer};
