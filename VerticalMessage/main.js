function showVerticalMessage(str) {

  str = str[0].toUpperCase() + str.slice(1);
  
  const isValidLength = (str.length <= 10);

  if (!isValidLength) str = str.slice(0, 10);
  
  for (let prop of str) {
    console.log(prop)
  }
}

showVerticalMessage('марафон')