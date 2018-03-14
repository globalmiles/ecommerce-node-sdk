/**
 * GlobalMilesECommerceAPILib
 *
 * This file was automatically generated for Global Miles by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of OAuthRequest
 */
class OAuthRequest extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.clientId = this.constructor.getValue(obj.clientId || obj.client_id);
        this.clientSecret = this.constructor.getValue(obj.clientSecret || obj.client_secret);
        this.grantType =
          this.constructor.getValue(obj.grantType
     || obj.grant_type, 'client_credentials');
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'clientId', realName: 'client_id' },
            { name: 'clientSecret', realName: 'client_secret' },
            { name: 'grantType', realName: 'grant_type' },
        ]);
    }

    /**
     * Function containing information about discriminator values
     * mapped with their corresponding model class names
     *
     * @return   {object}  Object containing Key-Value pairs mapping discriminator
     *                     values with their corresponding model classes
     */
    static discriminatorMap() {
        return {};
    }
}

module.exports = OAuthRequest;
