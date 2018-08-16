/**
 * GlobalMilesECommerceAPILib
 *
 * This file was automatically generated for Global Miles by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const StartMilePaymentResult = require('../lib/Models/StartMilePaymentResult');
const RetrieveReturnResponse = require('../lib/Models/RetrieveReturnResponse');
const StartMilePaymentResponse = require('../lib/Models/StartMilePaymentResponse');
const RetrieveOrderResponse = require('../lib/Models/RetrieveOrderResponse');
const ListReturnResponse = require('../lib/Models/ListReturnResponse');
const OrderResponse = require('../lib/Models/OrderResponse');
const OrderResult = require('../lib/Models/OrderResult');
const CancelReturnRequest = require('../lib/Models/CancelReturnRequest');
const RefundMilePaymentRequest = require('../lib/Models/RefundMilePaymentRequest');
const CancelMilePaymentRequest = require('../lib/Models/CancelMilePaymentRequest');
const Return = require('../lib/Models/Return');
const CompleteMilePaymentRequest = require('../lib/Models/CompleteMilePaymentRequest');
const StartMilePaymentRequest = require('../lib/Models/StartMilePaymentRequest');
const ListOrderResponse = require('../lib/Models/ListOrderResponse');
const Amount = require('../lib/Models/Amount');
const Response = require('../lib/Models/Response');
const CartDiscount = require('../lib/Models/CartDiscount');
const Payment = require('../lib/Models/Payment');
const DiscountItem = require('../lib/Models/DiscountItem');
const CartItemDiscount = require('../lib/Models/CartItemDiscount');
const CartItem = require('../lib/Models/CartItem');
const StartReturnResult = require('../lib/Models/StartReturnResult');
const StartReturnResponse = require('../lib/Models/StartReturnResponse');
const CartResult = require('../lib/Models/CartResult');
const OAuthRequest = require('../lib/Models/OAuthRequest');
const OAuthResponse = require('../lib/Models/OAuthResponse');
const PaymentItem = require('../lib/Models/PaymentItem');
const CartRequest = require('../lib/Models/CartRequest');
const OrderItem = require('../lib/Models/OrderItem');
const OrderRequest = require('../lib/Models/OrderRequest');
const BasicOrderResult = require('../lib/Models/BasicOrderResult');
const Cart = require('../lib/Models/Cart');
const Order = require('../lib/Models/Order');
const CartResponse = require('../lib/Models/CartResponse');
const StartReturnRequest = require('../lib/Models/StartReturnRequest');
const CompleteReturnRequest = require('../lib/Models/CompleteReturnRequest');
const ListMilePaymentResponse = require('../lib/Models/ListMilePaymentResponse');
const OAuthToken = require('../lib/Models/OAuthToken');
const OAuthProviderException = require('../lib/Exceptions/OAuthProviderException');

const classMap = {
    StartMilePaymentResult,
    RetrieveReturnResponse,
    StartMilePaymentResponse,
    RetrieveOrderResponse,
    ListReturnResponse,
    OrderResponse,
    OrderResult,
    CancelReturnRequest,
    RefundMilePaymentRequest,
    CancelMilePaymentRequest,
    Return,
    CompleteMilePaymentRequest,
    StartMilePaymentRequest,
    ListOrderResponse,
    Amount,
    Response,
    CartDiscount,
    Payment,
    DiscountItem,
    CartItemDiscount,
    CartItem,
    StartReturnResult,
    StartReturnResponse,
    CartResult,
    OAuthRequest,
    OAuthResponse,
    PaymentItem,
    CartRequest,
    OrderItem,
    OrderRequest,
    BasicOrderResult,
    Cart,
    Order,
    CartResponse,
    StartReturnRequest,
    CompleteReturnRequest,
    ListMilePaymentResponse,
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
