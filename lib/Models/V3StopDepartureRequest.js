/**
 * PTVTimetableAPIVersion3Lib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of V3StopDepartureRequest
 */
class V3StopDepartureRequest extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.routeDirections =
          this.constructor.getValue(obj.routeDirections
     || obj.route_directions);
        this.routeType = this.constructor.getValue(obj.routeType || obj.route_type);
        this.stopId = this.constructor.getValue(obj.stopId || obj.stop_id);
        this.maxResults = this.constructor.getValue(obj.maxResults || obj.max_results);
        this.gtfs = this.constructor.getValue(obj.gtfs);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            {
                name: 'routeDirections',
                realName: 'route_directions',
                array: true,
                type: 'V3StopDepartureRequestRouteDirection',
            },
            { name: 'routeType', realName: 'route_type' },
            { name: 'stopId', realName: 'stop_id' },
            { name: 'maxResults', realName: 'max_results' },
            { name: 'gtfs', realName: 'gtfs' },
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

module.exports = V3StopDepartureRequest;