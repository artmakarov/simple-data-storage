const root = typeof global !== 'undefined' ? global : self;
const storagePrefix = '__SIMPLE_DATA_STORAGE__';
const objectPrototype = Object.prototype;

let storage = root[storagePrefix] = {};

function SData(key, value) {
  const { length: argsLength } = arguments;

  if (argsLength === 0) {
    return storage;
  }

  if (argsLength > 1) {
    storage[key] = value;
  }

  return storage[key];
}

SData.init = (data) => {
  if (objectPrototype.toString.call(data) !== '[object Object]') {
    throw new TypeError('Incorrect data');
  }

  storage = root[storagePrefix] = data;
};

SData.has = (key) => objectPrototype.hasOwnProperty.call(storage, key);

SData.clear = function () {
  if (arguments.length === 0) {
    storage = root[storagePrefix] = {};
  } else {
    [].forEach.call(arguments, (key) => {
      delete storage[key];
    });
  }
};

SData.toString = () => JSON.stringify(storage);

export default SData;
