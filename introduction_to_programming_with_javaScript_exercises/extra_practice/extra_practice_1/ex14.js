// let ocean = {};
// let prefix = 'Indian';

// ocean.prefix = 'Pacific';

// console.log(ocean); // { prefix: 'Pacific' }

let ocean = {};
let prefix = 'Indian';
let str;

ocean[prefix] = 'Pacific';
ocean[str = 'jatinder'] = 'name';

console.log(ocean); // { Indian: 'Pacific' }