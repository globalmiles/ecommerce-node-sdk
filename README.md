# Getting started

API for E-commerce Partners. This document includes Cart, Discount, Payment, Order and Return related endpoints provided by Global Miles.

## How to Build

The generated SDK relies on [Node Package Manager](https://www.npmjs.com/) (NPM) being available to resolve dependencies. If you don't already have NPM installed, please go ahead and follow instructions to install NPM from [here](https://nodejs.org/en/download/).
The SDK also requires Node to be installed. If Node isn't already installed, please install it from [here](https://nodejs.org/en/download/)
> NPM is installed by default when Node is installed

To check if node and npm have been successfully installed, write the following commands in command prompt:

* `node --version`
* `npm -version`

![Version Check](https://apidocs.io/illustration/nodejs?step=versionCheck&workspaceFolder=Global%20Miles%20E-commerce%20API-Node)

Now use npm to resolve all dependencies by running the following command in the root directory (of the SDK folder):

```bash
npm install
```

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency1&workspaceFolder=Global%20Miles%20E-commerce%20API-Node)

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency2)

This will install all dependencies in the `node_modules` folder.

Once dependencies are resolved, you will need to move the folder `GlobalMilesECommerceAPILib ` in to your `node_modules` folder.

## How to Use

The following section explains how to use the library in a new project.

### 1. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

Click on `File` and select `Open Folder`.

![Open Folder](https://apidocs.io/illustration/nodejs?step=openFolder)

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

![Open Project](https://apidocs.io/illustration/nodejs?step=openProject&workspaceFolder=Global%20Miles%20E-commerce%20API-Node)

### 2. Creating a Test File

Now right click on the folder name and select the `New File` option to create a new test file. Save it as `index.js` Now import the generated NodeJS library using the following lines of code:

```js
var lib = require('lib');
```

Save changes.

![Create new file](https://apidocs.io/illustration/nodejs?step=createNewFile&workspaceFolder=Global%20Miles%20E-commerce%20API-Node)

![Save new file](https://apidocs.io/illustration/nodejs?step=saveNewFile&workspaceFolder=Global%20Miles%20E-commerce%20API-Node)

### 3. Running The Test File

To run the `index.js` file, open up the command prompt and navigate to the Path where the SDK folder resides. Type the following command to run the file:

```
node index.js
```

![Run file](https://apidocs.io/illustration/nodejs?step=runProject&workspaceFolder=Global%20Miles%20E-commerce%20API-Node)


## How to Test

These tests use Mocha framework for testing, coupled with Chai for assertions. These dependencies need to be installed for tests to run.
Tests can be run in a number of ways:

### Method 1 (Run all tests)

1. Navigate to the root directory of the SDK folder from command prompt.
2. Type `mocha --recursive` to run all the tests.

### Method 2 (Run all tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha *` to run all the tests.

### Method 3 (Run specific controller's tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha  Global Miles E-commerce APIController`  to run all the tests in that controller file.

> To increase mocha's default timeout, you can change the `TEST_TIMEOUT` parameter's value in `TestBootstrap.js`.

![Run Tests](https://apidocs.io/illustration/nodejs?step=runTests&controllerName=Global%20Miles%20E-commerce%20APIController)

## Initialization

### Authentication
In order to setup authentication in the API client, you need the following information.

| Parameter | Description |
|-----------|-------------|
| oAuthClientId | OAuth 2 Client ID |
| oAuthClientSecret | OAuth 2 Client Secret |



API client can be initialized as following:

```JavaScript
const lib = require('lib');

// Configuration parameters and credentials
lib.Configuration.oAuthClientId = "oAuthClientId"; // OAuth 2 Client ID
lib.Configuration.oAuthClientSecret = "oAuthClientSecret"; // OAuth 2 Client Secret

```

You must now authorize the client.

### Authorizing your client


This SDK uses *OAuth 2.0 authorization* to authorize the client.

The `authorize()` method will exchange the OAuth client credentials for an *access token*.
The access token is an object containing information for authorizing client requests.


```JavaScript
const tokenPromise = oAuthManager.authorize();
```
The Node.js SDK supports both callbacks and promises. So, the authorize call returns a promise and also returns response back in the callback (if one is provided)

The client can now make authorized endpoint calls.




### Storing an access token for reuse

It is recommended that you store the access token for reuse.

This code snippet stores the access token in a data store. For this example, [node-localstorage](https://www.npmjs.com/package/node-localstorage) is being used as the data store.
```JavaScript
const lib = require('lib');
const LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./scratch');

localStorage.setItem('token', lib.Configuration.oAuthToken);
```

### Creating a client from a stored token

To authorize a client from a stored access token, just set the access token in `Configuration` along with the other configuration parameters before making endpoint calls:

```JavaScript
// load token later...
const lib = require('lib');
const LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./scratch');

lib.Configuration.oAuthToken = localStorage.getItem('token');
```

### Complete example
In this example, `app.js` will check if the access token has been set in the SDK. If it has been, API calls can be made. Otherwise, client has to be authorized first before making API calls.  
This example makes use of [node-localstorage](https://www.npmjs.com/package/node-localstorage) for handling data persistence.

#### `app.js`

```js
const lib = require('lib');
const oAuthManager = lib.OAuthManager;

lib.Configuration.oAuthClientId = 'oAuthClientId'; // OAuth 2 Client ID
lib.Configuration.oAuthClientSecret = 'oAuthClientSecret'; // OAuth 2 Client Secret

// this method will be called whenever the token updates
// you can update the storage you're using with the updated token
lib.Configuration.oAuthTokenUpdateCallback = (token) => {
    // token is the updated access_token
};

if (oAuthManager.isTokenSet()) {
    // token is already stored in the client
    // make API calls as required
} else {
    const scopes = [];
    const promise = oAuthManager.authorize(scopes);
    promise.then((success) => {
        // client authorized. API calls can be made
    }, (exception) => {
        // error occurred, `exception` will be of type lib/Exceptions/OAuthProviderException
    });
}
```




# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [EarnMilesController](#earn_miles_controller)
* [AuthenticationController](#authentication_controller)
* [ReturnController](#return_controller)
* [PayWithMilesController](#pay_with_miles_controller)

## <a name="earn_miles_controller"></a>![Class: ](https://apidocs.io/img/class.png ".EarnMilesController") EarnMilesController

### Get singleton instance

The singleton instance of the ``` EarnMilesController ``` class can be accessed from the API Client.

```javascript
var controller = lib.EarnMilesController;
```

### <a name="list_orders"></a>![Method: ](https://apidocs.io/img/method.png ".EarnMilesController.listOrders") listOrders

> This endpoint allows to get list of orders. In order to get detailed order history and reconciliation you can use this endpoint.
> 
> You can try this API with configuring client parameters in Console Tab below. Test OAuthClientId is b30359c21700fd6f2b91154adcb7b37bab3e7e0a33e22682e5dd149d7a6ac4df and OAuthClientSecret is 4bc4335faad41d6a23cd059e495005f00496a64e34e6187b1d72695a8debd28c


```javascript
function listOrders(filterStoreCode, filterCompletedAt, filterStatus, sort, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| filterStoreCode |  ``` Required ```  | Filter for an online store. |
| filterCompletedAt |  ``` Required ```  | Filter for completed_at field. It is accepted a valid date range value. The format is YYYY-MM-DD..YYYY-MM-DD. |
| filterStatus |  ``` Optional ```  | Filter for status field. It is accepted a valid status value of order. |
| sort |  ``` Optional ```  | Sort for some selected fields. In order to sort descending "-" value will be used before the field. Valid field values are "completed_at", "created_at",  "updated_at", "status". |



#### Example Usage

```javascript

    var filterStoreCode = filter[store_code];
    var filterCompletedAt = filter[completed_at];
    var filterStatus = filter[status];
    var sort = 'sort';

    controller.listOrders(filterStoreCode, filterCompletedAt, filterStatus, sort, function(error, response, context) {

    
    });
```



### <a name="create_order"></a>![Method: ](https://apidocs.io/img/method.png ".EarnMilesController.createOrder") createOrder

> This endpoint allows to create an order for earn miles. It may also include discounts and payments.
> 
> You can try this API with configuring client parameters in Console Tab below. Test OAuthClientId is b30359c21700fd6f2b91154adcb7b37bab3e7e0a33e22682e5dd149d7a6ac4df and OAuthClientSecret is 4bc4335faad41d6a23cd059e495005f00496a64e34e6187b1d72695a8debd28c


```javascript
function createOrder(body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | The body of the request. |



#### Example Usage

```javascript

    var body = new OrderRequest({"key":"value"});

    controller.createOrder(body, function(error, response, context) {

    
    });
```



### <a name="retrieve_order"></a>![Method: ](https://apidocs.io/img/method.png ".EarnMilesController.retrieveOrder") retrieveOrder

> This endpoint allows to get an order.
> 
> You can try this API with configuring client parameters in Console Tab below. Test OAuthClientId is b30359c21700fd6f2b91154adcb7b37bab3e7e0a33e22682e5dd149d7a6ac4df and OAuthClientSecret is 4bc4335faad41d6a23cd059e495005f00496a64e34e6187b1d72695a8debd28c


```javascript
function retrieveOrder(transactionId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| transactionId |  ``` Required ```  | The ID of the transaction that represents the order. |



#### Example Usage

```javascript

    var transactionId = transaction_id;

    controller.retrieveOrder(transactionId, function(error, response, context) {

    
    });
```



### <a name="create_cart"></a>![Method: ](https://apidocs.io/img/method.png ".EarnMilesController.createCart") createCart

> This endpoint allows to get available amount of money, based on miles of user and their discounts which is based on cart or items.
> 
> You can try this API with configuring client parameters in Console Tab below. Test OAuthClientId is b30359c21700fd6f2b91154adcb7b37bab3e7e0a33e22682e5dd149d7a6ac4df and OAuthClientSecret is 4bc4335faad41d6a23cd059e495005f00496a64e34e6187b1d72695a8debd28c


```javascript
function createCart(body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | The body of the request. |



#### Example Usage

```javascript

    var body = new CartRequest({"key":"value"});

    controller.createCart(body, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="authentication_controller"></a>![Class: ](https://apidocs.io/img/class.png ".AuthenticationController") AuthenticationController

### Get singleton instance

The singleton instance of the ``` AuthenticationController ``` class can be accessed from the API Client.

```javascript
var controller = lib.AuthenticationController;
```

### <a name="create_authentication"></a>![Method: ](https://apidocs.io/img/method.png ".AuthenticationController.createAuthentication") createAuthentication

> *Tags:*  ``` Skips Authentication ``` 

> An access token will allow you to make requests for the system. We support only one type of token: client_credentials.
> 
> You can try this API with configuring client parameters in Console Tab below. Test OAuthClientId is b30359c21700fd6f2b91154adcb7b37bab3e7e0a33e22682e5dd149d7a6ac4df and OAuthClientSecret is 4bc4335faad41d6a23cd059e495005f00496a64e34e6187b1d72695a8debd28c


```javascript
function createAuthentication(accept, contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accept |  ``` Required ```  ``` DefaultValue ```  | It advertises which content type is able to understand. |
| contentType |  ``` Required ```  ``` DefaultValue ```  | It tells the client what the content type of the returned. |
| body |  ``` Required ```  | The body of the request. |



#### Example Usage

```javascript

    var accept = 'application/json';
    var contentType = 'application/json';
    var body = new OAuthRequest({
  "client_id": "{{client_id}}",
  "client_secret": "{{client_secret}}",
  "grant_type": "{{grant_type}}"
});

    controller.createAuthentication(accept, contentType, body, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="return_controller"></a>![Class: ](https://apidocs.io/img/class.png ".ReturnController") ReturnController

### Get singleton instance

The singleton instance of the ``` ReturnController ``` class can be accessed from the API Client.

```javascript
var controller = lib.ReturnController;
```

### <a name="retrieve_return"></a>![Method: ](https://apidocs.io/img/method.png ".ReturnController.retrieveReturn") retrieveReturn

> This endpoint allows to get a return.
> 
> You can try this API with configuring client parameters in Console Tab below. Test OAuthClientId is b30359c21700fd6f2b91154adcb7b37bab3e7e0a33e22682e5dd149d7a6ac4df and OAuthClientSecret is 4bc4335faad41d6a23cd059e495005f00496a64e34e6187b1d72695a8debd28c


```javascript
function retrieveReturn(returnProvisionToken, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| returnProvisionToken |  ``` Required ```  | The token value of a return. |



#### Example Usage

```javascript

    var returnProvisionToken = return_provision_token;

    controller.retrieveReturn(returnProvisionToken, function(error, response, context) {

    
    });
```



### <a name="delete_cancel_return"></a>![Method: ](https://apidocs.io/img/method.png ".ReturnController.deleteCancelReturn") deleteCancelReturn

> This endpoint allows to cancel a return.
> 
> You can try this API with configuring client parameters in Console Tab below. Test OAuthClientId is b30359c21700fd6f2b91154adcb7b37bab3e7e0a33e22682e5dd149d7a6ac4df and OAuthClientSecret is 4bc4335faad41d6a23cd059e495005f00496a64e34e6187b1d72695a8debd28c


```javascript
function deleteCancelReturn(body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | The body of the request. |



#### Example Usage

```javascript

    var body = new CancelReturnRequest({"key":"value"});

    controller.deleteCancelReturn(body, function(error, response, context) {

    
    });
```



### <a name="update_complete_return"></a>![Method: ](https://apidocs.io/img/method.png ".ReturnController.updateCompleteReturn") updateCompleteReturn

> This endpoint allows to complete a return.
> 
> You can try this API with configuring client parameters in Console Tab below. Test OAuthClientId is b30359c21700fd6f2b91154adcb7b37bab3e7e0a33e22682e5dd149d7a6ac4df and OAuthClientSecret is 4bc4335faad41d6a23cd059e495005f00496a64e34e6187b1d72695a8debd28c


```javascript
function updateCompleteReturn(body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | The body of the request. |



#### Example Usage

```javascript

    var body = new CompleteReturnRequest({"key":"value"});

    controller.updateCompleteReturn(body, function(error, response, context) {

    
    });
```



### <a name="create_start_return"></a>![Method: ](https://apidocs.io/img/method.png ".ReturnController.createStartReturn") createStartReturn

> This endpoint allows to start a return for a specific order.
> 
> You can try this API with configuring client parameters in Console Tab below. Test OAuthClientId is b30359c21700fd6f2b91154adcb7b37bab3e7e0a33e22682e5dd149d7a6ac4df and OAuthClientSecret is 4bc4335faad41d6a23cd059e495005f00496a64e34e6187b1d72695a8debd28c


```javascript
function createStartReturn(body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | The body of the request. |



#### Example Usage

```javascript

    var body = new StartReturnRequest({"key":"value"});

    controller.createStartReturn(body, function(error, response, context) {

    
    });
```



### <a name="list_returns"></a>![Method: ](https://apidocs.io/img/method.png ".ReturnController.listReturns") listReturns

> This endpoint allows to get list of returns. In order to get detailed return history and reconciliation you can use this endpoint.
> 
> You can try this API with configuring client parameters in Console Tab below. Test OAuthClientId is b30359c21700fd6f2b91154adcb7b37bab3e7e0a33e22682e5dd149d7a6ac4df and OAuthClientSecret is 4bc4335faad41d6a23cd059e495005f00496a64e34e6187b1d72695a8debd28c


```javascript
function listReturns(filterStoreCode, filterCreatedAt, filterStatus, sort, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| filterStoreCode |  ``` Required ```  | Filter for an online store. |
| filterCreatedAt |  ``` Required ```  | Filter for created_at field. It is accepted a valid date range value. The format is YYYY-MM-DD..YYYY-MM-DD. |
| filterStatus |  ``` Optional ```  | Filter for status field. It is accepted a valid status value of return. |
| sort |  ``` Optional ```  | Sort for some selected fields. In order to sort descending "-" value will be used before the field. Valid field values are "created_at",  "updated_at", "status". |



#### Example Usage

```javascript

    var filterStoreCode = filter[store_code];
    var filterCreatedAt = filter[created_at];
    var filterStatus = filter[status];
    var sort = 'sort';

    controller.listReturns(filterStoreCode, filterCreatedAt, filterStatus, sort, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="pay_with_miles_controller"></a>![Class: ](https://apidocs.io/img/class.png ".PayWithMilesController") PayWithMilesController

### Get singleton instance

The singleton instance of the ``` PayWithMilesController ``` class can be accessed from the API Client.

```javascript
var controller = lib.PayWithMilesController;
```

### <a name="list_mile_payments"></a>![Method: ](https://apidocs.io/img/method.png ".PayWithMilesController.listMilePayments") listMilePayments

> This endpoint allows to get list of payments. In order to get detailed payment history and reconciliation you can use this endpoint.
> 
> You can try this API with configuring client parameters in Console Tab below. Test OAuthClientId is b30359c21700fd6f2b91154adcb7b37bab3e7e0a33e22682e5dd149d7a6ac4df and OAuthClientSecret is 4bc4335faad41d6a23cd059e495005f00496a64e34e6187b1d72695a8debd28c


```javascript
function listMilePayments(filterStoreCode, filterCreatedAt, filterStatus, sort, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| filterStoreCode |  ``` Required ```  | Filter for an online store. |
| filterCreatedAt |  ``` Required ```  | Filter for created_at field. It is accepted a valid date range value. The format is YYYY-MM-DD..YYYY-MM-DD. |
| filterStatus |  ``` Optional ```  | Filter for status field. It is accepted a valid status value of payment. |
| sort |  ``` Optional ```  | Sort for some selected fields. In order to sort descending "-" value will be used before the field. Valid field values are "created_at",  "updated_at", "status". |



#### Example Usage

```javascript

    var filterStoreCode = filter[store_code];
    var filterCreatedAt = filter[created_at];
    var filterStatus = filter[status];
    var sort = 'sort';

    controller.listMilePayments(filterStoreCode, filterCreatedAt, filterStatus, sort, function(error, response, context) {

    
    });
```



### <a name="create_start_mile_payment"></a>![Method: ](https://apidocs.io/img/method.png ".PayWithMilesController.createStartMilePayment") createStartMilePayment

> After successful authentication and retrieving needed token, this endpoint allows to start a payment transaction. To be able to complete whole payment process successfully also check "Complete Mile Payment endpoint" please.
> 
> You can try this API with configuring client parameters in Console Tab below. Test OAuthClientId is b30359c21700fd6f2b91154adcb7b37bab3e7e0a33e22682e5dd149d7a6ac4df and OAuthClientSecret is 4bc4335faad41d6a23cd059e495005f00496a64e34e6187b1d72695a8debd28c


```javascript
function createStartMilePayment(body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | The body of the request. |



#### Example Usage

```javascript

    var body = new StartMilePaymentRequest({"key":"value"});

    controller.createStartMilePayment(body, function(error, response, context) {

    
    });
```



### <a name="update_complete_mile_payment"></a>![Method: ](https://apidocs.io/img/method.png ".PayWithMilesController.updateCompleteMilePayment") updateCompleteMilePayment

> This endpoint allows to complete a payment.
> 
> You can try this API with configuring client parameters in Console Tab below. Test OAuthClientId is b30359c21700fd6f2b91154adcb7b37bab3e7e0a33e22682e5dd149d7a6ac4df and OAuthClientSecret is 4bc4335faad41d6a23cd059e495005f00496a64e34e6187b1d72695a8debd28c


```javascript
function updateCompleteMilePayment(body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | The body of the request. |



#### Example Usage

```javascript

    var body = new CompleteMilePaymentRequest({"key":"value"});

    controller.updateCompleteMilePayment(body, function(error, response, context) {

    
    });
```



### <a name="delete_cancel_mile_payment"></a>![Method: ](https://apidocs.io/img/method.png ".PayWithMilesController.deleteCancelMilePayment") deleteCancelMilePayment

> This endpoint allows to cancel a payment.
> 
> You can try this API with configuring client parameters in Console Tab below. Test OAuthClientId is b30359c21700fd6f2b91154adcb7b37bab3e7e0a33e22682e5dd149d7a6ac4df and OAuthClientSecret is 4bc4335faad41d6a23cd059e495005f00496a64e34e6187b1d72695a8debd28c


```javascript
function deleteCancelMilePayment(body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | The body of the request. |



#### Example Usage

```javascript

    var body = new CancelMilePaymentRequest({"key":"value"});

    controller.deleteCancelMilePayment(body, function(error, response, context) {

    
    });
```



### <a name="create_refund_mile_payment"></a>![Method: ](https://apidocs.io/img/method.png ".PayWithMilesController.createRefundMilePayment") createRefundMilePayment

> This endpoint allows to refund a payment.
> 
> You can try this API with configuring client parameters in Console Tab below. Test OAuthClientId is b30359c21700fd6f2b91154adcb7b37bab3e7e0a33e22682e5dd149d7a6ac4df and OAuthClientSecret is 4bc4335faad41d6a23cd059e495005f00496a64e34e6187b1d72695a8debd28c


```javascript
function createRefundMilePayment(body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | The body of the request. |



#### Example Usage

```javascript

    var body = new RefundMilePaymentRequest({"key":"value"});

    controller.createRefundMilePayment(body, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)



