/**
 * PTVTimetableAPIVersion3Lib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of V3StopDetails
 */
class V3StopDetails extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.stationType = this.constructor.getValue(obj.stationType || obj.station_type);
        this.stationDescription =
          this.constructor.getValue(obj.stationDescription
     || obj.station_description);
        this.routeType = this.constructor.getValue(obj.routeType || obj.route_type);
        this.stopLocation = this.constructor.getValue(obj.stopLocation || obj.stop_location);
        this.stopAmenities = this.constructor.getValue(obj.stopAmenities || obj.stop_amenities);
        this.stopAccessibility =
          this.constructor.getValue(obj.stopAccessibility
     || obj.stop_accessibility);
        this.stopId = this.constructor.getValue(obj.stopId || obj.stop_id);
        this.stopName = this.constructor.getValue(obj.stopName || obj.stop_name);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'stationType', realName: 'station_type' },
            { name: 'stationDescription', realName: 'station_description' },
            { name: 'routeType', realName: 'route_type' },
            { name: 'stopLocation', realName: 'stop_location', type: 'V3StopLocation' },
            { name: 'stopAmenities', realName: 'stop_amenities', type: 'V3StopAmenityDetails' },
            {
                name: 'stopAccessibility',
                realName: 'stop_accessibility',
                type: 'V3StopAccessibility',
            },
            { name: 'stopId', realName: 'stop_id' },
            { name: 'stopName', realName: 'stop_name' },
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

module.exports = V3StopDetails;