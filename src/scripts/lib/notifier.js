class Notifier {
  constructor() {
    this.notification = $('#notification');
    this.notification.hide();
    this.chillDuration = 2000;
  }

  showNotification(message) {
    this.notification.text(message);
    this.notification.show();
    return this;
  }

  hideNotification() {
    setTimeout(() => {
      this.notification.fadeOut("slow");
    }, this.chillDuration);
  }

  chill(newDuration) {
    this.chillDuration = newDuration;
    return this;
  }
  
  switchContent(newContent) {
    this.notification.text(newContent);
    return this;
  }
}

export default new Notifier();