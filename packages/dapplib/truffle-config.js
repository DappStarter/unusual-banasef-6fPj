require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install inhale fresh turn bitter birth maze column gesture open flower genuine'; 
let testAccounts = [
"0x400f891bc9bd81e508c774eae737368debdb734856e34d65fa84564ee4a6d008",
"0x7d639c470b8c2b871467a4384d1440f8f14af14baec26fb5963fa7f8bdfa0677",
"0x845433bf97df17b57fcbcbd2d947cf562b3f511c0ab4ebfe81deb9fb9ee888d4",
"0x270a2fe65e15cbc10c8d05ebc117d1244acad9868bb542101567ededa11805dd",
"0xc2bfbb6e6db52bdc0182fe4d3985b544a0c5d041d7dc52636734329946c91f57",
"0xf2b425a21dde805d5b0be8fa6f8398e4b221a0fcccb92b67d4fb9b5d3849dcd9",
"0x3fe0995108d14cecd7066dc2d58d0f93950881f3ffaa894b40bdf569ee182331",
"0x1fb8d8687c196873e9c396306511777820c22edd79f011436d34e1efa09a61ea",
"0x88d6d03b1b415fb562bdb56520a4895be1ad83fa455cf043c4b396c6de79b748",
"0xf5acd4345d340af7394056e457cf81646a3e977d3927cc94c504bcad70def205"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

