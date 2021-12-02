let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let copyObj = (obj, keyArr = Object.keys(obj)) => {           // [foo, bar, qux]
  let cpy = {};
  for (let i = 0; i < keyArr.length; i += 1) {
    cpy[keyArr[i]] = obj[keyArr[i]];
  }
  return cpy;
}

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }