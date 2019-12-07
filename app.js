const drums = {
  // Plays appropriate sound when a key is pressed:
  playSound: (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (audio) {
      audio.currentTime = 0; // Rewind
      audio.play();
      key.classList.add(`playing`);
    }
  },
  // Removes .playing class:
  removeTransition: (e) => {
    if (e.propertyName === `transform`) {
      e.currentTarget.classList.remove(`playing`);
    }
  },
  // Selects all elements with the class .key:
  keys: document.querySelectorAll(`.key`),
  // Add event listeners to keys:
  init: () => {
    // When transition ends, remove .playing class:
    drums.keys.forEach(key => key.addEventListener(`transitionend`, drums.removeTransition));
    window.addEventListener('keydown', drums.playSound);
  }
}

drums.init();