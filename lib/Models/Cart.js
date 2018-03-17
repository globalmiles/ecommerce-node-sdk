/**
 * GlobalMilesEcommerceAPILib
 *
 * This file was automatically generated for Global Miles by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of Cart
 */
class Cart extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.currency = this.constructor.getValue(obj.currency);
        this.subtotal = this.constructor.getValue(obj.subtotal);
        this.tax = this.constructor.getValue(obj.tax);
        this.total = this.constructor.getValue(obj.total);
        this.items = this.constructor.getValue(obj.items);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'currency', realName: 'currency' },
            { name: 'subtotal', realName: 'subtotal' },
            { name: 'tax', realName: 'tax' },
            { name: 'total', realName: 'total' },
            { name: 'items', realName: 'items', array: true, type: 'CartItem' },
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

module.exports = Cart;
