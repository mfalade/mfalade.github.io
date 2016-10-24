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

  var flashNotification = function flashNotification(message) {
    _notifier2.default.showNotification();
    setTimeout(function () {
      clearInputFields();
      setTimeout(function () {
        _notifier2.default.switchContent(message).chill(1000).hideNotification();
      }, 1000);
    }, 1500);
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dispatcher = function () {
  function Dispatcher() {
    _classCallCheck(this, Dispatcher);

    this.notifications = [];
  }

  _createClass(Dispatcher, [{
    key: 'dispatch',
    value: function dispatch(message) {
      if (this.validate(message)) {
        console.log('validated message');
      }
      return this.notify('Message sent.');
    }
  }, {
    key: 'validate',
    value: function validate(message) {
      return true;
    }
  }, {
    key: 'notify',
    value: function notify(notification) {
      return notification;
    }
  }]);

  return Dispatcher;
}();

exports.default = new Dispatcher();

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Preloader = function () {
  function Preloader() {
    _classCallCheck(this, Preloader);

    this.preloader = $('#preloader');
    this.preloader.hide();
  }

  _createClass(Preloader, [{
    key: 'showNotification',
    value: function showNotification() {
      this.preloader.text('Sending ...');
      this.preloader.show();
    }
  }, {
    key: 'hideNotification',
    value: function hideNotification() {
      var _this = this;

      setTimeout(function () {
        _this.preloader.fadeOut("slow");
      }, 2000);
    }
  }, {
    key: 'chill',
    value: function chill(forAWhile) {
      setTimeout(function () {
        // I'm just here chillin'
      }, forAWhile);
      return this;
    }
  }, {
    key: 'switchContent',
    value: function switchContent(newContent) {
      this.preloader.text(newContent);
      return this;
    }
  }]);

  return Preloader;
}();

exports.default = new Preloader();

},{}]},{},[1])


//# sourceMappingURL=build.js.map
