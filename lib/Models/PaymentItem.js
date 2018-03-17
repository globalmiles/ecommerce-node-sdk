/**
 * GlobalMilesEcommerceAPILib
 *
 * This file was automatically generated for Global Miles by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of PaymentItem
 */
class PaymentItem extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.type = this.constructor.getValue(obj.type);
        this.amount = this.constructor.getValue(obj.amount);
        this.paymentProvisionToken =
          this.constructor.getValue(obj.paymentProvisionToken
     || obj.payment_provision_token);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'type', realName: 'type' },
            { name: 'amount', realName: 'amount' },
            { name: 'paymentProvisionToken', realName: 'payment_provision_token' },
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

module.exports = PaymentItem;
