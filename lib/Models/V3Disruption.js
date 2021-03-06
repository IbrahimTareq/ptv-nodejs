/**
 * PTVTimetableAPIVersion3Lib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of V3Disruption
 */
class V3Disruption extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.disruptionId = this.constructor.getValue(obj.disruptionId || obj.disruption_id);
        this.title = this.constructor.getValue(obj.title);
        this.url = this.constructor.getValue(obj.url);
        this.description = this.constructor.getValue(obj.description);
        this.disruptionStatus =
          this.constructor.getValue(obj.disruptionStatus
     || obj.disruption_status);
        this.disruptionType = this.constructor.getValue(obj.disruptionType || obj.disruption_type);
        this.publishedOn = this.constructor.getValue(obj.publishedOn || obj.published_on);
        this.lastUpdated = this.constructor.getValue(obj.lastUpdated || obj.last_updated);
        this.fromDate = this.constructor.getValue(obj.fromDate || obj.from_date);
        this.toDate = this.constructor.getValue(obj.toDate || obj.to_date);
        this.routes = this.constructor.getValue(obj.routes);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'disruptionId', realName: 'disruption_id' },
            { name: 'title', realName: 'title' },
            { name: 'url', realName: 'url' },
            { name: 'description', realName: 'description' },
            { name: 'disruptionStatus', realName: 'disruption_status' },
            { name: 'disruptionType', realName: 'disruption_type' },
            {
                name: 'publishedOn',
                realName: 'published_on',
                isDateTime: true,
                dateTimeValue: 'rfc3339',
            },
            {
                name: 'lastUpdated',
                realName: 'last_updated',
                isDateTime: true,
                dateTimeValue: 'rfc3339',
            },
            { name: 'fromDate', realName: 'from_date', isDateTime: true, dateTimeValue: 'rfc3339' },
            { name: 'toDate', realName: 'to_date', isDateTime: true, dateTimeValue: 'rfc3339' },
            { name: 'routes', realName: 'routes', array: true, type: 'V3DisruptionRoute' },
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

module.exports = V3Disruption;
