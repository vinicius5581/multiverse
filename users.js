const os = require('os');

var user = os.userInfo().username;
console.log(`Hello ${user}!`);
