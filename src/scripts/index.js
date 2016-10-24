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

  const flashNotification = (message) => {
    notifier.showNotification();
    setTimeout(() => {
      clearInputFields();
      setTimeout(() => {
        notifier.switchContent(message).chill(1000).hideNotification();
      }, 1000);
    }, 1500);
  }

  submitButton.on('click', () => {
    let compiledMessage = compileMessage();
    let response = dispatcher.dispatch(compiledMessage);
    flashNotification(response);
  });
});
