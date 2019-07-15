/**
 * GlobalMilesECommerceAPILib
 *
 * This file was automatically generated for Global Miles by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of StartReturnRequest
 */
class StartReturnRequest extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.storeCode = this.constructor.getValue(obj.storeCode || obj.store_code);
        this.transactionId = this.constructor.getValue(obj.transactionId || obj.transaction_id);
        this.amount = this.constructor.getValue(obj.amount);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'storeCode', realName: 'store_code' },
            { name: 'transactionId', realName: 'transaction_id' },
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

module.exports = StartReturnRequest;
