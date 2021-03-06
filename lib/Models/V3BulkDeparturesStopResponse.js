/**
 * PTVTimetableAPIVersion3Lib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of V3BulkDeparturesStopResponse
 */
class V3BulkDeparturesStopResponse extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.stopName = this.constructor.getValue(obj.stopName || obj.stop_name);
        this.stopId = this.constructor.getValue(obj.stopId || obj.stop_id);
        this.stopLatitude = this.constructor.getValue(obj.stopLatitude || obj.stop_latitude);
        this.stopLongitude = this.constructor.getValue(obj.stopLongitude || obj.stop_longitude);
        this.stopSuburb = this.constructor.getValue(obj.stopSuburb || obj.stop_suburb);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'stopName', realName: 'stop_name' },
            { name: 'stopId', realName: 'stop_id' },
            { name: 'stopLatitude', realName: 'stop_latitude' },
            { name: 'stopLongitude', realName: 'stop_longitude' },
            { name: 'stopSuburb', realName: 'stop_suburb' },
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

module.exports = V3BulkDeparturesStopResponse;
