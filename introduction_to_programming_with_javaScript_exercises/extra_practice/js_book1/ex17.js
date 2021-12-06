let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let copyObj = (obj, keysArr = Object.keys(obj)) => {
  let objCopy = {};

  for (let i = 0; i < keysArr.length; i += 1) {
    objCopy[keysArr[i]] = obj[keysArr[i]];
    //console.log(i);
  }

  return objCopy;
}

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }