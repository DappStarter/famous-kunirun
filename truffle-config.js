require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena forward turtle crazy remember stick snake include problem metal genuine'; 
let testAccounts = [
"0xb4e36df3b87764b78586e730fe8fca0277d3bab2f5faaee925c20a760cea87d2",
"0x40b6f67f179157a000652e4b6622afdaddc94a249d3078c781721a84b0f10e76",
"0xa9be209bdc5cf6010178752dd2ed649aaf38de03753544dfb0a4f3ef7c40341c",
"0xb4f32aede21ee6213e475fe6c94ec5637ab9af4693f6afd0cacfce3838784644",
"0x3efec5f617f61d34b0dfaa93db09e870b54e4f036fc0ae1c7dabad23c19642bf",
"0x6e1d1f62f364faf77ba390cd127ee8226dcaf5826a60ba869f00cb8a20b36420",
"0xd2c4ddf1371687c05a0abf516e1472114b8e8884d37124ac9936d60de5d58129",
"0x18c7c04f88f0b20c7c20ca52695bfc017158b250818351ed64812676c6ea1ec3",
"0x30114b9d2443b8fbde036feec5136a6f600bb73f2e39344cda7b858b7aeaccfa",
"0xcabe6a5fdd8ca28fdbb996f2b00a4a15300bd004ee163986246ee43ca6c26043"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
