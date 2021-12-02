let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj.kung = 'foo';
myObj['Bruce'] = 'lee';
console.log(myObj);