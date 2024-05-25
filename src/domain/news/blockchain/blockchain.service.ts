/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import Web3 from 'web3';
import { Web3EventCallback } from 'web3-core';

@Injectable()
export class Web3Service {
  public web3: Web3;
  constructor() {
    this.web3 = new Web3();
        this.web3.setProvider(new Web3.providers.HttpProvider('https://sepolia.infura.io/v3/546c10bde2474f839967d30f45a53bdf'));      
        this.web3.eth.net.isListening()
            .then(() => console.log('is connected'))
            .catch(e => console.log('Wow. Something went wrong: '+ e));
  }

  async addNewsToValidate(newsId: string): Promise<object> {

    const contractAddress: string = "0x816479aec72107fd91cdc3464d66d970878dcadc";

    const contract = new this.web3.eth.Contract([
        {
            "inputs": [
                {
                    "internalType": "string[]",
                    "name": "newsId",
                    "type": "string[]"
                }
            ],
            "name": "addNews",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "validatorAddress",
                    "type": "address"
                },
                {
                    "internalType": "string",
                    "name": "name_",
                    "type": "string"
                }
            ],
            "name": "addValidator",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "news",
                    "type": "uint256"
                }
            ],
            "name": "approveVote",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "endVote",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "news",
                    "type": "uint256"
                }
            ],
            "name": "rejectVote",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "startVote",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [],
            "name": "chairperson",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "newsCollection",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "id",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "approveCount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "rejectCount",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "resultNews",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "result_",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "state",
            "outputs": [
                {
                    "internalType": "enum NewsValidate.State",
                    "name": "",
                    "type": "uint8"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "validators",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                },
                {
                    "internalType": "enum NewsValidate.ValidatorVote",
                    "name": "vote",
                    "type": "uint8"
                },
                {
                    "internalType": "bool",
                    "name": "exist",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "validatorVote",
            "outputs": [
                {
                    "internalType": "enum NewsValidate.ValidatorVote",
                    "name": "",
                    "type": "uint8"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ], contractAddress)

    const addNewsMethod = contract.methods.addNews([newsId]);
    const account = '0xf9f064b5a9d851E2196Ad8a41c7da4ccEAdB16a2';
    const privateKey = '58bdc978637e943b33db6c82ac7a8edbb4ced269f5b6af5348e9c3943f95858a';

    const tx = {
        from: account,
        to: contractAddress,
        data: addNewsMethod.encodeABI(),
        gas: await addNewsMethod.estimateGas({from: account}),
        gasPrice: await this.web3.eth.getGasPrice()
    };

    let txReturn: object;
    
    this.web3.eth.accounts.signTransaction(tx, privateKey).then(signed => {
        this.web3.eth.sendSignedTransaction(signed.rawTransaction)
        .once('transactionHash', function(hash){ console.log("txHash", hash) })
        .once('receipt', function(receipt){ console.log("receipt", receipt) })
        .on('error', function(error){ console.log("error", error) })
        .then(function(hash){
            txReturn = { response: "OK", txHash: hash };
        });
    });
    return txReturn
  }

  async getBlockNumber(): Promise<bigint> {
    return await this.web3.eth.getBlockNumber();
  }
}