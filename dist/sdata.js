/*!
 * simple-data-storage v1.0.0
 * (c) 2019-2020 Makarov Artem
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.SData = factory());
}(this, (function () { 'use strict';

  var root = typeof global !== 'undefined' ? global : self;
  var storagePrefix = '__SIMPLE_DATA_STORAGE__';
  var objectPrototype = Object.prototype;
  var storage = root[storagePrefix] = {};

  function SData(key, value) {
    var argsLength = arguments.length;

    if (argsLength === 0) {
      return storage;
    }

    if (argsLength > 1) {
      storage[key] = value;
    }

    return storage[key];
  }

  SData.init = function (data) {
    if (objectPrototype.toString.call(data) !== '[object Object]') {
      throw new TypeError('Incorrect data');
    }

    storage = root[storagePrefix] = data;
  };

  SData.has = function (key) {
    return objectPrototype.hasOwnProperty.call(storage, key);
  };

  SData.clear = function () {
    if (arguments.length === 0) {
      storage = root[storagePrefix] = {};
    } else {
      [].forEach.call(arguments, function (key) {
        delete storage[key];
      });
    }
  };

  SData.toString = function () {
    return JSON.stringify(storage);
  };

  return SData;

})));
