(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _dispatcher = require('./lib/dispatcher');

var _dispatcher2 = _interopRequireDefault(_dispatcher);

var _notifier = require('./lib/notifier');

var _notifier2 = _interopRequireDefault(_notifier);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(function () {
  var submitButton = $('#submitButton');
  var messageBody = $('#messageBody');
  var messageTitle = $('#messageTitle');
  var messageSender = $('#messageSender');
  var senderContact = $('#senderContact');

  var compileMessage = function compileMessage() {
    return {
      messageBody: messageBody.val(),
      messageTitle: messageTitle.val(),
      messageSender: messageSender.val(),
      senderContact: senderContact.val()
    };
  };

  var clearInputFields = function clearInputFields() {
    var emptyString = '';
    messageBody.val(emptyString);
    messageTitle.val(emptyString);
    messageSender.val(emptyString);
    senderContact.val(emptyString);
  };

  var flashNotification = function flashNotification(response) {
    if (!response.isGood) {
      _notifier2.default.showNotification(response.summary).chill(5000).hideNotification();
      return;
    }
    _notifier2.default.showNotification('Sending ...');
    setTimeout(function () {
      clearInputFields();
      setTimeout(function () {
        _notifier2.default.switchContent(response.summary).chill(1000).hideNotification();
      }, 1000);
    }, 1000);
  };

  submitButton.on('click', function () {
    var compiledMessage = compileMessage();
    var response = _dispatcher2.default.dispatch(compiledMessage);
    flashNotification(response);
  });
});

},{"./lib/dispatcher":2,"./lib/notifier":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dispatcher = function () {
  function Dispatcher() {
    _classCallCheck(this, Dispatcher);

    this.apiUrl = 'https://mfalade-email-service.herokuapp.com/api/v1/sendmail';
    this.successMessage = 'Message sent!';
    this.missingFieldMessage = 'Please fill out the required fields!';
    this.errorMessage = 'Your message could not be sent. Please try again later!';
  }

  _createClass(Dispatcher, [{
    key: 'validate',
    value: function validate(message) {
      var verdict = {
        message: message,
        isGood: true,
        summary: this.successMessage
      };
      for (var field in message) {
        if (!message[field] || !message[field].length) {
          return _extends({}, verdict, { isGood: false, summary: this.missingFieldMessage });
        }
      }
      return verdict;
    }
  }, {
    key: 'postMessage',
    value: function postMessage(message) {
      var requestContext = {
        url: this.apiUrl,
        type: "POST",
        data: JSON.stringify(message),
        dataType: "xml",
        contentType: "application/json"
      };
      return $.ajax(requestContext);
    }
  }, {
    key: 'dispatch',
    value: function dispatch(message) {
      var _this = this;

      var verdict = this.validate(message);
      if (verdict.isGood) {
        this.postMessage(message).done(function (data) {
          if (data.status_code !== 200) {
            verdict = _extends({}, verdict, { isGood: false, summary: _this.errorMessage });
          }
        });
        return verdict;
      }
      return verdict;
    }
  }]);

  return Dispatcher;
}();

exports.default = new Dispatcher();

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Notifier = function () {
  function Notifier() {
    _classCallCheck(this, Notifier);

    this.notification = $('#notification');
    this.notification.hide();
    this.chillDuration = 2000;
  }

  _createClass(Notifier, [{
    key: "showNotification",
    value: function showNotification(message) {
      this.notification.text(message);
      this.notification.show();
      return this;
    }
  }, {
    key: "hideNotification",
    value: function hideNotification() {
      var _this = this;

      setTimeout(function () {
        _this.notification.fadeOut("slow");
      }, this.chillDuration);
    }
  }, {
    key: "chill",
    value: function chill(newDuration) {
      this.chillDuration = newDuration;
      return this;
    }
  }, {
    key: "switchContent",
    value: function switchContent(newContent) {
      this.notification.text(newContent);
      return this;
    }
  }]);

  return Notifier;
}();

exports.default = new Notifier();

},{}]},{},[1])


//# sourceMappingURL=build.js.map
