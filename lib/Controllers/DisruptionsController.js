/**
 * PTVTimetableAPIVersion3Lib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const _request = require('../Http/Client/RequestClient');
const _configuration = require('../configuration');
const _apiHelper = require('../APIHelper');
const _baseController = require('./BaseController');

class DisruptionsController {
    /**
     * View all disruptions for all route types
     *
     * @param {array} routeTypes (optional) Filter by route_type; values returned via RouteTypes
     * API
     * @param {DisruptionStatusEnum} disruptionStatus (optional) Filter by status of disruption
     * @param {string} token (optional) Please ignore
     * @param {string} devid (optional) Your developer id
     * @param {string} signature (optional) Authentication signature for request
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getDisruptionsGetAllDisruptions(routeTypes,
        disruptionStatus,
        token,
        devid,
        signature,
        callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _queryBuilder = `${_baseUri}${'/v3/disruptions'}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            route_types: (routeTypes !== null) ? routeTypes : null,
            disruption_status: (disruptionStatus !== null) ? disruptionStatus : null,
            token,
            devid,
            signature,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                let response = '';
                if (_context.response.body) {
                    response = JSON.parse(_context.response.body);
                }
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    let parsed = JSON.parse(_response.body);
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'V3DisruptionsResponse');
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else if (_response.statusCode === 400) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'V3ErrorResponseException');
                    mappedObject.reason = 'Invalid Request';
                    mappedObject.context = _context;
                    const _err = { errorMessage: 'Invalid Request', errorCode: 400, errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 403) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'V3ErrorResponseException');
                    mappedObject.reason = 'Access Denied';
                    mappedObject.context = _context;
                    const _err = { errorMessage: 'Access Denied', errorCode: 403, errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * View all disruptions for a particular route
     *
     * @param {int} routeId Identifier of route; values returned by Routes API - v3/routes
     * @param {DisruptionStatusEnum} disruptionStatus (optional) Filter by status of disruption
     * @param {string} token (optional) Please ignore
     * @param {string} devid (optional) Your developer id
     * @param {string} signature (optional) Authentication signature for request
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getDisruptionsGetDisruptionsByRoute(routeId,
        disruptionStatus,
        token,
        devid,
        signature,
        callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _queryBuilder = `${_baseUri}${'/v3/disruptions/route/{route_id}'}`;

        // process template parameters
        _queryBuilder = _apiHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            route_id: routeId,
        });

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            disruption_status: (disruptionStatus !== null) ? disruptionStatus : null,
            token,
            devid,
            signature,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                let response = '';
                if (_context.response.body) {
                    response = JSON.parse(_context.response.body);
                }
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    let parsed = JSON.parse(_response.body);
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'V3DisruptionsResponse');
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else if (_response.statusCode === 400) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'V3ErrorResponseException');
                    mappedObject.reason = 'Invalid Request';
                    mappedObject.context = _context;
                    const _err = { errorMessage: 'Invalid Request', errorCode: 400, errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 403) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'V3ErrorResponseException');
                    mappedObject.reason = 'Access Denied';
                    mappedObject.context = _context;
                    const _err = { errorMessage: 'Access Denied', errorCode: 403, errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * View a specific disruption
     *
     * @param {long} disruptionId Identifier of disruption; values returned by Disruptions API -
     * /v3/disruptions OR /v3/disruptions/route/{route_id}
     * @param {string} token (optional) Please ignore
     * @param {string} devid (optional) Your developer id
     * @param {string} signature (optional) Authentication signature for request
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getDisruptionsGetDisruptionById(disruptionId, token, devid, signature, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _queryBuilder = `${_baseUri}${'/v3/disruptions/{disruption_id}'}`;

        // process template parameters
        _queryBuilder = _apiHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            disruption_id: disruptionId,
        });

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            token,
            devid,
            signature,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                let response = '';
                if (_context.response.body) {
                    response = JSON.parse(_context.response.body);
                }
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    let parsed = JSON.parse(_response.body);
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'V3DisruptionResponse');
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else if (_response.statusCode === 400) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'V3ErrorResponseException');
                    mappedObject.reason = 'Invalid Request';
                    mappedObject.context = _context;
                    const _err = { errorMessage: 'Invalid Request', errorCode: 400, errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 403) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'V3ErrorResponseException');
                    mappedObject.reason = 'Access Denied';
                    mappedObject.context = _context;
                    const _err = { errorMessage: 'Access Denied', errorCode: 403, errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
}
module.exports = DisruptionsController;
