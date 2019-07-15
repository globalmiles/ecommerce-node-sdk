/**
 * GlobalMilesECommerceAPILib
 *
 * This file was automatically generated for Global Miles by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const _request = require('../Http/Client/RequestClient');
const _configuration = require('../configuration');
const _apiHelper = require('../APIHelper');
const _baseController = require('./BaseController');

class OAuthAuthorizationController {
    /**
     * Create a new OAuth 2 token.
     *
     * @param {string} authorization Authorization header in Basic auth format
     * @param {string} scope (optional) Requested scopes as a space-delimited list.
     * @param {Dictionary} fieldParameters Additional optional form parameters are supported by this
     * endpoint
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createRequestToken(authorization, scope, fieldParameters, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        const _pathUrl = '/oauth/token';
        const _queryBuilder = `${_baseUri}${_pathUrl}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            Authorization: authorization,
            'user-agent': 'APIMATIC 2.0',
        };

        // prepare form data
        const _form = {
            grant_type: 'client_credentials',
            scope,
        };

        // prepare optional form fields
        _apiHelper.merge(_form, fieldParameters);

        // remove null values
        _apiHelper.cleanObject(_form);

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            form: _form,
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                let response = '';
                if (_context.response.body) {
                    response = JSON.parse(_context.response.body);
                }
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error,
                        errorResponse.response,
                        errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    let parsed = JSON.parse(_response.body);
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'OAuthToken');
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else if (_response.statusCode === 400) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'OAuthProviderException');
                    mappedObject.reason = 'OAuth 2 provider returned an error.';
                    mappedObject.context = _context;
                    const _err = { errorMessage: 'OAuth 2 provider returned an error.',
                        errorCode: 400,
                        errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 401) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'OAuthProviderException');
                    mappedObject.reason = 'OAuth 2 provider says client authentication failed.';
                    mappedObject.context = _context;
                    const _err = { errorMessage: 'OAuth 2 provider says client authentication failed.',
                        errorCode: 401,
                        errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error,
                    errorResponse.response,
                    errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
}
module.exports = OAuthAuthorizationController;
