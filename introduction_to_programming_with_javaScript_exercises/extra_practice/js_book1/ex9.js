function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}
// 0, false, '', undefined, null, -0, bigint0n
isArrayEmpty([]); // Not Empty