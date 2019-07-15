/**
 * GlobalMilesECommerceAPILib
 *
 * This file was automatically generated for Global Miles by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const servers = require('./Servers');
const environments = require('./Environments');
const apiHelper = require('./APIHelper');

const environmentsMap = [];

environmentsMap[environments.CLOUD] = [];

environmentsMap[environments.CLOUD][servers.MDEFAULT] = 'https://api.sandbox.globalmiles.com';

const Configuration = {
    // The object containing the OAuthToken
    oAuthToken: {},


    // Callback function to be called on token refresh
    // TODO: Replace the oAuthTokenUpdateCallback with an appropriate callback function
    oAuthTokenUpdateCallback: null,


    // OAuth 2 Client ID
    // TODO: Replace the OAuthClientId with an appropriate value
    oAuthClientId: 'TODO: Replace',

    // OAuth 2 Client Secret
    // TODO: Replace the OAuthClientSecret with an appropriate value
    oAuthClientSecret: 'TODO: Replace',

    /**
     * Current API environment
     * @type {string}
     */
    currentEnvironment: environments.CLOUD,

    /**
     * Get base URI for a server in the current API environment
     * @param  {string|null} server Server name
     * @return {string}             Base URI for server
     */
    getBaseUri(server) {
        const url = environmentsMap[this.currentEnvironment][server || servers.MDEFAULT];
        const urlParams = {
        };
        return apiHelper.appendUrlWithTemplateParameters(url, urlParams);
    },
};

module.exports = Configuration;
