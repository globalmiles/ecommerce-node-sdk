/**
 * GlobalMilesECommerceAPILib
 *
 * This file was automatically generated for Global Miles by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const _oAuthController = require('./Controllers/OAuthAuthorizationController');
const _baseController = require('./Controllers/BaseController');
const _oAuthProviderError = require('./Models/OAuthProviderErrorEnum');
const _configuration = require('./configuration');

class OAuthManager {

    /*
     * Function to request token from the server
     *
     * @param   scope  {array}  An array of all scopes needed (optional)
     * @param   params {array}  Additional form params needed (optional)
     * @param   cb   {function}  Callback function
     *
     * @return    {Promise}  Promise which is resolved or rejected after
     *                       attempting to request and set access token
     */
    static authorize(scope, params, cb) {
        const authHeader = this.buildBasicAuthHeader(_configuration.oAuthClientId,
            _configuration.oAuthClientSecret);
        const scopeStr = this.convertScopeArrayToList(scope);
        const promise = _oAuthController.createRequestToken(authHeader, scopeStr, params, cb);
        return this.setOAuthToken(promise);
    }

    /*
     * Helper function to build a basic authentication header
     *
     * @param   clientId  {string}  Client Id of the application
     * @param   clientSecret  {string}  Client Secret of the application
     *
     * @return    {string}  The Basic Authentication Header
     */
    static buildBasicAuthHeader(clientId, clientSecret) {
        const clientCreds = `${clientId}${':'}${clientSecret}`;
        // base64 encoding and constructing the auth header
        const authHeader = `Basic ${Buffer.from(clientCreds).toString('base64')}`;
        return authHeader;
    }

    /*
     * Helper function to convert array of scopes into a space-delimited string
     *
     * @param   scope  {array}  An array of all scopes needed (optional)
     *
     * @return    {string}  Space delimited string/list of scopes
     *                      Returns the scope as is if a string is passed in
     */
    static convertScopeArrayToList(scope) {
        if (typeof (scope) === 'string') {
            return scope;
        }
        let scopeList = '';
        if (scope) {
            if (scope.length > 1) {
                scopeList = scope.join(' ');
            } else {
                scopeList = scope[0];
            }
        }
        return scopeList;
    }

    /*
     * Helper function to store the access token in the OAuthToken object in configuration file
     *
     * @param   promise  {Promise}  Promise which will receive the access token
     *
     * @return    {Promise}  The resolved or rejected Promise
     */
    static setOAuthToken(promise) {
        return promise.then((token) => {
            _configuration.oAuthToken = token;
            _configuration.oAuthToken.expiry = Date.now() + token.expiresIn;
            if (typeof (_configuration.oAuthTokenUpdateCallback) === 'function') {
                _configuration.oAuthTokenUpdateCallback(_configuration.oAuthToken);
            }
        });
    }

    /*
     * Helper function to check get Exception for invalid client
     *
     * @return    {object}  The Exception Object
     */
    static getInvalidClientError() {
        const errorModel = {
            error: _oAuthProviderError.INVALID_CLIENT,
            error_description: 'The client has not been authorized',
            error_uri: '',
        };
        const err = _baseController
                        .getObjectMapper()
                        .mapObject(errorModel, 'OAuthProviderException');
        return err;
    }

    /*
     * Helper function to check if the access token has been stored in
     * the OAuthToken object in configuration file
     *
     * @return    {bool}  Boolean value indicating whether the token has been set
     */
    static isTokenSet() {
        return (_configuration.oAuthToken !== null &&
            _configuration.oAuthToken !== undefined &&
            Object.keys(_configuration.oAuthToken).length > 0);
    }

    /*
     * Helper function to check if the access token has expired
     *
     * @return    {bool}  Boolean value indicating whether the token has expired
     */
    static hasTokenExpired() {
        const token = _configuration.oAuthToken;

        let tokenExpired = false;
        if (Object.prototype.hasOwnProperty.call(token, 'expiresIn')) {
            tokenExpired = Date.now() > token.expiry;
        }
        return tokenExpired;
    }

    /*
     * Helper function to check if the access token has expired and automatically set
     * the access token again  if it has expired
     *
     * @return    {Promise}  Resolved promise (if token has not expired)
     *                       Resolved or rejected promise after setting the token (if expired)
     */
    static checkTokenExpiry() {
        // token was set, check if it has expired
        const tokenExpired = this.hasTokenExpired();

        // refresh token if expired
        let promise = Promise.resolve();
        if (tokenExpired) {
            promise = this.authorize();
        }

        return promise;
    }
}

module.exports = OAuthManager;
