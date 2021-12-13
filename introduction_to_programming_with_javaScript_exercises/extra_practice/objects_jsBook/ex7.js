let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj.qux = 3;

let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key); // qux
});

for (let key in myObj) {
  console.log(key); // qux, foo, bar
}

// The keys static method iterates over the properties explicity defined
// by the myObj object. Whereas, the for/in method iterates through the myObj object's 
// own properties as well as the properties inherited from it's prototype myProtoObj