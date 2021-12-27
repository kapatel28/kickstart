const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');  // local computer to

const buildPath = path.resolve(__dirname,'build');
// remove folder if exists including child
fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname,'contracts','Campaign.sol');

const source = fs.readFileSync(campaignPath,'utf8');

const output =solc.compile(source,1).contracts;  // contains two elements one for each contract

// create directory if doesn't exists
fs.ensureDirSync(buildPath);

console.log(output);

for ( let contract in output) {
  fs.outputJsonSync(
    path.resolve(buildPath,contract.replace(':','')+'.json'),
    output[contract]
  )
}
