# SData.js
![Version](https://img.shields.io/badge/version-0.2.1-blue.svg?cacheSeconds=2592000)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/artmakarov/simple-data-storage/graphs/commit-activity)
[![License: MIT](https://img.shields.io/github/license/artmakarov/simple-data-storage)](https://github.com/artmakarov/simple-data-storage/blob/master/LICENSE)

> Simple key-value storage in the browser or node


## Install

```shell script
npm i simple-data-storage
```

in browser:

```
<script src="//unpkg.com/simple-data-storage@0.2.1/dist/sdata.min.js"></script>
```


## API

#### SData(key: _any_, [value: _any_])

If there is a `value`, it sets the passed value by the specified `key`. Always returns `value`.

#### SData.init(data: _object_)

Initializes the storage from the passed `data` in JSON format.

#### SData.has(key: _any_)

Checks whether the `key` exists in the storage.
Returns a Boolean value.

#### SData.clear(key: _any_, [key_2: _any_, key_3: _any_, ...key_n: _any_])

Deletes the key and value from storage.

#### SData.toString()

Returns a snapshot of the storage as a string.


## Usage example

```js
const SData = require('simple-data-storage');

SData('one_key', 'one_value');
console.log(SData('one_key')); //=> one_value

SData(321, 963);
SData('other key', { abc: 'boom!' });

console.log(SData(321)); //=> 963
console.log(SData('321')); //=> 963
console.log(SData('other key')); //=> { abc: 'boom!' }
console.log(SData('other key').abc); //=> boom!

// clear one item
SData.clear('other key');

console.log(SData('other key')); //=> undefined
console.log(SData('one_key')); //=> one_value

// clear all items
SData(123, ['test', 4]);
SData.clear();

console.log(SData(123)); //=> undefined
console.log(SData('one_key')); //=> undefined
```

In the browser, use the global function **SData()**

```html
<script>
  SData('key', { data: [1, 'two', { other: 3 }] });
  alert(SData('key').data[2].other); //=> 3
</script>
```

## Development

```shell script
git clone git@github.com:artmakarov/simple-data-storage.git
cd simple-data-storage
npm install
npm run build
```

#### Tests

```shell script
npm run test
```


## Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/artmakarov/simple-data-storage/issues).


## License

This project is [MIT](https://github.com/artmakarov/simple-data-storage/blob/master/LICENSE) licensed.

