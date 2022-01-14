function extractRegion(locale) {
  let arr = locale.split('.')[0]
  return arr.slice(arr.length - 2);
}

function extractLanguage(locale) {
  return locale.slice(0, 2);
}

function greet(languageCode) {
  switch (languageCode) {
    //case 'en': return 'Hi!';
    case 'fr': return 'Salut!';
    case 'pt': return 'Olá!';
    case 'de': return 'Hallo!';
    case 'sv': return 'Hej!';
    case 'af': return 'Haai!';
  }
}

function localGreet(locale) {
  let region = extractRegion(locale);
  let langCode = extractLanguage(locale);
  if (langCode === 'en' && region === 'US') return 'Hey!';
  else if (langCode === 'en' && region === 'GB') return 'Hello!';
  else if (langCode === 'en' && region === 'AU') return 'Howdy!';
  else return greet(langCode);
}

console.log(localGreet('en_US.UTF-8')); // 'Hey!'
console.log(localGreet('en_GB.UTF-8')); // 'Hello!'
console.log(localGreet('en_AU.UTF-8')); // 'Howdy!'

console.log(localGreet('fr_FR.UTF-8')); // 'Salut!'
console.log(localGreet('fr_CA.UTF-8')); // 'Salut!'
console.log(localGreet('fr_MA.UTF-8')); // 'Salut!'