/**
 * GlobalMilesEcommerceAPILib
 *
 * This file was automatically generated for Global Miles by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of OrderItem
 */
class OrderItem extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.id = this.constructor.getValue(obj.id);
        this.quantity = this.constructor.getValue(obj.quantity);
        this.price = this.constructor.getValue(obj.price);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'id', realName: 'id' },
            { name: 'quantity', realName: 'quantity' },
            { name: 'price', realName: 'price' },
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

module.exports = OrderItem;
