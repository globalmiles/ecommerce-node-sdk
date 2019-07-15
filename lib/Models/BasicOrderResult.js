/**
 * GlobalMilesECommerceAPILib
 *
 * This file was automatically generated for Global Miles by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of BasicOrderResult
 */
class BasicOrderResult extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.transactionToken =
          this.constructor.getValue(obj.transactionToken
     || obj.transaction_token);
        this.transactionId = this.constructor.getValue(obj.transactionId || obj.transaction_id);
        this.completedAt = this.constructor.getValue(obj.completedAt || obj.completed_at);
        this.createdAt = this.constructor.getValue(obj.createdAt || obj.created_at);
        this.updatedAt = this.constructor.getValue(obj.updatedAt || obj.updated_at);
        this.status = this.constructor.getValue(obj.status);
        this.subtotal = this.constructor.getValue(obj.subtotal);
        this.tax = this.constructor.getValue(obj.tax);
        this.total = this.constructor.getValue(obj.total);
        this.currency = this.constructor.getValue(obj.currency);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'transactionToken', realName: 'transaction_token' },
            { name: 'transactionId', realName: 'transaction_id' },
            { name: 'completedAt', realName: 'completed_at' },
            { name: 'createdAt', realName: 'created_at' },
            { name: 'updatedAt', realName: 'updated_at' },
            { name: 'status', realName: 'status' },
            { name: 'subtotal', realName: 'subtotal' },
            { name: 'tax', realName: 'tax' },
            { name: 'total', realName: 'total' },
            { name: 'currency', realName: 'currency' },
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

module.exports = BasicOrderResult;
