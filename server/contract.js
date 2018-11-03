const Web3 = require('web3');
const fs = require('fs');
console.log(web3);
const contractAddress = '0x17c7e507c384f080ac92d626A39bF0a22CBEe6f6';
const abi = [{
        "constant": false,
        "inputs": [{
            "name": "_name",
            "type": "string"
        }],
        "name": "addCandidate",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [{
            "name": "_person",
            "type": "address"
        }],
        "name": "authorize",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "end",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [{
            "name": "_voteIndex",
            "type": "uint256"
        }],
        "name": "vote",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "name": "_name",
            "type": "string"
        }],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "constant": true,
        "inputs": [{
            "name": "",
            "type": "uint256"
        }],
        "name": "candidates",
        "outputs": [{
                "name": "name",
                "type": "string"
            },
            {
                "name": "voteCount",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getAllCandidates",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "pollCreator",
        "outputs": [{
            "name": "",
            "type": "address"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "pollingName",
        "outputs": [{
            "name": "",
            "type": "string"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalVotes",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{
            "name": "",
            "type": "address"
        }],
        "name": "voters",
        "outputs": [{
                "name": "authorized",
                "type": "bool"
            },
            {
                "name": "voted",
                "type": "bool"
            },
            {
                "name": "vote",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
];

// if (typeof web3 !== 'undefined') {
// web3 = new Web3(window.web3.currentProvider);
// console.log('h');
// } else {

var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
// console.log('y');
// }
// console.log(web3.eth.contract(interface).at(contractAddress));
const contract = new web3.eth.Contract(abi, contractAddress);

module.exports = contract;