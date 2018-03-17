/**
 * GlobalMilesEcommerceAPILib
 *
 * This file was automatically generated for Global Miles by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of CartResult
 */
class CartResult extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.availableAmount =
          this.constructor.getValue(obj.availableAmount
     || obj.available_amount);
        this.cartDiscount = this.constructor.getValue(obj.cartDiscount || obj.cart_discount);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'availableAmount', realName: 'available_amount', type: 'Amount' },
            { name: 'cartDiscount', realName: 'cart_discount', type: 'CartDiscount' },
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

module.exports = CartResult;
