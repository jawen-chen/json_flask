const Structure_ABI = [
    {
      "inputs": [
        {
          "name": "initData",
          "type": "uint256"
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
          "type": "uint256"
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
          "type": "uint256"
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
          "type": "uint256"
        }
      ],
      "name": "setData",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "increaseData",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
  