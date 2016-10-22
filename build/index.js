'use strict';

var _dispatcher = require('./lib/dispatcher');

var _dispatcher2 = _interopRequireDefault(_dispatcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(function () {
  var submitButton = $('#submitButton');
  var messageBody = $('#messageBody');
  var messageTitle = $('#messageTitle');
  var messageSender = $('#messageSender');
  var senderContact = $('#senderContact');
  var dispatcher = (0, _dispatcher2.default)();

  var compileMessage = function compileMessage() {
    return {
      messageBody: messageBody.value,
      messageTitle: messageTitle.value,
      messageSender: messageSender.value,
      senderContact: senderContact.value
    };
  };

  submitButton.on('click', function () {
    dispatcher.dispatch(compileMessage());
  });
});