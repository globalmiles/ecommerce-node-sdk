/**
  * @module GlobalMilesECommerceAPILib
  *
  * API for E-commerce Partners. This document includes Cart, Discount, Payment, Order and Return
  * related endpoints provided by Global Miles.
  */

'use strict';

const Configuration = require('./configuration');
const OAuthManager = require('./OAuthManager');
const Environments = require('./Environments');
const EarnMilesController = require('./Controllers/EarnMilesController');
const AuthenticationController = require('./Controllers/AuthenticationController');
const ReturnController = require('./Controllers/ReturnController');
const PayWithMilesController = require('./Controllers/PayWithMilesController');
const OAuthAuthorizationController = require('./Controllers/OAuthAuthorizationController');
const OrderStatusEnum = require('./Models/OrderStatusEnum');
const StartMilePaymentResult = require('./Models/StartMilePaymentResult');
const ReturnStatusEnum = require('./Models/ReturnStatusEnum');
const RetrieveReturnResponse = require('./Models/RetrieveReturnResponse');
const StartMilePaymentResponse = require('./Models/StartMilePaymentResponse');
const RetrieveOrderResponse = require('./Models/RetrieveOrderResponse');
const ListReturnResponse = require('./Models/ListReturnResponse');
const OrderResponse = require('./Models/OrderResponse');
const OrderResult = require('./Models/OrderResult');
const CancelReturnRequest = require('./Models/CancelReturnRequest');
const PaymentStatusEnum = require('./Models/PaymentStatusEnum');
const RefundMilePaymentRequest = require('./Models/RefundMilePaymentRequest');
const CancelMilePaymentRequest = require('./Models/CancelMilePaymentRequest');
const Return = require('./Models/Return');
const CompleteMilePaymentRequest = require('./Models/CompleteMilePaymentRequest');
const StartMilePaymentRequest = require('./Models/StartMilePaymentRequest');
const ListOrderResponse = require('./Models/ListOrderResponse');
const Amount = require('./Models/Amount');
const Response = require('./Models/Response');
const CartDiscount = require('./Models/CartDiscount');
const Payment = require('./Models/Payment');
const DiscountItem = require('./Models/DiscountItem');
const CartItemDiscount = require('./Models/CartItemDiscount');
const CartItem = require('./Models/CartItem');
const StartReturnResult = require('./Models/StartReturnResult');
const StartReturnResponse = require('./Models/StartReturnResponse');
const CartResult = require('./Models/CartResult');
const OAuthRequest = require('./Models/OAuthRequest');
const OAuthResponse = require('./Models/OAuthResponse');
const PaymentItem = require('./Models/PaymentItem');
const CartRequest = require('./Models/CartRequest');
const OrderItem = require('./Models/OrderItem');
const OrderRequest = require('./Models/OrderRequest');
const BasicOrderResult = require('./Models/BasicOrderResult');
const Cart = require('./Models/Cart');
const Order = require('./Models/Order');
const CartResponse = require('./Models/CartResponse');
const DiscountTypeEnum = require('./Models/DiscountTypeEnum');
const StartReturnRequest = require('./Models/StartReturnRequest');
const CompleteReturnRequest = require('./Models/CompleteReturnRequest');
const PaymentTypeEnum = require('./Models/PaymentTypeEnum');
const ListMilePaymentResponse = require('./Models/ListMilePaymentResponse');
const OAuthToken = require('./Models/OAuthToken');
const OAuthProviderErrorEnum = require('./Models/OAuthProviderErrorEnum');
const OAuthProviderException = require('./Exceptions/OAuthProviderException');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of GlobalMilesECommerceAPILib
    Configuration,
    Environments,
    OAuthManager,
    // controllers of GlobalMilesECommerceAPILib
    EarnMilesController,
    AuthenticationController,
    ReturnController,
    PayWithMilesController,
    OAuthAuthorizationController,
    // models of GlobalMilesECommerceAPILib
    OrderStatusEnum,
    StartMilePaymentResult,
    ReturnStatusEnum,
    RetrieveReturnResponse,
    StartMilePaymentResponse,
    RetrieveOrderResponse,
    ListReturnResponse,
    OrderResponse,
    OrderResult,
    CancelReturnRequest,
    PaymentStatusEnum,
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
    DiscountTypeEnum,
    StartReturnRequest,
    CompleteReturnRequest,
    PaymentTypeEnum,
    ListMilePaymentResponse,
    OAuthToken,
    OAuthProviderErrorEnum,
    // exceptions of GlobalMilesECommerceAPILib
    OAuthProviderException,
    APIException,
};

module.exports = initializer;
