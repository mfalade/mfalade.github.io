class Dispatcher {
  constructor() {
    this.apiUrl = 'https://mfalade-email-service.herokuapp.com/api/v1/sendmail';
    this.successMessage = 'Message sent!';
    this.missingFieldMessage = 'Please fill out the required fields!';
    this.errorMessage = 'Your message could not be sent. Please try again later!'
  }

  validate(message) {
    const verdict = {
      message: message,
      isGood: true,
      summary: this.successMessage
    };
    for (let field in message) {
      if (!message[field] || !message[field].length) {
        return {...verdict, isGood: false, summary: this.missingFieldMessage };
      }
    }
    return verdict;
  }

  postMessage(message) {
    const requestContext = {
      url: this.apiUrl,
      type: "POST",
      data: JSON.stringify(message),
      dataType: "json",
      contentType: "application/json"
    };
    return $.ajax(requestContext);
  }

  dispatch(message) {
    let verdict = this.validate(message);
    if (verdict.isGood) {
      this.postMessage(message).done(data => {
        if (data.status_code !== 200) {
          verdict = {...verdict, isGood: false, summary: this.errorMessage };
        }
      });
      return verdict;
    }
    return verdict;    
  }
}

export default new Dispatcher;