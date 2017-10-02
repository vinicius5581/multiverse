const _ = require('lodash');
const os = require('os');
const yargs = require('yargs');


var user = os.userInfo().username;
console.log(`Hello ${user}!`);

var argv = yargs.argv;
var command = argv._[0];

if (command === 'add') {
  console.log('Adding a new universe');
} else if (command === 'list') {
  console.log('Listing all universes');
} else if (command === 'get') {
  console.log('Getting an universe');
} else if (command === 'remove') {
  console.log('Removing an universe');
} else {
  console.log('Command not reconized')
}
