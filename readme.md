# Neto-Node

This is a node API wrapper for Neto's API.

## Examples

### Products

#### Add a product

```
const Neto = require('netoNode');
const api = new netoNode({ uri: 'https://mysite.neto.com.au', api_key: 'api_key'});

let content = {
	"Item": [ {
		'SKU': 'aaa134',
		'Name': 'My product'
	} ]﻿
};
api.addItem(content, function(err, res) {
	if(err) console.log(err);
	console.log(res);
});
```

#### Edit a product

```
const Neto = require('netoNode');
const api = new netoNode({ uri: 'https://mysite.neto.com.au', api_key: 'api_key'});

let content = {
	"Item": [ {
		'SKU': 'aaa134', // Select by SKU
		'Name': 'My product' // New product name
	} ]﻿
};
api.updateItem(content, function(err, res) {
	if(err) console.log(err);
	console.log(res);
});
```

#### Get products

```
const Neto = require('netoNode');
const api = new netoNode({ uri: 'https://mysite.neto.com.au', api_key: 'api_key'});

let content = {
	"Filter": [ {
		'IsActive': "True", // Find products which meet this criteria
		"OutputSelector": "Approved", // And give me these fields
		"OutputSelector": "BuyUnitQuantity",
		"OutputSelector": "SellUnitQuantity"
	} ]﻿
};
api.getItem(content, function(err, res) {
	if(err) console.log(err);
	console.log(res.Item);
});
```
