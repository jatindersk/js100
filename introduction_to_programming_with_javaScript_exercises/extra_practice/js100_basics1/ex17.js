let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';
console.log(`${/x/.test(byteSequence)}`);

console.log(byteSequence.split('').includes('x'));