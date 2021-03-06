/**
 * Flagr
 * Flagr is a feature flagging, A/B testing and dynamic configuration microservice
 *
 * OpenAPI spec version: 1.0.10
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import CreateFlagRequest from '../model/CreateFlagRequest';
import Error from '../model/Error';
import Flag from '../model/Flag';
import FlagSnapshot from '../model/FlagSnapshot';
import PutFlagRequest from '../model/PutFlagRequest';
import SetFlagEnabledRequest from '../model/SetFlagEnabledRequest';

/**
* Flag service.
* @module api/FlagApi
* @version 1.0.10
*/
export default class FlagApi {

    /**
    * Constructs a new FlagApi. 
    * @alias module:api/FlagApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createFlag operation.
     * @callback module:api/FlagApi~createFlagCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Flag} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/CreateFlagRequest} body create a flag
     * @param {module:api/FlagApi~createFlagCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Flag}
     */
    createFlag(body, callback) {
      let postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createFlag");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Flag;

      return this.apiClient.callApi(
        '/flags', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteFlag operation.
     * @callback module:api/FlagApi~deleteFlagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} flagID numeric ID of the flag
     * @param {module:api/FlagApi~deleteFlagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteFlag(flagID, callback) {
      let postBody = null;

      // verify the required parameter 'flagID' is set
      if (flagID === undefined || flagID === null) {
        throw new Error("Missing the required parameter 'flagID' when calling deleteFlag");
      }


      let pathParams = {
        'flagID': flagID
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/flags/{flagID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the findFlags operation.
     * @callback module:api/FlagApi~findFlagsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Flag>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit the numbers of flags to return
     * @param {Boolean} opts.enabled return flags having given enabled status
     * @param {String} opts.description return flags exactly matching given description
     * @param {String} opts.descriptionLike return flags partially matching given description
     * @param {String} opts.key return flags matching given key
     * @param {Number} opts.offset return flags given the offset, it should usually set together with limit
     * @param {module:api/FlagApi~findFlagsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Flag>}
     */
    findFlags(opts, callback) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'limit': opts['limit'],
        'enabled': opts['enabled'],
        'description': opts['description'],
        'description_like': opts['descriptionLike'],
        'key': opts['key'],
        'offset': opts['offset']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = [Flag];

      return this.apiClient.callApi(
        '/flags', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFlag operation.
     * @callback module:api/FlagApi~getFlagCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Flag} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} flagID numeric ID of the flag to get
     * @param {module:api/FlagApi~getFlagCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Flag}
     */
    getFlag(flagID, callback) {
      let postBody = null;

      // verify the required parameter 'flagID' is set
      if (flagID === undefined || flagID === null) {
        throw new Error("Missing the required parameter 'flagID' when calling getFlag");
      }


      let pathParams = {
        'flagID': flagID
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Flag;

      return this.apiClient.callApi(
        '/flags/{flagID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFlagSnapshots operation.
     * @callback module:api/FlagApi~getFlagSnapshotsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/FlagSnapshot>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} flagID numeric ID of the flag to get
     * @param {module:api/FlagApi~getFlagSnapshotsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/FlagSnapshot>}
     */
    getFlagSnapshots(flagID, callback) {
      let postBody = null;

      // verify the required parameter 'flagID' is set
      if (flagID === undefined || flagID === null) {
        throw new Error("Missing the required parameter 'flagID' when calling getFlagSnapshots");
      }


      let pathParams = {
        'flagID': flagID
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = [FlagSnapshot];

      return this.apiClient.callApi(
        '/flags/{flagID}/snapshots', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the putFlag operation.
     * @callback module:api/FlagApi~putFlagCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Flag} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} flagID numeric ID of the flag to get
     * @param {module:model/PutFlagRequest} body update a flag
     * @param {module:api/FlagApi~putFlagCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Flag}
     */
    putFlag(flagID, body, callback) {
      let postBody = body;

      // verify the required parameter 'flagID' is set
      if (flagID === undefined || flagID === null) {
        throw new Error("Missing the required parameter 'flagID' when calling putFlag");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling putFlag");
      }


      let pathParams = {
        'flagID': flagID
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Flag;

      return this.apiClient.callApi(
        '/flags/{flagID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the setFlagEnabled operation.
     * @callback module:api/FlagApi~setFlagEnabledCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Flag} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} flagID numeric ID of the flag to get
     * @param {module:model/SetFlagEnabledRequest} body set flag enabled state
     * @param {module:api/FlagApi~setFlagEnabledCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Flag}
     */
    setFlagEnabled(flagID, body, callback) {
      let postBody = body;

      // verify the required parameter 'flagID' is set
      if (flagID === undefined || flagID === null) {
        throw new Error("Missing the required parameter 'flagID' when calling setFlagEnabled");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling setFlagEnabled");
      }


      let pathParams = {
        'flagID': flagID
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Flag;

      return this.apiClient.callApi(
        '/flags/{flagID}/enabled', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }


}
