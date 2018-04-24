/**
 * GlobalMilesEcommerceAPILib
 *
 * This file was automatically generated for Global Miles by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const CompleteReturnRequest = require('../lib/Models/CompleteReturnRequest');
const StartReturnResponse = require('../lib/Models/StartReturnResponse');
const StartReturnRequest = require('../lib/Models/StartReturnRequest');
const StartReturnResult = require('../lib/Models/StartReturnResult');
const CartResponse = require('../lib/Models/CartResponse');
const ListMilePaymentResponse = require('../lib/Models/ListMilePaymentResponse');
const OrderResult = require('../lib/Models/OrderResult');
const OrderResponse = require('../lib/Models/OrderResponse');
const OrderItem = require('../lib/Models/OrderItem');
const PaymentItem = require('../lib/Models/PaymentItem');
const OAuthResponse = require('../lib/Models/OAuthResponse');
const OAuthRequest = require('../lib/Models/OAuthRequest');
const Order = require('../lib/Models/Order');
const CartResult = require('../lib/Models/CartResult');
const CartItem = require('../lib/Models/CartItem');
const Cart = require('../lib/Models/Cart');
const CartItemDiscount = require('../lib/Models/CartItemDiscount');
const DiscountItem = require('../lib/Models/DiscountItem');
const OrderRequest = require('../lib/Models/OrderRequest');
const CartRequest = require('../lib/Models/CartRequest');
const Response = require('../lib/Models/Response');
const Amount = require('../lib/Models/Amount');
const StartMilePaymentRequest = require('../lib/Models/StartMilePaymentRequest');
const StartMilePaymentResponse = require('../lib/Models/StartMilePaymentResponse');
const StartMilePaymentResult = require('../lib/Models/StartMilePaymentResult');
const CompleteMilePaymentRequest = require('../lib/Models/CompleteMilePaymentRequest');
const CancelMilePaymentRequest = require('../lib/Models/CancelMilePaymentRequest');
const RefundMilePaymentRequest = require('../lib/Models/RefundMilePaymentRequest');
const Payment = require('../lib/Models/Payment');
const CancelReturnRequest = require('../lib/Models/CancelReturnRequest');
const CartDiscount = require('../lib/Models/CartDiscount');
const OAuthToken = require('../lib/Models/OAuthToken');
const OAuthProviderException = require('../lib/Exceptions/OAuthProviderException');

const classMap = {
    CompleteReturnRequest,
    StartReturnResponse,
    StartReturnRequest,
    StartReturnResult,
    CartResponse,
    ListMilePaymentResponse,
    OrderResult,
    OrderResponse,
    OrderItem,
    PaymentItem,
    OAuthResponse,
    OAuthRequest,
    Order,
    CartResult,
    CartItem,
    Cart,
    CartItemDiscount,
    DiscountItem,
    OrderRequest,
    CartRequest,
    Response,
    Amount,
    StartMilePaymentRequest,
    StartMilePaymentResponse,
    StartMilePaymentResult,
    CompleteMilePaymentRequest,
    CancelMilePaymentRequest,
    RefundMilePaymentRequest,
    Payment,
    CancelReturnRequest,
    CartDiscount,
    OAuthToken,
    OAuthProviderException,
};

/**
 * Factory class to create instances of models and exception classes
 */
class ModelFactory {
    /**
     * Creates instance of a model class
     * @param  modelName  {string}  Name of class to instantiate
     * @returns  {object} Instance of the model class
     */
    static getInstance(modelName) {
        return new classMap[modelName]();
    }
}

module.exports = ModelFactory;
