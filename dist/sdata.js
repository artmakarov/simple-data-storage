/*!
 * simple-data-storage v0.1.0
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
  var storage = root[storagePrefix] = {};

  function SData(key, value) {
    if (arguments.length > 1) {
      storage[key] = value;
    }

    return storage[key];
  }

  SData.has = function (key) {
    return Object.prototype.hasOwnProperty.call(storage, key);
  };

  SData.clear = function (key) {
    if (key === void 0) {
      storage = root[storagePrefix] = {};
    } else {
      delete storage[key];
    }
  };

  return SData;

})));
