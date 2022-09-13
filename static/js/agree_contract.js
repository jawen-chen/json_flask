const Agree_contract_ABI = [
    {
      "inputs": [
        {
          "name": "initOwner",
          "type": "address"
        },
        {
          "name": "initData",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "dataToLog",
          "type": "string"
        }
      ],
      "name": "logData",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getData",
      "outputs": [
        {
          "name": "returnData",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newData",
          "type": "string"
        }
    ],
    "name": "setData",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
]