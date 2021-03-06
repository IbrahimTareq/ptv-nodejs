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

class RunsController {
    /**
     * View all trip/service runs for a specific route ID
     *
     * @param {int} routeId Identifier of route; values returned by Routes API - v3/routes.
     * @param {string} token (optional) Please ignore
     * @param {string} devid (optional) Your developer id
     * @param {string} signature (optional) Authentication signature for request
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getRunsForRoute(routeId, token, devid, signature, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _queryBuilder = `${_baseUri}${'/v3/runs/route/{route_id}'}`;

        // process template parameters
        _queryBuilder = _apiHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            route_id: routeId,
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
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'V3RunsResponse');
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
     * View all trip/service runs for a specific route ID and route type
     *
     * @param {int} routeId Identifier of route; values returned by Routes API - v3/routes.
     * @param {RouteType63Enum} routeType Number identifying transport mode; values returned via
     * RouteTypes API
     * @param {string} token (optional) Please ignore
     * @param {string} devid (optional) Your developer id
     * @param {string} signature (optional) Authentication signature for request
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getRunsForRouteAndRouteType(routeId, routeType, token, devid, signature, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _queryBuilder = `${_baseUri}${'/v3/runs/route/{route_id}/route_type/{route_type}'}`;

        // process template parameters
        _queryBuilder = _apiHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            route_id: routeId,
            route_type: (routeType !== null) ? routeType : null,
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
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'V3RunsResponse');
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
     * View all trip/service runs for a specific run ID
     *
     * @param {int} runId Identifier of a trip/service run; values returned by Runs API -
     * /v3/route/{route_id} and Departures API
     * @param {string} token (optional) Please ignore
     * @param {string} devid (optional) Your developer id
     * @param {string} signature (optional) Authentication signature for request
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getRunsForRun(runId, token, devid, signature, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _queryBuilder = `${_baseUri}${'/v3/runs/{run_id}'}`;

        // process template parameters
        _queryBuilder = _apiHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            run_id: runId,
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
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'V3RunsResponse');
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
     * View the trip/service run for a specific run ID and route type
     *
     * @param {int} runId Identifier of a trip/service run; values returned by Runs API -
     * /v3/route/{route_id} and Departures API
     * @param {RouteType63Enum} routeType Number identifying transport mode; values returned via
     * RouteTypes API
     * @param {string} token (optional) Please ignore
     * @param {string} devid (optional) Your developer id
     * @param {string} signature (optional) Authentication signature for request
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getRunsForRunAndRouteType(runId, routeType, token, devid, signature, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _queryBuilder = `${_baseUri}${'/v3/runs/{run_id}/route_type/{route_type}'}`;

        // process template parameters
        _queryBuilder = _apiHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            run_id: runId,
            route_type: (routeType !== null) ? routeType : null,
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
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'V3RunResponse');
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
module.exports = RunsController;
