# Neto-Node

This is a node API wrapper for Neto's API.

## Example

```
const Neto = require('neto-node');
const api = new Neto({ uri: 'https://mysite.neto.com.au', api_key: 'api_key'});

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
