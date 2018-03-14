/**
 * GlobalMilesECommerceAPILib
 *
 * This file was automatically generated for Global Miles by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const _request = require('../Http/Client/RequestClient');
const _configuration = require('../configuration');
const _apiHelper = require('../APIHelper');
const _baseController = require('./BaseController');
const _oAuthManager = require('../OAuthManager');

class PayWithMilesPointsController {
    /**
     * This endpoint allows to get list of payments. In order to get detailed payment history and
     * reconciliation you can use this API.
     *
     * @param {string} accept It advertises which content type is able to understand.
     * @param {string} contentType It tells the client what the content type of the returned.
     * @param {string} authorization It includes OAuth2 token.
     * @param {string} storeCode An identifier for online store.
     * @param {string} filterByCreatedAt Filter for created_at field. It is accepted a valid date
     * range value. The format is YYYY-MM-DD...YYYY-MM-DD.
     * @param {string} filterByStatus (optional) Filter for status field. It is accepted a valid
     * status value of payment.
     * @param {string} sortBy (optional) Sort for some selected fields. In order to sort descending
     * "-" value will be used before the field. Valid field values are
     * "created_at",  "updated_at", "status".
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static listPointPayments(accept,
        contentType,
        authorization,
        storeCode,
        filterByCreatedAt,
        filterByStatus,
        sortBy,
        callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/v2/ecommerce/payments'}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            storeCode,
            filterByCreatedAt,
            filterByStatus,
            sortBy,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            Accept: accept,
            'Content-Type': contentType,
            Authorization: authorization,
        };

        const tokenSet = _oAuthManager.isTokenSet();
        if (!tokenSet) {
            const err = _oAuthManager.getInvalidClientError();
            _callback(err, null, null);
            return Promise.reject(err);
        }

        const oauthTokenPromise = _oAuthManager.checkTokenExpiry();
        oauthTokenPromise.then(() => {
            _headers.Authorization = `Bearer ${_configuration.oAuthToken.accessToken}`;
        });

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };

        // build the response processing.
        return oauthTokenPromise
        .then(() =>
            new Promise((_fulfill, _reject) => {
                _request(_options, (_error, _response, _context) => {
                    let errorResponse;
                    if (_error) {
                        errorResponse = _baseController.validateResponse(_context);
                        _callback(errorResponse.error,
                            errorResponse.response,
                            errorResponse.context);
                        _reject(errorResponse.error);
                    } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                        let parsed = JSON.parse(_response.body);
                        parsed = _baseController.getObjectMapper().mapObject(parsed, 'ListPointPaymentResponse');
                        _callback(null, parsed, _context);
                        _fulfill(parsed);
                    } else {
                        errorResponse = _baseController.validateResponse(_context);
                        _callback(errorResponse.error,
                        errorResponse.response,
                        errorResponse.context);
                        _reject(errorResponse.error);
                    }
                });
            }))
        .catch((err) => {
            _callback(err, null, null);
        });
    }

    /**
     * This endpoint allows to refund a payment.
     *
     * @param {string} accept It advertises which content type is able to understand.
     * @param {string} contentType It tells the client what the content type of the returned.
     * @param {string} authorization It includes OAuth2 token.
     * @param {RefundPointPaymentRequest} body The body of the request.
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createRefundPointPayment(accept, contentType, authorization, body, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        const _queryBuilder = `${_baseUri}${'/v2/ecommerce/payments/actions/refund'}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'content-type': 'application/json; charset=utf-8',
            Accept: accept,
            'Content-Type': contentType,
            Authorization: authorization,
        };

        const tokenSet = _oAuthManager.isTokenSet();
        if (!tokenSet) {
            const err = _oAuthManager.getInvalidClientError();
            _callback(err, null, null);
            return Promise.reject(err);
        }

        const oauthTokenPromise = _oAuthManager.checkTokenExpiry();
        oauthTokenPromise.then(() => {
            _headers.Authorization = `Bearer ${_configuration.oAuthToken.accessToken}`;
        });

        // remove null values
        _apiHelper.cleanObject(body);

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            body: _apiHelper.jsonSerialize(body),
        };

        // build the response processing.
        return oauthTokenPromise
        .then(() =>
            new Promise((_fulfill, _reject) => {
                _request(_options, (_error, _response, _context) => {
                    let errorResponse;
                    if (_error) {
                        errorResponse = _baseController.validateResponse(_context);
                        _callback(errorResponse.error,
                            errorResponse.response,
                            errorResponse.context);
                        _reject(errorResponse.error);
                    } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                        let parsed = JSON.parse(_response.body);
                        parsed = _baseController.getObjectMapper().mapObject(parsed, 'Response');
                        _callback(null, parsed, _context);
                        _fulfill(parsed);
                    } else {
                        errorResponse = _baseController.validateResponse(_context);
                        _callback(errorResponse.error,
                        errorResponse.response,
                        errorResponse.context);
                        _reject(errorResponse.error);
                    }
                });
            }))
        .catch((err) => {
            _callback(err, null, null);
        });
    }

    /**
     * This endpoint allows to cancel a payment.
     *
     * @param {string} accept It advertises which content type is able to understand.
     * @param {string} contentType It tells the client what the content type of the returned.
     * @param {string} authorization It includes OAuth2 token.
     * @param {CancelPointPaymentRequest} body The body of the request.
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static deleteCancelPointPayment(accept, contentType, authorization, body, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        const _queryBuilder = `${_baseUri}${'/v2/ecommerce/payments'}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'content-type': 'application/json; charset=utf-8',
            Accept: accept,
            'Content-Type': contentType,
            Authorization: authorization,
        };

        const tokenSet = _oAuthManager.isTokenSet();
        if (!tokenSet) {
            const err = _oAuthManager.getInvalidClientError();
            _callback(err, null, null);
            return Promise.reject(err);
        }

        const oauthTokenPromise = _oAuthManager.checkTokenExpiry();
        oauthTokenPromise.then(() => {
            _headers.Authorization = `Bearer ${_configuration.oAuthToken.accessToken}`;
        });

        // remove null values
        _apiHelper.cleanObject(body);

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'DELETE',
            headers: _headers,
            body: _apiHelper.jsonSerialize(body),
        };

        // build the response processing.
        return oauthTokenPromise
        .then(() =>
            new Promise((_fulfill, _reject) => {
                _request(_options, (_error, _response, _context) => {
                    let errorResponse;
                    if (_error) {
                        errorResponse = _baseController.validateResponse(_context);
                        _callback(errorResponse.error,
                            errorResponse.response,
                            errorResponse.context);
                        _reject(errorResponse.error);
                    } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                        let parsed = JSON.parse(_response.body);
                        parsed = _baseController.getObjectMapper().mapObject(parsed, 'Response');
                        _callback(null, parsed, _context);
                        _fulfill(parsed);
                    } else {
                        errorResponse = _baseController.validateResponse(_context);
                        _callback(errorResponse.error,
                        errorResponse.response,
                        errorResponse.context);
                        _reject(errorResponse.error);
                    }
                });
            }))
        .catch((err) => {
            _callback(err, null, null);
        });
    }

    /**
     * This endpoint allows to complete a payment.
     *
     * @param {string} accept It advertises which content type is able to understand.
     * @param {string} contentType It tells the client what the content type of the returned.
     * @param {string} authorization It includes OAuth2 token.
     * @param {CompletePointPaymentRequest} body The body of the request.
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static updateCompletePointPayment(accept, contentType, authorization, body, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        const _queryBuilder = `${_baseUri}${'/v2/ecommerce/payments'}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'content-type': 'application/json; charset=utf-8',
            Accept: accept,
            'Content-Type': contentType,
            Authorization: authorization,
        };

        const tokenSet = _oAuthManager.isTokenSet();
        if (!tokenSet) {
            const err = _oAuthManager.getInvalidClientError();
            _callback(err, null, null);
            return Promise.reject(err);
        }

        const oauthTokenPromise = _oAuthManager.checkTokenExpiry();
        oauthTokenPromise.then(() => {
            _headers.Authorization = `Bearer ${_configuration.oAuthToken.accessToken}`;
        });

        // remove null values
        _apiHelper.cleanObject(body);

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'PUT',
            headers: _headers,
            body: _apiHelper.jsonSerialize(body),
        };

        // build the response processing.
        return oauthTokenPromise
        .then(() =>
            new Promise((_fulfill, _reject) => {
                _request(_options, (_error, _response, _context) => {
                    let errorResponse;
                    if (_error) {
                        errorResponse = _baseController.validateResponse(_context);
                        _callback(errorResponse.error,
                            errorResponse.response,
                            errorResponse.context);
                        _reject(errorResponse.error);
                    } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                        let parsed = JSON.parse(_response.body);
                        parsed = _baseController.getObjectMapper().mapObject(parsed, 'Response');
                        _callback(null, parsed, _context);
                        _fulfill(parsed);
                    } else {
                        errorResponse = _baseController.validateResponse(_context);
                        _callback(errorResponse.error,
                        errorResponse.response,
                        errorResponse.context);
                        _reject(errorResponse.error);
                    }
                });
            }))
        .catch((err) => {
            _callback(err, null, null);
        });
    }

    /**
     * After successful authentication and retrieving needed token,this endpoint allows to start
     * a payment transaction. To be able to complete whole sale process successfully  also check
     * "Complete Point Payment endpoint" please.
     *
     * @param {string} accept It advertises which content type is able to understand.
     * @param {string} contentType It tells the client what the content type of the returned.
     * @param {string} authorization It includes OAuth2 token.
     * @param {StartPointPaymentRequest} body The body of the request.
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createStartPointPayment(accept, contentType, authorization, body, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        const _queryBuilder = `${_baseUri}${'/v2/ecommerce/payments'}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'content-type': 'application/json; charset=utf-8',
            Accept: accept,
            'Content-Type': contentType,
            Authorization: authorization,
        };

        const tokenSet = _oAuthManager.isTokenSet();
        if (!tokenSet) {
            const err = _oAuthManager.getInvalidClientError();
            _callback(err, null, null);
            return Promise.reject(err);
        }

        const oauthTokenPromise = _oAuthManager.checkTokenExpiry();
        oauthTokenPromise.then(() => {
            _headers.Authorization = `Bearer ${_configuration.oAuthToken.accessToken}`;
        });

        // remove null values
        _apiHelper.cleanObject(body);

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            body: _apiHelper.jsonSerialize(body),
        };

        // build the response processing.
        return oauthTokenPromise
        .then(() =>
            new Promise((_fulfill, _reject) => {
                _request(_options, (_error, _response, _context) => {
                    let errorResponse;
                    if (_error) {
                        errorResponse = _baseController.validateResponse(_context);
                        _callback(errorResponse.error,
                            errorResponse.response,
                            errorResponse.context);
                        _reject(errorResponse.error);
                    } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                        let parsed = JSON.parse(_response.body);
                        parsed = _baseController.getObjectMapper().mapObject(parsed, 'StartPointPaymentResponse');
                        _callback(null, parsed, _context);
                        _fulfill(parsed);
                    } else {
                        errorResponse = _baseController.validateResponse(_context);
                        _callback(errorResponse.error,
                        errorResponse.response,
                        errorResponse.context);
                        _reject(errorResponse.error);
                    }
                });
            }))
        .catch((err) => {
            _callback(err, null, null);
        });
    }

}

module.exports = PayWithMilesPointsController;
