const root = typeof global !== 'undefined' ? global : self;
const storagePrefix = '__SIMPLE_DATA_STORAGE__';
const objectPrototype = Object.prototype;

let storage = root[storagePrefix] = {};

function SData(key, value) {
  if (arguments.length > 1) {
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

SData.clear = (...args) => {
  if (!args.length) {
    storage = root[storagePrefix] = {};
  } else {
    args.forEach((key) => {
      delete storage[key];
    });
  }
};

SData.toSting = () => JSON.stringify(storage);

export default SData;
