const _ = require('lodash');
const yargs = require('yargs');

const users = require('./users');
const universes = require('./universes');


var argv = yargs.argv;
var command = argv._[0];


if (command === 'add') {
  var universe = universes.addUniverse(argv.name, argv.size);
  if (universe) {
    console.log('Universe created');
    console.log('--');
    console.log(`Name: ${universe.name}`);
    console.log(`Size: ${universe.size}`);
  } else {
    console.log(`This universe already exists`);
  }
} else if (command === 'list') {
  universes.getAllUniverses();
} else if (command === 'get') {
  universes.getUniverse(argv.name);
} else if (command === 'remove') {
  universes.removeUniverse(argv.name)
} else {
  console.log('Command not reconized')
}
