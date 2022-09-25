class PlayBar {
  constructor() {
    // timeout Id from setInterval
    this.state = 0;
  }

  run(funct, msPerStep) {
    if (this.state === 0) {
      this.state = setInterval(funct, msPerStep);
    }
  }

  pause() {
    clearTimeout(this.state);
    this.state = 0;
  }
}