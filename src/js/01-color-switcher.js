function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  
  const refs = {
    buttonStart: document.querySelector('[data-start]'),
    buttonStop: document.querySelector('[data-stop]'),
    body: document.querySelector('body'),
  };
  refs.buttonStart.addEventListener('click', () => {
    makeColor.start();
  });
  refs.buttonStop.addEventListener('click', () => {
    makeColor.stop();
  });
  refs.buttonStop.disabled = true;
