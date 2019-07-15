/**
 * GlobalMilesECommerceAPILib
 *
 * This file was automatically generated for Global Miles by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of Payment
 */
class Payment extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.paymentProvisionToken =
          this.constructor.getValue(obj.paymentProvisionToken
     || obj.payment_provision_token);
        this.createdAt = this.constructor.getValue(obj.createdAt || obj.created_at);
        this.updatedAt = this.constructor.getValue(obj.updatedAt || obj.updated_at);
        this.status = this.constructor.getValue(obj.status);
        this.amount = this.constructor.getValue(obj.amount);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'paymentProvisionToken', realName: 'payment_provision_token' },
            { name: 'createdAt', realName: 'created_at' },
            { name: 'updatedAt', realName: 'updated_at' },
            { name: 'status', realName: 'status' },
            { name: 'amount', realName: 'amount', type: 'Amount' },
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

module.exports = Payment;
