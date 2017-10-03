const _ = require('lodash');
const yargs = require('yargs');

const users = require('./users');
const universes = require('./universes');

const nameOptions = {
  describe: 'Name of the universe',
  demand: 'true',
  alias: 'n'
};

const sizeOptions = {
  describe: 'Name of the universe',
  demand: 'true',
  alias: 's'
};

const argv = yargs
  .command('add', 'Add a new universe', {
    name: nameOptions,
    size: sizeOptions
  })
  .command('list', 'List all universes')
  .command('get', 'Get an universe', {
    name: nameOptions
  })
  .command('remove', 'Remove an universe', {
    name: nameOptions
  })
  .help()
  .argv;

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
  console.log(message);
} else {
  console.log('Command not reconized');
}
