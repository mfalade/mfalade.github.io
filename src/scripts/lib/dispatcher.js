export default class Dispatcher {

  constructor() {
    this.notifications = [];
  }

  dispatch(message) {
    if (this.validate(message)) {

    }
    return this.notify(this.errorMessage)
  }

  validate(message) {

  }

  notify(notification) {
    console.log('Wahala dey o');
  }

}