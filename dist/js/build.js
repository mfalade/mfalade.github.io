(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
  var dispatcher = new _dispatcher2.default();

  var compileMessage = function compileMessage() {
    return {
      messageBody: messageBody.val(),
      messageTitle: messageTitle.val(),
      messageSender: messageSender.val(),
      senderContact: senderContact.val()
    };
  };

  submitButton.on('click', function () {
    dispatcher.dispatch(compileMessage());
  });
});

},{"./lib/dispatcher":2}],2:[function(require,module,exports){
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
      if (this.validate(message)) {}
      return this.notify(this.errorMessage);
    }
  }, {
    key: 'validate',
    value: function validate(message) {}
  }, {
    key: 'notify',
    value: function notify(notification) {
      console.log('Wahala dey o');
    }
  }]);

  return Dispatcher;
}();

exports.default = Dispatcher;

},{}]},{},[1])


//# sourceMappingURL=build.js.map
