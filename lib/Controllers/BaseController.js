/**
 * GlobalMilesECommerceAPILib
 *
 * This file was automatically generated for Global Miles by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const _objectMapper = require('../ObjectMapper');

const _objectMapperInstance = new _objectMapper();

class BaseController {
    /**
     * Get ObjectMapper instance
     * @return {ObjectMapper} Shared instance
     */
    static getObjectMapper() {
        return _objectMapperInstance;
    }

    /**
     * Global error handling
     * @param   {HttpContext}   _context   HttpContext containing request and response objects
     * @callback    Callback function which returns error, response, context
     */
    static validateResponse(_context) {
        const errorObj = {
            errorMessage: '',
            errorCode: '',
            errorResponse: _context.response.body,
        };
        const returnObj = {
            error: errorObj,
            response: null,
            context: _context,
        };

        if (_context.response.statusCode === 400) {
            returnObj.error.errorMessage = 'Bad Request	- The request was unacceptable, often due to missing a required parameter.';
            returnObj.error.errorCode = 400;
        } else if (_context.response.statusCode === 401) {
            returnObj.error.errorMessage = 'Unauthorized - No valid API key provided.';
            returnObj.error.errorCode = 401;
        } else if (_context.response.statusCode === 402) {
            returnObj.error.errorMessage = 'Request Failed - The parameters were valid but the request failed.';
            returnObj.error.errorCode = 402;
        } else if (_context.response.statusCode === 404) {
            returnObj.error.errorMessage = 'Not Found - The requested resource doesn't exist.';
            returnObj.error.errorCode = 404;
            returnObj.response = _context.response.body;
        } else if (_context.response.statusCode === 429) {
            returnObj.error.errorMessage = 'Too Many Requests - Too many requests hit the API too quickly.';
            returnObj.error.errorCode = 429;
        } else if (_context.response.statusCode === 500) {
            returnObj.error.errorMessage = 'Server Error - Something went wrong.';
            returnObj.error.errorCode = 500;
        } else {
            returnObj.error.errorMessage = 'HTTP Response Not OK';
            returnObj.error.errorCode = _context.response.statusCode;
        }

        return returnObj;
    }
}

module.exports = BaseController;
