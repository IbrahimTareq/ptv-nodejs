# Getting started

The PTV Timetable API provides direct access to Public Transport Victoria’s public transport timetable data.

The API returns scheduled timetable, route and stop data for all metropolitan and regional train, tram and bus services in Victoria, including Night Network(Night Train and Night Tram data are included in metropolitan train and tram services data, respectively, whereas Night Bus is a separate route type).

The API also returns real-time data for metropolitan train, tram and bus services (where this data is made available to PTV), as well as disruption information, stop facility information, and access to myki ticket outlet data.

This Swagger is for Version 3 of the PTV Timetable API. By using this documentation you agree to comply with the licence and terms of service.

Train timetable data is updated daily, while the remaining data is updated weekly, taking into account any planned timetable changes (for example, due to holidays or planned disruptions). The PTV timetable API is the same API used by PTV for its apps. To access the most up to date data PTV has (including real-time data) you must use the API dynamically.

You can access the PTV Timetable API through a HTTP or HTTPS interface, as follows:

    base URL / version number / API name / query string
The base URL is either:
  *  http://timetableapi.ptv.vic.gov.au
or
  *  https://timetableapi.ptv.vic.gov.au

The Swagger JSON file is available at http://timetableapi.ptv.vic.gov.au/swagger/docs/v3

Frequently asked questions are available on the PTV website at http://ptv.vic.gov.au/apifaq

Links to the following information are also provided on the PTV website at http://ptv.vic.gov.au/ptv-timetable-api/
* How to register for an API key and calculate a signature
* PTV Timetable API V2 to V3 Migration Guide
* Documentation for Version 2 of the PTV Timetable API
* PTV Timetable API Data Quality Statement

All information about how to use the API is in this documentation. PTV cannot provide technical support for the API.

Credits: This page has been based on Steve Bennett's http://opentransportdata.org/, used with permission.


## How to Build

The generated SDK relies on [Node Package Manager](https://www.npmjs.com/) (NPM) being available to resolve dependencies. If you don't already have NPM installed, please go ahead and follow instructions to install NPM from [here](https://nodejs.org/en/download/).
The SDK also requires Node to be installed. If Node isn't already installed, please install it from [here](https://nodejs.org/en/download/)
> NPM is installed by default when Node is installed

To check if node and npm have been successfully installed, write the following commands in command prompt:

* `node --version`
* `npm -version`

![Version Check](https://apidocs.io/illustration/nodejs?step=versionCheck&workspaceFolder=PTV%20Timetable%20API%20-%20Version%203-Node)

Now use npm to resolve all dependencies by running the following command in the root directory (of the SDK folder):

```bash
npm install
```

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency1&workspaceFolder=PTV%20Timetable%20API%20-%20Version%203-Node)

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency2)

This will install all dependencies in the `node_modules` folder.

Once dependencies are resolved, you will need to move the folder `PTVTimetableAPIVersion3Lib ` in to your `node_modules` folder.

## How to Use

The following section explains how to use the library in a new project.

### 1. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

Click on `File` and select `Open Folder`.

![Open Folder](https://apidocs.io/illustration/nodejs?step=openFolder)

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

![Open Project](https://apidocs.io/illustration/nodejs?step=openProject&workspaceFolder=PTV%20Timetable%20API%20-%20Version%203-Node)

### 2. Creating a Test File

Now right click on the folder name and select the `New File` option to create a new test file. Save it as `index.js` Now import the generated NodeJS library using the following lines of code:

```js
var lib = require('lib');
```

Save changes.

![Create new file](https://apidocs.io/illustration/nodejs?step=createNewFile&workspaceFolder=PTV%20Timetable%20API%20-%20Version%203-Node)

![Save new file](https://apidocs.io/illustration/nodejs?step=saveNewFile&workspaceFolder=PTV%20Timetable%20API%20-%20Version%203-Node)

### 3. Running The Test File

To run the `index.js` file, open up the command prompt and navigate to the Path where the SDK folder resides. Type the following command to run the file:

```
node index.js
```

![Run file](https://apidocs.io/illustration/nodejs?step=runProject&workspaceFolder=PTV%20Timetable%20API%20-%20Version%203-Node)


## How to Test

These tests use Mocha framework for testing, coupled with Chai for assertions. These dependencies need to be installed for tests to run.
Tests can be run in a number of ways:

### Method 1 (Run all tests)

1. Navigate to the root directory of the SDK folder from command prompt.
2. Type `mocha --recursive` to run all the tests.

### Method 2 (Run all tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha *` to run all the tests.

### Method 3 (Run specific controller's tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha  PTV Timetable API - Version 3Controller`  to run all the tests in that controller file.

> To increase mocha's default timeout, you can change the `TEST_TIMEOUT` parameter's value in `TestBootstrap.js`.

![Run Tests](https://apidocs.io/illustration/nodejs?step=runTests&controllerName=PTV%20Timetable%20API%20-%20Version%203Controller)

## Initialization

### 

API client can be initialized as following:

```JavaScript
const lib = require('lib');


```



# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [DirectionsController](#directions_controller)
* [DeparturesController](#departures_controller)
* [DisruptionsController](#disruptions_controller)
* [OutletsController](#outlets_controller)
* [PatternsController](#patterns_controller)
* [RoutesController](#routes_controller)
* [RouteTypesController](#route_types_controller)
* [RunsController](#runs_controller)
* [SearchController](#search_controller)
* [StopsController](#stops_controller)

## <a name="directions_controller"></a>![Class: ](https://apidocs.io/img/class.png ".DirectionsController") DirectionsController

### Get singleton instance

The singleton instance of the ``` DirectionsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.DirectionsController;
```

### <a name="get_directions_for_direction_and_type"></a>![Method: ](https://apidocs.io/img/method.png ".DirectionsController.getDirectionsForDirectionAndType") getDirectionsForDirectionAndType

> *Tags:*  ``` Skips Authentication ``` 

> View all routes of a particular type for a direction of travel


```javascript
function getDirectionsForDirectionAndType(directionId, routeType, token, devid, signature, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| directionId |  ``` Required ```  | Identifier of direction of travel; values returned by Directions API - /v3/directions/route/{route_id} |
| routeType |  ``` Required ```  | Number identifying transport mode; values returned via RouteTypes API |
| token |  ``` Optional ```  | Please ignore |
| devid |  ``` Optional ```  | Your developer id |
| signature |  ``` Optional ```  | Authentication signature for request |



#### Example Usage

```javascript

    var directionId = 160;
    var routeType = Object.keys(route_type63)[0];
    var token = 'token';
    var devid = 'devid';
    var signature = 'signature';

    controller.getDirectionsForDirectionAndType(directionId, routeType, token, devid, signature, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid Request |
| 403 | Access Denied |




### <a name="get_directions_for_direction"></a>![Method: ](https://apidocs.io/img/method.png ".DirectionsController.getDirectionsForDirection") getDirectionsForDirection

> *Tags:*  ``` Skips Authentication ``` 

> View all routes for a direction of travel


```javascript
function getDirectionsForDirection(directionId, token, devid, signature, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| directionId |  ``` Required ```  | Identifier of direction of travel; values returned by Directions API - /v3/directions/route/{route_id} |
| token |  ``` Optional ```  | Please ignore |
| devid |  ``` Optional ```  | Your developer id |
| signature |  ``` Optional ```  | Authentication signature for request |



#### Example Usage

```javascript

    var directionId = 160;
    var token = 'token';
    var devid = 'devid';
    var signature = 'signature';

    controller.getDirectionsForDirection(directionId, token, devid, signature, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid Request |
| 403 | Access Denied |




### <a name="get_directions_for_route"></a>![Method: ](https://apidocs.io/img/method.png ".DirectionsController.getDirectionsForRoute") getDirectionsForRoute

> *Tags:*  ``` Skips Authentication ``` 

> View directions that a route travels in


```javascript
function getDirectionsForRoute(routeId, token, devid, signature, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| routeId |  ``` Required ```  | Identifier of route; values returned by Routes API - v3/routes |
| token |  ``` Optional ```  | Please ignore |
| devid |  ``` Optional ```  | Your developer id |
| signature |  ``` Optional ```  | Authentication signature for request |



#### Example Usage

```javascript

    var routeId = 160;
    var token = 'token';
    var devid = 'devid';
    var signature = 'signature';

    controller.getDirectionsForRoute(routeId, token, devid, signature, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid Request |
| 403 | Access Denied |




[Back to List of Controllers](#list_of_controllers)

## <a name="departures_controller"></a>![Class: ](https://apidocs.io/img/class.png ".DeparturesController") DeparturesController

### Get singleton instance

The singleton instance of the ``` DeparturesController ``` class can be accessed from the API Client.

```javascript
var controller = lib.DeparturesController;
```

### <a name="get_departures_get_for_stop"></a>![Method: ](https://apidocs.io/img/method.png ".DeparturesController.getDeparturesGetForStop") getDeparturesGetForStop

> *Tags:*  ``` Skips Authentication ``` 

> View departures for all routes from a stop


```javascript
function getDeparturesGetForStop(routeType, stopId, platformNumbers, directionId, lookBackwards, gtfs, dateUtc, maxResults, includeCancelled, expand, token, devid, signature, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| routeType |  ``` Required ```  | Number identifying transport mode; values returned via RouteTypes API |
| stopId |  ``` Required ```  | Identifier of stop; values returned by Stops API |
| platformNumbers |  ``` Optional ```  ``` Collection ```  | Filter by platform number at stop |
| directionId |  ``` Optional ```  | Filter by identifier of direction of travel; values returned by Directions API - /v3/directions/route/{route_id} |
| lookBackwards |  ``` Optional ```  | Indicates if filtering runs (and their departures) to those that arrive at destination before date_utc (default = false). Requires max_results &gt; 0. |
| gtfs |  ``` Optional ```  | Indicates that stop_id parameter will accept "GTFS stop_id" data |
| dateUtc |  ``` Optional ```  | Filter by the date and time of the request (ISO 8601 UTC format) (default = current date and time) |
| maxResults |  ``` Optional ```  | Maximum number of results returned |
| includeCancelled |  ``` Optional ```  | Indicates if cancelled services (if they exist) are returned (default = false) - metropolitan train only |
| expand |  ``` Optional ```  ``` Collection ```  | List objects to be returned in full (i.e. expanded) - options include: all, stop, route, run, direction, disruption |
| token |  ``` Optional ```  | Please ignore |
| devid |  ``` Optional ```  | Your developer id |
| signature |  ``` Optional ```  | Authentication signature for request |



#### Example Usage

```javascript

    var routeType = Object.keys(route_type63)[0];
    var stopId = 160;
    var platformNumbers = [160];
    var directionId = 160;
    var lookBackwards = true;
    var gtfs = true;
    var dateUtc = date("D M d, Y G:i");
    var maxResults = 160;
    var includeCancelled = true;
    var expand = [ Object.keys(Expand)[0] ];
    var token = 'token';
    var devid = 'devid';
    var signature = 'signature';

    controller.getDeparturesGetForStop(routeType, stopId, platformNumbers, directionId, lookBackwards, gtfs, dateUtc, maxResults, includeCancelled, expand, token, devid, signature, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid Request |
| 403 | Access Denied |




### <a name="get_departures_get_for_stop_and_route"></a>![Method: ](https://apidocs.io/img/method.png ".DeparturesController.getDeparturesGetForStopAndRoute") getDeparturesGetForStopAndRoute

> *Tags:*  ``` Skips Authentication ``` 

> View departures for a specific route from a stop


```javascript
function getDeparturesGetForStopAndRoute(routeType, stopId, routeId, directionId, lookBackwards, gtfs, dateUtc, maxResults, includeCancelled, expand, token, devid, signature, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| routeType |  ``` Required ```  | Number identifying transport mode; values returned via RouteTypes API |
| stopId |  ``` Required ```  | Identifier of stop; values returned by Stops API |
| routeId |  ``` Required ```  | Identifier of route; values returned by Routes API - v3/routes |
| directionId |  ``` Optional ```  | Filter by identifier of direction of travel; values returned by Directions API - /v3/directions/route/{route_id} |
| lookBackwards |  ``` Optional ```  | Indicates if filtering runs (and their departures) to those that arrive at destination before date_utc (default = false). Requires max_results &gt; 0. |
| gtfs |  ``` Optional ```  | Indicates that stop_id parameter will accept "GTFS stop_id" data |
| dateUtc |  ``` Optional ```  | Filter by the date and time of the request (ISO 8601 UTC format) (default = current date and time) |
| maxResults |  ``` Optional ```  | Maximum number of results returned |
| includeCancelled |  ``` Optional ```  | Indicates if cancelled services (if they exist) are returned (default = false) - metropolitan train only |
| expand |  ``` Optional ```  ``` Collection ```  | List objects to be returned in full (i.e. expanded) - options include: all, stop, route, run, direction, disruption |
| token |  ``` Optional ```  | Please ignore |
| devid |  ``` Optional ```  | Your developer id |
| signature |  ``` Optional ```  | Authentication signature for request |



#### Example Usage

```javascript

    var routeType = Object.keys(route_type63)[0];
    var stopId = 160;
    var routeId = route_id;
    var directionId = 160;
    var lookBackwards = true;
    var gtfs = true;
    var dateUtc = date("D M d, Y G:i");
    var maxResults = 160;
    var includeCancelled = true;
    var expand = [ Object.keys(Expand)[0] ];
    var token = 'token';
    var devid = 'devid';
    var signature = 'signature';

    controller.getDeparturesGetForStopAndRoute(routeType, stopId, routeId, directionId, lookBackwards, gtfs, dateUtc, maxResults, includeCancelled, expand, token, devid, signature, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid Request |
| 403 | Access Denied |




[Back to List of Controllers](#list_of_controllers)

## <a name="disruptions_controller"></a>![Class: ](https://apidocs.io/img/class.png ".DisruptionsController") DisruptionsController

### Get singleton instance

The singleton instance of the ``` DisruptionsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.DisruptionsController;
```

### <a name="get_disruptions_get_all_disruptions"></a>![Method: ](https://apidocs.io/img/method.png ".DisruptionsController.getDisruptionsGetAllDisruptions") getDisruptionsGetAllDisruptions

> *Tags:*  ``` Skips Authentication ``` 

> View all disruptions for all route types


```javascript
function getDisruptionsGetAllDisruptions(routeTypes, disruptionStatus, token, devid, signature, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| routeTypes |  ``` Optional ```  ``` Collection ```  | Filter by route_type; values returned via RouteTypes API |
| disruptionStatus |  ``` Optional ```  | Filter by status of disruption |
| token |  ``` Optional ```  | Please ignore |
| devid |  ``` Optional ```  | Your developer id |
| signature |  ``` Optional ```  | Authentication signature for request |



#### Example Usage

```javascript

    var routeTypes = [ Object.keys(route_types)[0] ];
    var disruptionStatus = Object.keys(disruption_status)[0];
    var token = 'token';
    var devid = 'devid';
    var signature = 'signature';

    controller.getDisruptionsGetAllDisruptions(routeTypes, disruptionStatus, token, devid, signature, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid Request |
| 403 | Access Denied |




### <a name="get_disruptions_get_disruptions_by_route"></a>![Method: ](https://apidocs.io/img/method.png ".DisruptionsController.getDisruptionsGetDisruptionsByRoute") getDisruptionsGetDisruptionsByRoute

> *Tags:*  ``` Skips Authentication ``` 

> View all disruptions for a particular route


```javascript
function getDisruptionsGetDisruptionsByRoute(routeId, disruptionStatus, token, devid, signature, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| routeId |  ``` Required ```  | Identifier of route; values returned by Routes API - v3/routes |
| disruptionStatus |  ``` Optional ```  | Filter by status of disruption |
| token |  ``` Optional ```  | Please ignore |
| devid |  ``` Optional ```  | Your developer id |
| signature |  ``` Optional ```  | Authentication signature for request |



#### Example Usage

```javascript

    var routeId = 160;
    var disruptionStatus = Object.keys(disruption_status)[0];
    var token = 'token';
    var devid = 'devid';
    var signature = 'signature';

    controller.getDisruptionsGetDisruptionsByRoute(routeId, disruptionStatus, token, devid, signature, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid Request |
| 403 | Access Denied |




### <a name="get_disruptions_get_disruption_by_id"></a>![Method: ](https://apidocs.io/img/method.png ".DisruptionsController.getDisruptionsGetDisruptionById") getDisruptionsGetDisruptionById

> *Tags:*  ``` Skips Authentication ``` 

> View a specific disruption


```javascript
function getDisruptionsGetDisruptionById(disruptionId, token, devid, signature, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| disruptionId |  ``` Required ```  | Identifier of disruption; values returned by Disruptions API - /v3/disruptions OR /v3/disruptions/route/{route_id} |
| token |  ``` Optional ```  | Please ignore |
| devid |  ``` Optional ```  | Your developer id |
| signature |  ``` Optional ```  | Authentication signature for request |



#### Example Usage

```javascript

    var disruptionId = 160;
    var token = 'token';
    var devid = 'devid';
    var signature = 'signature';

    controller.getDisruptionsGetDisruptionById(disruptionId, token, devid, signature, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid Request |
| 403 | Access Denied |




[Back to List of Controllers](#list_of_controllers)

## <a name="outlets_controller"></a>![Class: ](https://apidocs.io/img/class.png ".OutletsController") OutletsController

### Get singleton instance

The singleton instance of the ``` OutletsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.OutletsController;
```

### <a name="get_outlets_get_all_outlets"></a>![Method: ](https://apidocs.io/img/method.png ".OutletsController.getOutletsGetAllOutlets") getOutletsGetAllOutlets

> *Tags:*  ``` Skips Authentication ``` 

> List all ticket outlets


```javascript
function getOutletsGetAllOutlets(maxResults, token, devid, signature, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| maxResults |  ``` Optional ```  | Maximum number of results returned (default = 30) |
| token |  ``` Optional ```  | Please ignore |
| devid |  ``` Optional ```  | Your developer id |
| signature |  ``` Optional ```  | Authentication signature for request |



#### Example Usage

```javascript

    var maxResults = 160;
    var token = 'token';
    var devid = 'devid';
    var signature = 'signature';

    controller.getOutletsGetAllOutlets(maxResults, token, devid, signature, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid Request |
| 403 | Access Denied |




### <a name="get_outlets_get_outlets_by_geolocation"></a>![Method: ](https://apidocs.io/img/method.png ".OutletsController.getOutletsGetOutletsByGeolocation") getOutletsGetOutletsByGeolocation

> *Tags:*  ``` Skips Authentication ``` 

> List ticket outlets near a specific location


```javascript
function getOutletsGetOutletsByGeolocation(latitude, longitude, maxDistance, maxResults, token, devid, signature, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| latitude |  ``` Required ```  | Geographic coordinate of latitude |
| longitude |  ``` Required ```  | Geographic coordinate of longitude |
| maxDistance |  ``` Optional ```  | Filter by maximum distance (in metres) from location specified via latitude and longitude parameters (default = 300) |
| maxResults |  ``` Optional ```  | Maximum number of results returned (default = 30) |
| token |  ``` Optional ```  | Please ignore |
| devid |  ``` Optional ```  | Your developer id |
| signature |  ``` Optional ```  | Authentication signature for request |



#### Example Usage

```javascript

    var latitude = 160.874478819722;
    var longitude = 160.874478819722;
    var maxDistance = 160.874478819722;
    var maxResults = 160;
    var token = 'token';
    var devid = 'devid';
    var signature = 'signature';

    controller.getOutletsGetOutletsByGeolocation(latitude, longitude, maxDistance, maxResults, token, devid, signature, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid Request |
| 403 | Access Denied |




[Back to List of Controllers](#list_of_controllers)

## <a name="patterns_controller"></a>![Class: ](https://apidocs.io/img/class.png ".PatternsController") PatternsController

### Get singleton instance

The singleton instance of the ``` PatternsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.PatternsController;
```

### <a name="get_patterns_get_pattern_by_run"></a>![Method: ](https://apidocs.io/img/method.png ".PatternsController.getPatternsGetPatternByRun") getPatternsGetPatternByRun

> *Tags:*  ``` Skips Authentication ``` 

> View the stopping pattern for a specific trip/service run


```javascript
function getPatternsGetPatternByRun(runId, routeType, expand, stopId, dateUtc, token, devid, signature, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| runId |  ``` Required ```  | Identifier of a trip/service run; values returned by Runs API - /v3/route/{route_id} and Departures API |
| routeType |  ``` Required ```  | Number identifying transport mode; values returned via RouteTypes API |
| expand |  ``` Required ```  ``` Collection ```  | Objects to be returned in full (i.e. expanded) - options include: all, stop, route, run, direction, disruption. By default disruptions are expanded. |
| stopId |  ``` Optional ```  | Filter by stop_id; values returned by Stops API |
| dateUtc |  ``` Optional ```  | Filter by the date and time of the request (ISO 8601 UTC format) |
| token |  ``` Optional ```  | Please ignore |
| devid |  ``` Optional ```  | Your developer id |
| signature |  ``` Optional ```  | Authentication signature for request |



#### Example Usage

```javascript

    var runId = 160;
    var routeType = Object.keys(route_type63)[0];
    var expand = [ Object.keys(Expand)[0] ];
    var stopId = 160;
    var dateUtc = date("D M d, Y G:i");
    var token = 'token';
    var devid = 'devid';
    var signature = 'signature';

    controller.getPatternsGetPatternByRun(runId, routeType, expand, stopId, dateUtc, token, devid, signature, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid Request |
| 403 | Access Denied |




[Back to List of Controllers](#list_of_controllers)

## <a name="routes_controller"></a>![Class: ](https://apidocs.io/img/class.png ".RoutesController") RoutesController

### Get singleton instance

The singleton instance of the ``` RoutesController ``` class can be accessed from the API Client.

```javascript
var controller = lib.RoutesController;
```

### <a name="get_routes_one_or_more_routes"></a>![Method: ](https://apidocs.io/img/method.png ".RoutesController.getRoutesOneOrMoreRoutes") getRoutesOneOrMoreRoutes

> *Tags:*  ``` Skips Authentication ``` 

> View route names and numbers for all routes


```javascript
function getRoutesOneOrMoreRoutes(routeTypes, routeName, token, devid, signature, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| routeTypes |  ``` Optional ```  ``` Collection ```  | Filter by route_type; values returned via RouteTypes API |
| routeName |  ``` Optional ```  | Filter by name  of route (accepts partial route name matches) |
| token |  ``` Optional ```  | Please ignore |
| devid |  ``` Optional ```  | Your developer id |
| signature |  ``` Optional ```  | Authentication signature for request |



#### Example Usage

```javascript

    var routeTypes = [ Object.keys(route_types)[0] ];
    var routeName = route_name;
    var token = 'token';
    var devid = 'devid';
    var signature = 'signature';

    controller.getRoutesOneOrMoreRoutes(routeTypes, routeName, token, devid, signature, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid Request |
| 403 | Access Denied |




### <a name="get_routes_route_from_id"></a>![Method: ](https://apidocs.io/img/method.png ".RoutesController.getRoutesRouteFromId") getRoutesRouteFromId

> *Tags:*  ``` Skips Authentication ``` 

> View route name and number for specific route ID


```javascript
function getRoutesRouteFromId(routeId, token, devid, signature, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| routeId |  ``` Required ```  | Identifier of route; values returned by Departures, Directions and Disruptions APIs |
| token |  ``` Optional ```  | Please ignore |
| devid |  ``` Optional ```  | Your developer id |
| signature |  ``` Optional ```  | Authentication signature for request |



#### Example Usage

```javascript

    var routeId = 160;
    var token = 'token';
    var devid = 'devid';
    var signature = 'signature';

    controller.getRoutesRouteFromId(routeId, token, devid, signature, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid Request |
| 403 | Access Denied |




[Back to List of Controllers](#list_of_controllers)

## <a name="route_types_controller"></a>![Class: ](https://apidocs.io/img/class.png ".RouteTypesController") RouteTypesController

### Get singleton instance

The singleton instance of the ``` RouteTypesController ``` class can be accessed from the API Client.

```javascript
var controller = lib.RouteTypesController;
```

### <a name="get_route_types_get_route_types"></a>![Method: ](https://apidocs.io/img/method.png ".RouteTypesController.getRouteTypesGetRouteTypes") getRouteTypesGetRouteTypes

> *Tags:*  ``` Skips Authentication ``` 

> View all route types and their names


```javascript
function getRouteTypesGetRouteTypes(token, devid, signature, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| token |  ``` Optional ```  | Please ignore |
| devid |  ``` Optional ```  | Your developer id |
| signature |  ``` Optional ```  | Authentication signature for request |



#### Example Usage

```javascript

    var token = 'token';
    var devid = 'devid';
    var signature = 'signature';

    controller.getRouteTypesGetRouteTypes(token, devid, signature, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid Request |
| 403 | Access Denied |




[Back to List of Controllers](#list_of_controllers)

## <a name="runs_controller"></a>![Class: ](https://apidocs.io/img/class.png ".RunsController") RunsController

### Get singleton instance

The singleton instance of the ``` RunsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.RunsController;
```

### <a name="get_runs_for_route"></a>![Method: ](https://apidocs.io/img/method.png ".RunsController.getRunsForRoute") getRunsForRoute

> *Tags:*  ``` Skips Authentication ``` 

> View all trip/service runs for a specific route ID


```javascript
function getRunsForRoute(routeId, token, devid, signature, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| routeId |  ``` Required ```  | Identifier of route; values returned by Routes API - v3/routes. |
| token |  ``` Optional ```  | Please ignore |
| devid |  ``` Optional ```  | Your developer id |
| signature |  ``` Optional ```  | Authentication signature for request |



#### Example Usage

```javascript

    var routeId = 160;
    var token = 'token';
    var devid = 'devid';
    var signature = 'signature';

    controller.getRunsForRoute(routeId, token, devid, signature, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid Request |
| 403 | Access Denied |




### <a name="get_runs_for_route_and_route_type"></a>![Method: ](https://apidocs.io/img/method.png ".RunsController.getRunsForRouteAndRouteType") getRunsForRouteAndRouteType

> *Tags:*  ``` Skips Authentication ``` 

> View all trip/service runs for a specific route ID and route type


```javascript
function getRunsForRouteAndRouteType(routeId, routeType, token, devid, signature, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| routeId |  ``` Required ```  | Identifier of route; values returned by Routes API - v3/routes. |
| routeType |  ``` Required ```  | Number identifying transport mode; values returned via RouteTypes API |
| token |  ``` Optional ```  | Please ignore |
| devid |  ``` Optional ```  | Your developer id |
| signature |  ``` Optional ```  | Authentication signature for request |



#### Example Usage

```javascript

    var routeId = 160;
    var routeType = Object.keys(route_type63)[0];
    var token = 'token';
    var devid = 'devid';
    var signature = 'signature';

    controller.getRunsForRouteAndRouteType(routeId, routeType, token, devid, signature, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid Request |
| 403 | Access Denied |




### <a name="get_runs_for_run"></a>![Method: ](https://apidocs.io/img/method.png ".RunsController.getRunsForRun") getRunsForRun

> *Tags:*  ``` Skips Authentication ``` 

> View all trip/service runs for a specific run ID


```javascript
function getRunsForRun(runId, token, devid, signature, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| runId |  ``` Required ```  | Identifier of a trip/service run; values returned by Runs API - /v3/route/{route_id} and Departures API |
| token |  ``` Optional ```  | Please ignore |
| devid |  ``` Optional ```  | Your developer id |
| signature |  ``` Optional ```  | Authentication signature for request |



#### Example Usage

```javascript

    var runId = 160;
    var token = 'token';
    var devid = 'devid';
    var signature = 'signature';

    controller.getRunsForRun(runId, token, devid, signature, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid Request |
| 403 | Access Denied |




### <a name="get_runs_for_run_and_route_type"></a>![Method: ](https://apidocs.io/img/method.png ".RunsController.getRunsForRunAndRouteType") getRunsForRunAndRouteType

> *Tags:*  ``` Skips Authentication ``` 

> View the trip/service run for a specific run ID and route type


```javascript
function getRunsForRunAndRouteType(runId, routeType, token, devid, signature, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| runId |  ``` Required ```  | Identifier of a trip/service run; values returned by Runs API - /v3/route/{route_id} and Departures API |
| routeType |  ``` Required ```  | Number identifying transport mode; values returned via RouteTypes API |
| token |  ``` Optional ```  | Please ignore |
| devid |  ``` Optional ```  | Your developer id |
| signature |  ``` Optional ```  | Authentication signature for request |



#### Example Usage

```javascript

    var runId = 160;
    var routeType = Object.keys(route_type63)[0];
    var token = 'token';
    var devid = 'devid';
    var signature = 'signature';

    controller.getRunsForRunAndRouteType(runId, routeType, token, devid, signature, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid Request |
| 403 | Access Denied |




[Back to List of Controllers](#list_of_controllers)

## <a name="search_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SearchController") SearchController

### Get singleton instance

The singleton instance of the ``` SearchController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SearchController;
```

### <a name="search_search"></a>![Method: ](https://apidocs.io/img/method.png ".SearchController.searchSearch") searchSearch

> *Tags:*  ``` Skips Authentication ``` 

> View stops, routes and myki ticket outlets that match the search term


```javascript
function searchSearch(searchTerm, routeTypes, latitude, longitude, maxDistance, includeAddresses, includeOutlets, matchStopBySuburb, matchRouteBySuburb, token, devid, signature, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| searchTerm |  ``` Required ```  | Search text (note: if search text is numeric and/or less than 3 characters, the API will only return routes) |
| routeTypes |  ``` Optional ```  ``` Collection ```  | Filter by route_type; values returned via RouteTypes API (note: stops and routes are ordered by route_types specified) |
| latitude |  ``` Optional ```  | Filter by geographic coordinate of latitude |
| longitude |  ``` Optional ```  | Filter by geographic coordinate of longitude |
| maxDistance |  ``` Optional ```  | Filter by maximum distance (in metres) from location specified via latitude and longitude parameters |
| includeAddresses |  ``` Optional ```  | Placeholder for future development; currently unavailable |
| includeOutlets |  ``` Optional ```  | Indicates if outlets will be returned in response (default = true) |
| matchStopBySuburb |  ``` Optional ```  | Indicates whether to find stops by suburbs in the search term (default = true) |
| matchRouteBySuburb |  ``` Optional ```  | Indicates whether to find routes by suburbs in the search term (default = true) |
| token |  ``` Optional ```  | Please ignore |
| devid |  ``` Optional ```  | Your developer id |
| signature |  ``` Optional ```  | Authentication signature for request |



#### Example Usage

```javascript

    var searchTerm = search_term;
    var routeTypes = [ Object.keys(route_types)[0] ];
    var latitude = 160.874478819722;
    var longitude = 160.874478819722;
    var maxDistance = 160.874478819722;
    var includeAddresses = true;
    var includeOutlets = true;
    var matchStopBySuburb = true;
    var matchRouteBySuburb = true;
    var token = 'token';
    var devid = 'devid';
    var signature = 'signature';

    controller.searchSearch(searchTerm, routeTypes, latitude, longitude, maxDistance, includeAddresses, includeOutlets, matchStopBySuburb, matchRouteBySuburb, token, devid, signature, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid Request |
| 403 | Access Denied |




[Back to List of Controllers](#list_of_controllers)

## <a name="stops_controller"></a>![Class: ](https://apidocs.io/img/class.png ".StopsController") StopsController

### Get singleton instance

The singleton instance of the ``` StopsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.StopsController;
```

### <a name="get_stops_stop_details"></a>![Method: ](https://apidocs.io/img/method.png ".StopsController.getStopsStopDetails") getStopsStopDetails

> *Tags:*  ``` Skips Authentication ``` 

> View facilities at a specific stop (Metro and V/Line stations only)


```javascript
function getStopsStopDetails(stopId, routeType, stopLocation, stopAmenities, stopAccessibility, stopContact, stopTicket, gtfs, token, devid, signature, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| stopId |  ``` Required ```  | Identifier of stop; values returned by Stops API |
| routeType |  ``` Required ```  | Number identifying transport mode; values returned via RouteTypes API |
| stopLocation |  ``` Optional ```  | Indicates if stop location information will be returned (default = false) |
| stopAmenities |  ``` Optional ```  | Indicates if stop amenity information will be returned (default = false) |
| stopAccessibility |  ``` Optional ```  | Indicates if stop accessibility information will be returned (default = false) |
| stopContact |  ``` Optional ```  | Placeholder for future development; currently unavailable |
| stopTicket |  ``` Optional ```  | Placeholder for future development; currently unavailable |
| gtfs |  ``` Optional ```  | Incdicates whether the stop_id is a GTFS ID or not |
| token |  ``` Optional ```  | Please ignore |
| devid |  ``` Optional ```  | Your developer id |
| signature |  ``` Optional ```  | Authentication signature for request |



#### Example Usage

```javascript

    var stopId = 160;
    var routeType = Object.keys(route_type63)[0];
    var stopLocation = true;
    var stopAmenities = true;
    var stopAccessibility = true;
    var stopContact = true;
    var stopTicket = true;
    var gtfs = true;
    var token = 'token';
    var devid = 'devid';
    var signature = 'signature';

    controller.getStopsStopDetails(stopId, routeType, stopLocation, stopAmenities, stopAccessibility, stopContact, stopTicket, gtfs, token, devid, signature, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid Request |
| 403 | Access Denied |




### <a name="get_stops_stops_for_route"></a>![Method: ](https://apidocs.io/img/method.png ".StopsController.getStopsStopsForRoute") getStopsStopsForRoute

> *Tags:*  ``` Skips Authentication ``` 

> View all stops on a specific route


```javascript
function getStopsStopsForRoute(routeId, routeType, token, devid, signature, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| routeId |  ``` Required ```  | Identifier of route; values returned by Routes API - v3/routes |
| routeType |  ``` Required ```  | Number identifying transport mode; values returned via RouteTypes API |
| token |  ``` Optional ```  | Please ignore |
| devid |  ``` Optional ```  | Your developer id |
| signature |  ``` Optional ```  | Authentication signature for request |



#### Example Usage

```javascript

    var routeId = 160;
    var routeType = Object.keys(route_type63)[0];
    var token = 'token';
    var devid = 'devid';
    var signature = 'signature';

    controller.getStopsStopsForRoute(routeId, routeType, token, devid, signature, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid Request |
| 403 | Access Denied |




### <a name="get_stops_stops_by_geolocation"></a>![Method: ](https://apidocs.io/img/method.png ".StopsController.getStopsStopsByGeolocation") getStopsStopsByGeolocation

> *Tags:*  ``` Skips Authentication ``` 

> View all stops near a specific location


```javascript
function getStopsStopsByGeolocation(latitude, longitude, routeTypes, maxResults, maxDistance, token, devid, signature, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| latitude |  ``` Required ```  | Geographic coordinate of latitude |
| longitude |  ``` Required ```  | Geographic coordinate of longitude |
| routeTypes |  ``` Optional ```  ``` Collection ```  | Filter by route_type; values returned via RouteTypes API |
| maxResults |  ``` Optional ```  | Maximum number of results returned (default = 30) |
| maxDistance |  ``` Optional ```  | Filter by maximum distance (in metres) from location specified via latitude and longitude parameters (default = 300) |
| token |  ``` Optional ```  | Please ignore |
| devid |  ``` Optional ```  | Your developer id |
| signature |  ``` Optional ```  | Authentication signature for request |



#### Example Usage

```javascript

    var latitude = 160.874478819722;
    var longitude = 160.874478819722;
    var routeTypes = [ Object.keys(route_types)[0] ];
    var maxResults = 160;
    var maxDistance = 160.874478819722;
    var token = 'token';
    var devid = 'devid';
    var signature = 'signature';

    controller.getStopsStopsByGeolocation(latitude, longitude, routeTypes, maxResults, maxDistance, token, devid, signature, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid Request |
| 403 | Access Denied |




[Back to List of Controllers](#list_of_controllers)



