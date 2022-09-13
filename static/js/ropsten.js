ropsten_ABI = [
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
	}
]