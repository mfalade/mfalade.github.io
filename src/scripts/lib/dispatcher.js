class Dispatcher {
  constructor() {
    this.notifications = [];
  }
  dispatch(message) {
    if (this.validate(message)) {
      console.log('validated message');
    }
    return this.notify('Message sent.');
  }
  validate(message) {
    return true;
  }
  notify(notification) {
    return notification;
  }
}

export default new Dispatcher;