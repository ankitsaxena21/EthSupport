const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
  'stem valley chair entire hungry divide order ball imitate oven mother vivid', // account mnemonic
  'rinkeby.infura.io/v3/50af4b98fd71491785437b1894b6dff1'                          // Test Ethereum Network (Rinkeby)
);

const web3 = new Web3(provider);

const deploy = async () => {        // helper to use async-await syntax for deploy
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account ', accounts[0])  //Attempting to deploy from account  0xCB2B908B49bf55E9e7a700d83072C541918e8571

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contact deployed to ', result.options.address)  //Contact deployed to  0x007B4a6e5bbcC52B3bC863b33e87f4457c5C4147
}
deploy()
