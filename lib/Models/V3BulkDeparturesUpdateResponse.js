/**
 * PTVTimetableAPIVersion3Lib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of V3BulkDeparturesUpdateResponse
 */
class V3BulkDeparturesUpdateResponse extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.departures = this.constructor.getValue(obj.departures);
        this.routeType = this.constructor.getValue(obj.routeType || obj.route_type);
        this.stopId = this.constructor.getValue(obj.stopId || obj.stop_id);
        this.requestedRouteDirection =
          this.constructor.getValue(obj.requestedRouteDirection
     || obj.requested_route_direction);
        this.routeDirectionStatus =
          this.constructor.getValue(obj.routeDirectionStatus
     || obj.route_direction_status);
        this.routeDirection = this.constructor.getValue(obj.routeDirection || obj.route_direction);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'departures', realName: 'departures', array: true, type: 'V3Departure' },
            { name: 'routeType', realName: 'route_type' },
            { name: 'stopId', realName: 'stop_id' },
            {
                name: 'requestedRouteDirection',
                realName: 'requested_route_direction',
                type: 'V3BulkDeparturesRouteDirectionResponse',
            },
            { name: 'routeDirectionStatus', realName: 'route_direction_status' },
            {
                name: 'routeDirection',
                realName: 'route_direction',
                type: 'V3BulkDeparturesRouteDirectionResponse',
            },
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

module.exports = V3BulkDeparturesUpdateResponse;