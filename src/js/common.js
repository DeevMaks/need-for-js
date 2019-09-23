window.addEventListener('load', () => {
  const score = document.querySelector('.score'),
    start = document.querySelector('.start'),
    gameArea = document.querySelector('.gameArea'),
    car = document.createElement('div');

  car.classList.add('car');

  const keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowRight: false,
    ArrowLeft: false
  };

  const setting = {
    start: false,
    score: 0,
    speed: 3
  }

  start.addEventListener('click', (evt) => {
    start.classList.add('hide');
    startGame(evt);
  });
  document.addEventListener('keydown', (evt) => {
    evt.preventDefault();
    startRun(evt);
  });
  document.addEventListener('keyup', (evt) => {
    evt.preventDefault();
    stopRun(evt);
  });

  function startGame(event){
    setting.start = true;
    gameArea.appendChild(car);
    requestAnimationFrame(playGame);
  }

  function playGame(){
    console.log('Play!');
    if(setting.start){
        requestAnimationFrame(playGame);
    }
  }

  function startRun(event){
    keys[event.key] = true;
  }

  function stopRun(event){
    keys[event.key] = false;
  }

})
