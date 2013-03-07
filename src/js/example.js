define([
  'jquery'
], function($) {
  'use strict';

  var ExampleClass = function() {

  };

  ExampleClass.prototype.initialize = function() {
    console.log('initialize');
  }

  return ExampleClass;
});
