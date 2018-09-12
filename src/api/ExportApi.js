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
import Error from '../model/Error';

/**
* Export service.
* @module api/ExportApi
* @version 1.0.10
*/
export default class ExportApi {

    /**
    * Constructs a new ExportApi. 
    * @alias module:api/ExportApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getExportSQLite operation.
     * @callback module:api/ExportApi~getExportSQLiteCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Export sqlite3 format of the db dump, which is converted from the main database.
     * @param {module:api/ExportApi~getExportSQLiteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    getExportSQLite(callback) {
      let postBody = null;


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
      let accepts = ['application/octet-stream'];
      let returnType = File;

      return this.apiClient.callApi(
        '/export/sqlite', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }


}
