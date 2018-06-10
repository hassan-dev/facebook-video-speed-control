function setSpeed(speedOptions, speed) {
  const speedValues = Object.values(speedOptions).map(option =>
    Number.parseFloat(option.value),
  );

  let selectedIndex = speedValues.indexOf(speed);
  if (selectedIndex < 0) {
    selectedIndex = 3; // index of normal speed: 3
  }

  speedOptions.selectedIndex = selectedIndex; // eslint-disable-line no-param-reassign
}

function onChangeListener(event, speedOptions) {
  event.preventDefault();

  console.log(event.target.value);
}

window.onload = function onLoad() {
  const form = document.getElementsByClassName('playback')[0];

  form.addEventListener('submit', event => event.preventDefault());

  const speedOptions = document.getElementsByName('speed')[0];

  const defaultSpeed = 1.0;

  // set initial speed
  setSpeed(speedOptions, defaultSpeed);

  speedOptions.addEventListener('change', event =>
    onChangeListener(event, speedOptions),
  );
};
