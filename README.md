# SData.js
![Version](https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/artmakarov/simple-data-storage/graphs/commit-activity)
[![License: MIT](https://img.shields.io/github/license/artmakarov/simple-data-storage)](https://github.com/artmakarov/simple-data-storage/blob/master/LICENSE)

> Simple key-value storage in the browser or node


## Install

```shell script
npm i simple-data-storage
```

in browser:

```
<script src="//unpkg.com/simple-data-storage@0.1.0/dist/sdata.min.js"></script>
```


## Usage example

```js
const sdata = require('simple-data-storage');

sdata('one_key', 'one_value');
console.log(sdata('one_key')); //=> one_value

sdata(321, 963);
sdata('other key', { abc: 'boom!' });
console.log(sdata(321)); //=> 963
console.log(sdata('321')); //=> 963
console.log(sdata('other key')); //=> { abc: 'boom!' }
console.log(sdata('other key').abc); //=> boom!

// clear one item
sdata.clear('other key');
console.log(sdata('other key')); //=> undefined
console.log(sdata('one_key')); //=> one_value

// clear all items
sdata(123, ['test', 4]);
sdata.clear();
console.log(sdata(123)); //=> undefined
console.log(sdata('one_key')); //=> undefined
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

