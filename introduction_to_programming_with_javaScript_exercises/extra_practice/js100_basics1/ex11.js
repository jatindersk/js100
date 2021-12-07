let extractRegion = loc => {
  // console.log(loc.substring(3, 5));
  // console.log(loc.slice(3, 5));
  return loc.split('.')[0].split('_')[1];
}

let extractLanguage = locale =>  locale.substring(0, 2);  // locale.split('_')[0];
  
let greet = code => {
  switch (code) {
    case 'en':
      console.log('Hi!');
      break;
    case 'fr':
      console.log('Salut!');
      break;
    case 'pt':
      console.log('Olá!');
      break;
    case 'de':
      console.log('Hallo!');
      break;
    case 'sv':
      console.log('Hej!');
      break;
    case 'af':
      console.log('Haai!');
      break;
    default:
      console.log('Invalid Input');
  }
}

let localGreet = locale => {
  let region = extractRegion(locale);
  let lang = extractLanguage(locale);

  if (region === 'US') console.log('Hey!');
  else if (region === 'GB') console.log('Hello!');
  else if (region === 'AU') console.log('Howdy!');
  else greet(lang);
}

localGreet('en_US.UTF-8'); // 'Hey!'
localGreet('en_GB.UTF-8'); // 'Hello!'
localGreet('en_AU.UTF-8'); // 'Howdy!'

localGreet('fr_FR.UTF-8'); // 'Salut!'
localGreet('fr_CA.UTF-8'); // 'Salut!'
localGreet('fr_MA.UTF-8'); // 'Salut!'