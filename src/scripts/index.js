import dispatcher from './lib/dispatcher';
import notifier from './lib/notifier';
import SmoothScroll from './lib/smooth-scroll';

$(() => {
  SmoothScroll.init();
  
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
    messageTitle.val(emptyString);
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

  console.log(
    `
    If you are seeing this, 
    it's either you are trying to figure out where my easter eggs are stashed,
    or you are checking to see if I suck at JS (I promise I don't). 
    
    Whichever it is, your snooping around is most welcome.

    For making it this far, I'll give a clue on how to reveal the easter eggs.
    They are mostly dependent on your actions on this page.
    The first would require you to interact with the contact form.
    The Second would be revealed if you click around enough
    The third only happens if you view this page at a certain time of the day.

    I'm lining up a few more.

    There you go. Have fun DECODING them ;)
    `
  )
});
