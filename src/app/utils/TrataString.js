function TrataString(string) {
  let novaString = string.replace(/\s/g, '');

  novaString = novaString.normalize('NFD').replace(/[^a-zA-Zs ]/g, '');

  return novaString;
}

module.exports = TrataString;
