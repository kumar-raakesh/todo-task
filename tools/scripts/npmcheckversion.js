/* eslint no-unused-vars: 0 */
/* eslint no-unreachable: 0 */
const exec = require('child_process').exec;
exec('npm -v', function(err, stdout, stderr) {
  if (err) throw err;
  if (parseFloat(stdout) < 3) {
    throw new Error('[ERROR: React Boilerplate] You need npm version @>=3');
    process.exit(1);
  }
});
