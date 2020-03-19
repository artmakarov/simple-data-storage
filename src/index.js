const root = typeof global !== 'undefined' ? global : self;
const storagePrefix = '__SIMPLE_DATA_STORAGE__';

let storage = root[storagePrefix] = {};

function SData(key, value) {
  if (arguments.length > 1) {
    storage[key] = value;
  }

  return storage[key];
}

SData.has = (key) => Object.prototype.hasOwnProperty.call(storage, key);

SData.clear = (key) => {
  if (key === void 0) {
    storage = root[storagePrefix] = {};
  } else {
    delete storage[key];
  }
};

export default SData;
