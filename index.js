'use strict';
const obj = {
  a: 'foo',
  b: {
    c: {
      d: 'bar',
      e: 100,
    },
    Z: 'baz',
  },
};

const {a, b: { c: { d }, Z }} = obj;

console.log(`a = ${a}`); // a = foo
console.log(`d = ${d}`); // d = bar
console.log(`Z = ${Z}`); // Z = baz

//スプレッド構文
console.log(`スプレッド構文-------------`); 
console.log(`展開-------------`); 
const data = [15, -3, 78, 1, 100];
console.log(data);
console.log(...data);//個別の値が取り出される
console.log(Math.max(...data)); //=>100　ES2018より
console.log(Math.max.apply(null, data));//これまではこのように書いていた。
console.log(`配列の複製-------------`); 
const array = [1, 2, 3, 4];
const arrayClone = [...array];//配列のクローン
console.log(array);
console.log(arrayClone);
console.log(array === arrayClone);//=> false クローンなので同じものと判断されない

const nameData = {taro: 1, jiro: 2};
const nameDataClone = {...nameData};//連想配列のクローン
console.log(nameData);
console.log(nameDataClone);
console.log(nameData === nameDataClone);//=> false クローンなので同じものと判断されない