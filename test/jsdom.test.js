/**
 * @jest-environment jsdom
 */
import SData from '../src/index';

const root = typeof global !== 'undefined' ? global : self;
const storagePrefix = '__SIMPLE_DATA_STORAGE__';
const storage = root[storagePrefix];


test('Adding data', () => {
  SData('test_key1', 1);
  expect(storage.test_key1).toBe(1);
  expect(SData('test_key1', 2)).toBe(2);
  expect(SData('test_key2')).toBeUndefined();
  expect(SData('test_key2', { value: 'test value' }).value).toBe('test value');
});


test('Сheck if there is a key', () => {
  expect(SData.has('toString')).toBe(false);
  expect(SData.has('test_key2')).toBe(true);
  expect(SData.has('test_key3')).toBe(false);
});


test('Clear data', () => {
  SData.clear('test_key1');

  expect(SData('test_key1')).toBeUndefined();
  expect(SData('test_key2').value).toBe('test value');

  SData.clear('test_key3');
  SData.clear('test_key2');

  expect(JSON.stringify(storage)).toBe('{}');

  SData('test_key3', ['test item']);
  SData.clear();

  expect(JSON.stringify(storage)).not.toBe('{}');
  expect(JSON.stringify(root[storagePrefix])).toBe('{}');
});
