/**
 * PTVTimetableAPIVersion3Lib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of V3StopAmenityDetails
 */
class V3StopAmenityDetails extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.toilet = this.constructor.getValue(obj.toilet);
        this.taxiRank = this.constructor.getValue(obj.taxiRank || obj.taxi_rank);
        this.carParking = this.constructor.getValue(obj.carParking || obj.car_parking);
        this.cctv = this.constructor.getValue(obj.cctv);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'toilet', realName: 'toilet' },
            { name: 'taxiRank', realName: 'taxi_rank' },
            { name: 'carParking', realName: 'car_parking' },
            { name: 'cctv', realName: 'cctv' },
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

module.exports = V3StopAmenityDetails;