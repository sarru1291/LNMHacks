// const contract = require('./contract');
// const Web3 = require('web3');

// // var hello = async() => {
// //         await contract.methods.addCandidate().send({
// //             from: accounts[0],
// //             value: web3.utils.toWei('0.02', 'ether')
// //         });
// //         const players = await lottery.methods.getPlayers().call({
// //             from: accounts[0]
// //         });
// // console.log(contract.methods.getAllCandidates.call());
// // console.log(contract.methods.getAllCandidates.call());
// console.log(web3.eth.getBalance(contract.options.address));

const ejs = require('ejs');
const express = require('express');

const app = express();
const port = process.env.PORT || 8085;
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('hello');
});

app.listen(port, () => {
    console.log(`server is running at port ${port}`);
})