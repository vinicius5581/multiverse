const fs = require('fs');

var fetchMultiverse = () => {
  try {
    var multiverseString = fs.readFileSync('multiverse-data.json');
    return JSON.parse(multiverseString);
  } catch(e) {
    return [];
  }
}

var saveMultiverse = (multiverse) => {
  fs.writeFileSync('multiverse-data.json', JSON.stringify(multiverse));
}

var addUniverse = (name, size) => {
  var multiverse = fetchMultiverse();
  var universe = {
    name,
    size
  };
  var duplicateUniverses = multiverse.filter(universe => universe.name === name);

  if (duplicateUniverses.length === 0) {
    multiverse.push(universe);
    saveMultiverse(multiverse);
    return universe;
  }
};

var getAllUniverses = () => {
  return fetchMultiverse();
}

var getUniverse = (name) => {
  var multiverse = fetchMultiverse();
  var filteredUniverses = multiverse.filter(universe => universe.name === name);
  return filteredUniverses[0];
}

var removeUniverse = (name) => {
  var multiverse = fetchMultiverse();
  var filteredUniverses = multiverse.filter(universe => universe.name !== name);
  saveMultiverse(filteredUniverses);
  return multiverse.length !== filteredUniverses.length;
}

var logUniverse = (universe) => {
  debugger;
  console.log('--');
  console.log(`Name: ${universe.name}`);
  console.log(`Size: ${universe.size}`);
};

module.exports = {
  addUniverse,
  getAllUniverses,
  getUniverse,
  removeUniverse,
  logUniverse
}
