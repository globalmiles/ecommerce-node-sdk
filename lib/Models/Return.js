/**
 * GlobalMilesECommerceAPILib
 *
 * This file was automatically generated for Global Miles by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of Return
 */
class Return extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.returnProvisionToken =
          this.constructor.getValue(obj.returnProvisionToken
     || obj.return_provision_token);
        this.transactionId = this.constructor.getValue(obj.transactionId || obj.transaction_id);
        this.createdAt = this.constructor.getValue(obj.createdAt || obj.created_at);
        this.updatedAt = this.constructor.getValue(obj.updatedAt || obj.updated_at);
        this.status = this.constructor.getValue(obj.status);
        this.amount = this.constructor.getValue(obj.amount);
        this.residual = this.constructor.getValue(obj.residual);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'returnProvisionToken', realName: 'return_provision_token' },
            { name: 'transactionId', realName: 'transaction_id' },
            { name: 'createdAt', realName: 'created_at' },
            { name: 'updatedAt', realName: 'updated_at' },
            { name: 'status', realName: 'status' },
            { name: 'amount', realName: 'amount', type: 'Amount' },
            { name: 'residual', realName: 'residual', type: 'Amount' },
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

module.exports = Return;
