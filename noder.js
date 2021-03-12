const util = require('util');
const exec = util.promisify(require('child_process').exec);



async function lsExample() {
  const { stdout, stderr } = await exec('python rrGetter.py');
  console.log('stdout:', stdout);
  console.error('stderr:', stderr);
}
lsExample();