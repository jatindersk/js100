let greet = (code, reg) => {
  switch (code) {
    case 'en':
      if (reg === 'US') {
        console.log('Hey!');
      } else if (reg === 'GB') {
        console.log('Hello!');
      } else {
        console.log('Howdy!');
      }
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

let extractLanguage = locale =>  locale.substring(0, 2);

let extractRegion = locale => locale.substring(3, 5);

function localGreet (loc) {
  greet(extractLanguage(loc), extractRegion(loc));
}

localGreet('en_US.UTF-8'); // 'Hey!'
localGreet('en_GB.UTF-8'); // 'Hello!'
localGreet('en_AU.UTF-8'); // 'Howdy!'

localGreet('fr_FR.UTF-8'); // 'Salut!'
localGreet('fr_CA.UTF-8'); // 'Salut!'
localGreet('fr_MA.UTF-8'); // 'Salut!'