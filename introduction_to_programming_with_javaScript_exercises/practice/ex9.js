function extractRegion(locale) {
  let arr = locale.split('.')[0]
  console.log(arr.slice(arr.length - 2));
  //console.log(`${locale.substring(locale.indexOf('_') + 1, locale.indexOf('_') + 3)}`);
}


extractRegion('en_US.UTF-8');  // 'US'
extractRegion('en_GB.UTF-8');  // 'GB'
extractRegion('ko_KR.UTF-16'); // 'KR'