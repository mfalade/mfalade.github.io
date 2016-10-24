class Dispatcher {
  constructor() {
    this.notifications = [];
  }
  dispatch(message) {
    let verdict = this.validate(message);
    if (verdict.isGood) {
      return verdict;
    }
    return verdict;    
  }
  validate(message) {
    let verdict = {
      isGood: true,
      summary: "Message Sent."
    };
    for (let field in message) {
      if (!message[field] || !message[field].length) {
        verdict.isGood = false;
        verdict.summary = 'Please fill out the required fields.'
        break;
      }
    }
    return verdict;
  }
}

export default new Dispatcher;