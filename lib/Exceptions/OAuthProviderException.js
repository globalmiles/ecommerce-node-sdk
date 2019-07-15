/**
 * GlobalMilesECommerceAPILib
 *
 * This file was automatically generated for Global Miles by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const APIException = require('./APIException');
/**
 * Creates an instance of OAuthProviderException
 */
class OAuthProviderException extends APIException {
    /**
     * @constructor
     */
    constructor() {
        super();
        /**
         * Error code
         */
        this.error = null;

        /**
         * Human-readable text providing additional information on error.
         * Used to assist the client developer in understanding the error that occurred.
         */
        this.errorDescription = null;

        /**
         * A URI identifying a human-readable web page with information about the error, used to
         * provide the client developer with additional information about the error
         */
        this.errorUri = null;
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'error', realName: 'error' },
            { name: 'errorDescription', realName: 'error_description' },
            { name: 'errorUri', realName: 'error_uri' },
        ]);
    }
}

module.exports = OAuthProviderException;
