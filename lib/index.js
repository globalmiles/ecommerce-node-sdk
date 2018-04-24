/**
  * @module GlobalMilesEcommerceAPILib
  *
  * API for Ecommerce Partners. This document includes Cart, Discount, Payment, Order and Return
  * related endpoints provided by Global Miles.
  */

'use strict';

const Configuration = require('./configuration');
const OAuthManager = require('./OAuthManager');
const Environments = require('./Environments');
const PayWithMilesController = require('./Controllers/PayWithMilesController');
const EarnMilesController = require('./Controllers/EarnMilesController');
const AuthenticationController = require('./Controllers/AuthenticationController');
const ReturnController = require('./Controllers/ReturnController');
const OAuthAuthorizationController = require('./Controllers/OAuthAuthorizationController');
const CompleteReturnRequest = require('./Models/CompleteReturnRequest');
const StartReturnResponse = require('./Models/StartReturnResponse');
const StartReturnRequest = require('./Models/StartReturnRequest');
const DiscountTypeEnum = require('./Models/DiscountTypeEnum');
const StartReturnResult = require('./Models/StartReturnResult');
const CartResponse = require('./Models/CartResponse');
const ListMilePaymentResponse = require('./Models/ListMilePaymentResponse');
const OrderResult = require('./Models/OrderResult');
const OrderResponse = require('./Models/OrderResponse');
const OrderItem = require('./Models/OrderItem');
const PaymentItem = require('./Models/PaymentItem');
const OAuthResponse = require('./Models/OAuthResponse');
const OAuthRequest = require('./Models/OAuthRequest');
const Order = require('./Models/Order');
const PaymentTypeEnum = require('./Models/PaymentTypeEnum');
const CartResult = require('./Models/CartResult');
const CartItem = require('./Models/CartItem');
const Cart = require('./Models/Cart');
const CartItemDiscount = require('./Models/CartItemDiscount');
const DiscountItem = require('./Models/DiscountItem');
const OrderRequest = require('./Models/OrderRequest');
const CartRequest = require('./Models/CartRequest');
const Response = require('./Models/Response');
const Amount = require('./Models/Amount');
const StartMilePaymentRequest = require('./Models/StartMilePaymentRequest');
const StartMilePaymentResponse = require('./Models/StartMilePaymentResponse');
const StartMilePaymentResult = require('./Models/StartMilePaymentResult');
const CompleteMilePaymentRequest = require('./Models/CompleteMilePaymentRequest');
const CancelMilePaymentRequest = require('./Models/CancelMilePaymentRequest');
const RefundMilePaymentRequest = require('./Models/RefundMilePaymentRequest');
const PaymentStatusEnum = require('./Models/PaymentStatusEnum');
const Payment = require('./Models/Payment');
const CancelReturnRequest = require('./Models/CancelReturnRequest');
const CartDiscount = require('./Models/CartDiscount');
const OAuthToken = require('./Models/OAuthToken');
const OAuthProviderErrorEnum = require('./Models/OAuthProviderErrorEnum');
const OAuthProviderException = require('./Exceptions/OAuthProviderException');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of GlobalMilesEcommerceAPILib
    Configuration,
    Environments,
    OAuthManager,
    // controllers of GlobalMilesEcommerceAPILib
    PayWithMilesController,
    EarnMilesController,
    AuthenticationController,
    ReturnController,
    OAuthAuthorizationController,
    // models of GlobalMilesEcommerceAPILib
    CompleteReturnRequest,
    StartReturnResponse,
    StartReturnRequest,
    DiscountTypeEnum,
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
    PaymentTypeEnum,
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
    PaymentStatusEnum,
    Payment,
    CancelReturnRequest,
    CartDiscount,
    OAuthToken,
    OAuthProviderErrorEnum,
    // exceptions of GlobalMilesEcommerceAPILib
    OAuthProviderException,
    APIException,
};

module.exports = initializer;
