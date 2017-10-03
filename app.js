const _ = require('lodash');
const yargs = require('yargs');

const users = require('./users');
const universes = require('./universes');

const argv = yargs.argv;
var command = argv._[0];

if (command === 'add') {
  var universe = universes.addUniverse(argv.name, argv.size);
  if (universe) {
    console.log(`Universe created => Name: ${universe.name} Size: ${universe.size}`);
  } else {
    console.log(`The universe ${argv.name}, already exists`);
  }
} else if (command === 'list') {
  var multiverse = universes.getAllUniverses();
  console.log(`Printing ${multiverse.length} universe(s).`);
  multiverse.forEach( universe => universes.logUniverse(universe));

} else if (command === 'get') {
  var universe = universes.getUniverse(argv.name);
  if (universe) {
    console.log('Universe foud:');
    universes.logUniverse(universe);
  } else {
    console.log('Universe not found');
  }
} else if (command === 'remove') {
  var universeRemoved = universes.removeUniverse(argv.name);
  var message = universeRemoved ? 'Universe was removed' : 'Universe not found';
} else {
  console.log('Command not reconized');
}
