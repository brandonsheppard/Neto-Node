var request = require('request');

var hasWarning = function(body) {
	return (body.Messages && body.Messages.Warning);
};

var hasError = function(body) {
	return (body.Messages && body.Messages.Error);
};

var success = function(body) {
	return body.Ack && body.Ack == 'Success';
}

var netoNode = function(options) {
	this.uri = options.uri.replace(/\/$/, "") + '/do/WS/NetoAPI';
	this.api_key = options.api_key;
};

netoNode.prototype = {
	_headers: function(action) {
		return {
			'Accept': 'application/json',
			'NETOAPI_KEY': this.api_key,
			'NETOAPI_ACTION': action
		};
	},
	_buildOptions: function(action, body) {
		return {
			uri: this.uri,
			json: true,
			headers: this._headers(action),
			body: body
		};
	},
	_post: function(action, data, callback) {
		var options = this._buildOptions(action, data);
		console.log(JSON.stringify(options, null, 2));

		return request.post(
			options,
			function(err, response, body) {
				if(!err && !success(body) && hasError(body))
					err = body.Messages.Error;

				return callback(err, body);
			});
	},

	// Orders
	getOrder: function(filter, callback) {
		this._post('GetOrder', filter, callback);
	},

	addOrder: function(order, callback) {
		this._post('AddOrder', order, callback);
	},

	updateOrder: function(order, callback) {
		this._post('UpdateOrder', order, callback);
	},

	// Payments
	getPayment: function(filter, callback) {
		this._post('GetPayment', filter, callback);
	},

	addPayment: function(payment, callback) {
		this._post('AddPayment', payment, callback);
	},

	// Items / Products
	getItem: function(filter, callback) {
		this._post('GetItem', filter, callback);
	},

	addItem: function(item, callback) {
		this._post('AddItem', item, callback);
	},

	updateItem: function(item, callback) {
		this._post('UpdateItem', item, callback);
	},

	// Categories
	getCategory: function(filter, callback) {
		this._post('GetCategory', filter, callback);
	},

	addCategory: function(category, callback) {
		this._post('AddCategory', category, callback);
	},

	updateCategory: function(category, callback) {
		this._post('UpdateCategory', category, callback);
	},

	// Customers
	getCustomer: function(filter, callback) {
		this._post('GetCustomer', filter, callback);
	},

	addCustomer: function(customer, callback) {
		this._post('AddCustomer', customer, callback);
	},

	updateCustomer: function(customer, callback) {
		this._post('UpdateCustomer', customer, callback);
	},

	// Warehouses
	getWarehouse: function(filter, callback) {
		this._post('GetWarehouse', filter, callback);
	},

	addWarehouse: function(warehouse, callback) {
		this._post('AddWarehouse', warehouse, callback);
	},

	updateWarehouse: function(warehouse, callback) {
		this._post('UpdateWarehouse', warehouse, callback);
	},

	// Content
	getContent: function(filter, callback) {
		this._post('GetContent', filter, callback);
	},

	addContent: function(content, callback) {
		this._post('AddContent', content, callback);
	},

	updateContent: function(content, callback) {
		this._post('UpdateContent', content, callback);
	},

	// Suppliers
	getSupplier: function(filter, callback) {
		this._post('GetSupplier', filter, callback);
	},

	addSupplier: function(content, callback) {
		this._post('AddSupplier', content, callback);
	},

	updateSupplier: function(content, callback) {
		this._post('UpdateSupplier', content, callback);
	},

	// Currency settings
	getCurrencySettings: function(filter, callback) {
		this._post('GetCurrencySettings', filter, callback);
	},

	updateCurrencySettings: function(content, callback) {
		this._post('UpdateCurrencySettings', content, callback);
	}
}

module.exports = netoNode;
