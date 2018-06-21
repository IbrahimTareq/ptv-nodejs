/**
  * @module PTVTimetableAPIVersion3Lib
  *
  * The PTV Timetable API provides direct access to Public Transport Victoria’s public transport
  * timetable data.    The API returns scheduled timetable, route and stop data for all
  * metropolitan and regional train, tram and bus services in Victoria, including Night
  * Network(Night Train and Night Tram data are included in metropolitan train and tram services
  * data, respectively, whereas Night Bus is a separate route type).    The API also returns real-
  * time data for metropolitan train, tram and bus services (where this data is made available to
  * PTV), as well as disruption information, stop facility information, and access to myki ticket
  * outlet data.    This Swagger is for Version 3 of the PTV Timetable API. By using this
  * documentation you agree to comply with the licence and terms of service.    Train timetable
  * data is updated daily, while the remaining data is updated weekly, taking into account any
  * planned timetable changes (for example, due to holidays or planned disruptions). The PTV
  * timetable API is the same API used by PTV for its apps. To access the most up to date data PTV
  * has (including real-time data) you must use the API dynamically.    You can access the PTV
  * Timetable API through a HTTP or HTTPS interface, as follows:        base URL / version number /
  * API name / query string  The base URL is either:    *  http://timetableapi.ptv.vic.gov.au  or
  * *  https://timetableapi.ptv.vic.gov.au    The Swagger JSON file is available at http:
  * //timetableapi.ptv.vic.gov.au/swagger/docs/v3    Frequently asked questions are available on
  * the PTV website at http://ptv.vic.gov.au/apifaq    Links to the following information are also
  * provided on the PTV website at http://ptv.vic.gov.au/ptv-timetable-api/  * How to register for
  * an API key and calculate a signature  * PTV Timetable API V2 to V3 Migration Guide  *
  * Documentation for Version 2 of the PTV Timetable API  * PTV Timetable API Data Quality
  * Statement    All information about how to use the API is in this documentation. PTV cannot
  * provide technical support for the API.    Credits: This page has been based on Steve Bennett's
  * http://opentransportdata.org/, used with permission.
  */

'use strict';

const Configuration = require('./configuration');
const DirectionsController = require('./Controllers/DirectionsController');
const DeparturesController = require('./Controllers/DeparturesController');
const DisruptionsController = require('./Controllers/DisruptionsController');
const OutletsController = require('./Controllers/OutletsController');
const PatternsController = require('./Controllers/PatternsController');
const RoutesController = require('./Controllers/RoutesController');
const RouteTypesController = require('./Controllers/RouteTypesController');
const RunsController = require('./Controllers/RunsController');
const SearchController = require('./Controllers/SearchController');
const StopsController = require('./Controllers/StopsController');
const V3RouteTypesResponse = require('./Models/V3RouteTypesResponse');
const V3RouteResponse = require('./Models/V3RouteResponse');
const V3OutletGeolocationResponse = require('./Models/V3OutletGeolocationResponse');
const V3OutletResponse = require('./Models/V3OutletResponse');
const V3OutletParameters = require('./Models/V3OutletParameters');
const V3StopBase = require('./Models/V3StopBase');
const V3DisruptionResponse = require('./Models/V3DisruptionResponse');
const V3DisruptionsResponse = require('./Models/V3DisruptionsResponse');
const V3DirectionsResponse = require('./Models/V3DirectionsResponse');
const HealthEnum = require('./Models/HealthEnum');
const V3BulkDeparturesRouteDirectionResponse =
  require('./Models/V3BulkDeparturesRouteDirectionResponse');
const V3Status = require('./Models/V3Status');
const V3StopDepartureRequestRouteDirection =
  require('./Models/V3StopDepartureRequestRouteDirection');
const V3DisruptionDirection = require('./Models/V3DisruptionDirection');
const V3Direction = require('./Models/V3Direction');
const V3DeparturesBroadParameters = require('./Models/V3DeparturesBroadParameters');
const ExpandEnum = require('./Models/ExpandEnum');
const V3DeparturesResponse = require('./Models/V3DeparturesResponse');
const V3Departure = require('./Models/V3Departure');
const V3ResultStop = require('./Models/V3ResultStop');
const V3Route = require('./Models/V3Route');
const V3Run = require('./Models/V3Run');
const V3VehiclePosition = require('./Models/V3VehiclePosition');
const V3VehicleDescriptor = require('./Models/V3VehicleDescriptor');
const V3Disruption = require('./Models/V3Disruption');
const V3DisruptionRoute = require('./Models/V3DisruptionRoute');
const V3DeparturesSpecificParameters = require('./Models/V3DeparturesSpecificParameters');
const V3RouteDeparturesSpecificParameters = require('./Models/V3RouteDeparturesSpecificParameters');
const V3BulkDeparturesRequest = require('./Models/V3BulkDeparturesRequest');
const V3StopDepartureRequest = require('./Models/V3StopDepartureRequest');
const RouteTypeEnum = require('./Models/RouteTypeEnum');
const V3BulkDeparturesResponse = require('./Models/V3BulkDeparturesResponse');
const V3BulkDeparturesUpdateResponse = require('./Models/V3BulkDeparturesUpdateResponse');
const RouteDirectionStatusEnum = require('./Models/RouteDirectionStatusEnum');
const V3BulkDeparturesStopResponse = require('./Models/V3BulkDeparturesStopResponse');
const V3Disruptions = require('./Models/V3Disruptions');
const V3Outlet = require('./Models/V3Outlet');
const V3OutletGeolocationParameters = require('./Models/V3OutletGeolocationParameters');
const V3OutletGeolocation = require('./Models/V3OutletGeolocation');
const V3StoppingPattern = require('./Models/V3StoppingPattern');
const V3RouteType = require('./Models/V3RouteType');
const V3RunsResponse = require('./Models/V3RunsResponse');
const V3RunResponse = require('./Models/V3RunResponse');
const V3SearchParameters = require('./Models/V3SearchParameters');
const V3SearchResult = require('./Models/V3SearchResult');
const V3StopResponse = require('./Models/V3StopResponse');
const V3StopDetails = require('./Models/V3StopDetails');
const V3StopLocation = require('./Models/V3StopLocation');
const V3StopGps = require('./Models/V3StopGps');
const V3StopAmenityDetails = require('./Models/V3StopAmenityDetails');
const V3StopAccessibility = require('./Models/V3StopAccessibility');
const V3StopAccessibilityWheelchair = require('./Models/V3StopAccessibilityWheelchair');
const V3StopsOnRouteResponse = require('./Models/V3StopsOnRouteResponse');
const V3StopOnRoute = require('./Models/V3StopOnRoute');
const V3StopsByDistanceResponse = require('./Models/V3StopsByDistanceResponse');
const RouteType63Enum = require('./Models/RouteType63Enum');
const RouteTypesEnum = require('./Models/RouteTypesEnum');
const DisruptionStatusEnum = require('./Models/DisruptionStatusEnum');
const V3ErrorResponseException = require('./Exceptions/V3ErrorResponseException');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of PTVTimetableAPIVersion3Lib
    Configuration,
    // controllers of PTVTimetableAPIVersion3Lib
    DirectionsController,
    DeparturesController,
    DisruptionsController,
    OutletsController,
    PatternsController,
    RoutesController,
    RouteTypesController,
    RunsController,
    SearchController,
    StopsController,
    // models of PTVTimetableAPIVersion3Lib
    V3RouteTypesResponse,
    V3RouteResponse,
    V3OutletGeolocationResponse,
    V3OutletResponse,
    V3OutletParameters,
    V3StopBase,
    V3DisruptionResponse,
    V3DisruptionsResponse,
    V3DirectionsResponse,
    HealthEnum,
    V3BulkDeparturesRouteDirectionResponse,
    V3Status,
    V3StopDepartureRequestRouteDirection,
    V3DisruptionDirection,
    V3Direction,
    V3DeparturesBroadParameters,
    ExpandEnum,
    V3DeparturesResponse,
    V3Departure,
    V3ResultStop,
    V3Route,
    V3Run,
    V3VehiclePosition,
    V3VehicleDescriptor,
    V3Disruption,
    V3DisruptionRoute,
    V3DeparturesSpecificParameters,
    V3RouteDeparturesSpecificParameters,
    V3BulkDeparturesRequest,
    V3StopDepartureRequest,
    RouteTypeEnum,
    V3BulkDeparturesResponse,
    V3BulkDeparturesUpdateResponse,
    RouteDirectionStatusEnum,
    V3BulkDeparturesStopResponse,
    V3Disruptions,
    V3Outlet,
    V3OutletGeolocationParameters,
    V3OutletGeolocation,
    V3StoppingPattern,
    V3RouteType,
    V3RunsResponse,
    V3RunResponse,
    V3SearchParameters,
    V3SearchResult,
    V3StopResponse,
    V3StopDetails,
    V3StopLocation,
    V3StopGps,
    V3StopAmenityDetails,
    V3StopAccessibility,
    V3StopAccessibilityWheelchair,
    V3StopsOnRouteResponse,
    V3StopOnRoute,
    V3StopsByDistanceResponse,
    RouteType63Enum,
    RouteTypesEnum,
    DisruptionStatusEnum,
    // exceptions of PTVTimetableAPIVersion3Lib
    V3ErrorResponseException,
    APIException,
};

module.exports = initializer;
