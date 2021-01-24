'use strict';

// JSON === Javascript Object Notation

// Object to JSON
const me = {
  name: 'Yechan Lee',
  sex: 'male',
  age: 22,
  height: 167,
  now: new Date(),
  //symbol: Symbol('id'),
  walk: () => console.log(`${name} is walking.`),
};
let json = JSON.stringify(me);
console.log(json);

json = JSON.stringify(me, ['name', 'age']);
console.log(json);

json = JSON.stringify(me, (key, value) => {
  console.log(`key: ${key}, value:${value}`);
  key === 'name' ? (value = '<' + value + '>') : (value = value);
  if (key === 'height') value = 187;
  return key, value;
});
console.log(json);

// JSON to Object
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value:${value}`);
  return key === 'now' ? new Date() : value;
});
console.log(obj);

try {
  obj.walk();
} catch {
  console.log('I cannot walk');
}
