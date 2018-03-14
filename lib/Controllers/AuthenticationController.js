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

class AuthenticationController {
    /**
     * An access token will allow you to make requests for the system. We support only one type
     * of token: client_credentials
     *
     * @param {string} accept It advertises which content type is able to understand.
     * @param {string} contentType It tells the client what the content type of the returned.
     * @param {OAuthRequest} body The body of the request.
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createAuthentication(accept, contentType, body, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        const _queryBuilder = `${_baseUri}${'/oauth/token'}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'content-type': 'application/json; charset=utf-8',
            Accept: accept,
            'Content-Type': contentType,
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
                        parsed = _baseController.getObjectMapper().mapObject(parsed, 'OAuthResponse');
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

module.exports = AuthenticationController;
