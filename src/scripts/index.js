import Dispatcher from './lib/dispatcher';

$(() => {
  let submitButton = $('#submitButton');
  let messageBody = $('#messageBody');
  let messageTitle = $('#messageTitle');
  let messageSender = $('#messageSender');
  let senderContact = $('#senderContact');
  let dispatcher = new Dispatcher();

  const compileMessage = () => ({
    messageBody: messageBody.val(),
    messageTitle: messageTitle.val(),
    messageSender: messageSender.val(),
    senderContact: senderContact.val()
  });  

  submitButton.on('click', () => {
    dispatcher.dispatch(compileMessage());
  });
});
