export const hlpr_getReadablePhone = phoneNr => {
    const numbers = {
      eins: 1,
      zwei: 2,
      drei: 3,
      vier: 4,
      fünf: 5,
      sechs: 6,
      sieben: 7,
      acht: 8,
      neun: 9,
      null: 0
    };
  
    let readablePhoneNr = phoneNr;
  
    for (let number in numbers) {
      const regex = new RegExp(hlpr_escapeRegExp(number), 'g');
      readablePhoneNr = readablePhoneNr.replace(regex, numbers[number]);
    }
  
    return readablePhoneNr;
  };
  
  export const hlpr_getReadableEMail = email => {
    const mail = {
      '[at]': '@',
      '[punkt]': '.',
      '[minus]': '-'
    };
    let readableEMail = email;
  
    for (let word in mail) {
      const regex = new RegExp(hlpr_escapeRegExp(word), 'g');
      readableEMail = readableEMail.replace(regex, mail[word]);
    }
    return readableEMail;
  };
  
  export const hlpr_escapeRegExp = string => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  };
  
  export const hlpr_createId = (addOn = '') => {
    return `${hlpr_createUUIDv4()}${addOn}`;
  };
  
  export const hlpr_createUUIDv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (Math.random() * 16) | 0,
        v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  };
  
  export const hlpr_formatValueToCurrency: formatValueToCurrency = (
    value,
    currency = 'EUR',
    lang = 'de-DE'
  ) => {
    const biggerUnit = value / 100;
    const formattedCurrency = biggerUnit.toLocaleString(lang, {
      style: 'currency',
      currency
    });
  
    return formattedCurrency;
  };
  