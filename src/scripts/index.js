import dispatcher from './lib/dispatcher';
import notifier from './lib/notifier';

$(() => {
  let submitButton = $('#submitButton');
  let messageBody = $('#messageBody');
  let messageTitle = $('#messageTitle');
  let messageSender = $('#messageSender');
  let senderContact = $('#senderContact');
  
  const compileMessage = () => ({
    messageBody: messageBody.val(),
    messageTitle: messageTitle.val(),
    messageSender: messageSender.val(),
    senderContact: senderContact.val()
  });  

  const clearInputFields = () => {
    const emptyString = '';
    messageBody.val(emptyString)
    messageTitle.val(emptyString) ;
    messageSender.val(emptyString);
    senderContact.val(emptyString);
  };

  const flashNotification = response => {
    if (!response.isGood) {
      notifier.showNotification(response.summary).chill(5000).hideNotification();
      return;
    }
    notifier.showNotification('Sending ...');
    setTimeout(() => {
      clearInputFields();
      setTimeout(() => {
        notifier.switchContent(response.summary).chill(1000).hideNotification();
      }, 1000);
    }, 1000);
  }

  submitButton.on('click', () => {
    let compiledMessage = compileMessage();
    let response = dispatcher.dispatch(compiledMessage);
    flashNotification(response);
  });
});
