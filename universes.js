const fs = require('fs');


console.log('Universes');

var fetchUniverses = () => {
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

const addUniverse = (name, size) => {
  console.log("New universe: ", name, size);
  var multiverse = fetchUniverses();
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

const getAllUniverses = () => {
  console.log('Get all universes');
}
const getUniverse = (name) => {
  console.log('Get universe', name);
}
const removeUniverse = (name) => {
  console.log('Remove universe', name);
}

module.exports = {
  addUniverse,
  getAllUniverses,
  getUniverse,
  removeUniverse
}
