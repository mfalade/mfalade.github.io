class Preloader {
  constructor() {
    this.preloader = $('#preloader');
    this.preloader.hide();
  }
  showNotification() {
    this.preloader.text('Sending ...');
    this.preloader.show();
  }
  hideNotification() {
    setTimeout(() => {
      this.preloader.fadeOut("slow");
    }, 2000);
  }
  chill(forAWhile) {
    setTimeout(() => {
      // I'm just here chillin'
    }, forAWhile);
    return this;
  }
  switchContent(newContent) {
    this.preloader.text(newContent);
    return this;
  }
}

export default new Preloader();