let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let copyObj = (obj, arr) => {
  //console.log(arr);
  let objCpy = {};

  if (arr) {
    arr.forEach(el => {
      objCpy[el] = obj[el];
    })
    return objCpy;
  }
  
  return Object.assign({}, obj);
}

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }