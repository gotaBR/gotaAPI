function TrataString(string) {
  let novaString = string.replace(/-/g, ' ');

  const capitalize = (str, lower = false) => (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) => match.toUpperCase());

  novaString = capitalize(novaString);

  return novaString;
}

module.exports = TrataString;
