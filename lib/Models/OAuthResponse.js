/**
 * GlobalMilesECommerceAPILib
 *
 * This file was automatically generated for Global Miles by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of OAuthResponse
 */
class OAuthResponse extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.accessToken = this.constructor.getValue(obj.accessToken || obj.access_token);
        this.tokenType = this.constructor.getValue(obj.tokenType || obj.token_type);
        this.createdAt = this.constructor.getValue(obj.createdAt || obj.created_at);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'accessToken', realName: 'access_token' },
            { name: 'tokenType', realName: 'token_type' },
            { name: 'createdAt', realName: 'created_at' },
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

module.exports = OAuthResponse;
