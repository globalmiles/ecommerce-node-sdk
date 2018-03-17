/**
 * GlobalMilesEcommerceAPILib
 *
 * This file was automatically generated for Global Miles by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of Order
 */
class Order extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.subtotal = this.constructor.getValue(obj.subtotal);
        this.tax = this.constructor.getValue(obj.tax);
        this.total = this.constructor.getValue(obj.total);
        this.currency = this.constructor.getValue(obj.currency);
        this.items = this.constructor.getValue(obj.items);
        this.discounts = this.constructor.getValue(obj.discounts);
        this.payments = this.constructor.getValue(obj.payments);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'subtotal', realName: 'subtotal' },
            { name: 'tax', realName: 'tax' },
            { name: 'total', realName: 'total' },
            { name: 'currency', realName: 'currency' },
            { name: 'items', realName: 'items', array: true, type: 'OrderItem' },
            { name: 'discounts', realName: 'discounts', array: true, type: 'DiscountItem' },
            { name: 'payments', realName: 'payments', array: true, type: 'PaymentItem' },
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

module.exports = Order;
