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


import ApiClient from '../ApiClient';
import Distribution from './Distribution';





/**
* The PutDistributionsRequest model module.
* @module model/PutDistributionsRequest
* @version 1.0.10
*/
export default class PutDistributionsRequest {
    /**
    * Constructs a new <code>PutDistributionsRequest</code>.
    * @alias module:model/PutDistributionsRequest
    * @class
    * @param distributions {Array.<module:model/Distribution>} 
    */

    constructor(distributions) {
        

        
        

        this['distributions'] = distributions;

        
    }

    /**
    * Constructs a <code>PutDistributionsRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PutDistributionsRequest} obj Optional instance to populate.
    * @return {module:model/PutDistributionsRequest} The populated <code>PutDistributionsRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutDistributionsRequest();

            
            
            

            if (data.hasOwnProperty('distributions')) {
                obj['distributions'] = ApiClient.convertToType(data['distributions'], [Distribution]);
            }
        }
        return obj;
    }

    /**
    * @member {Array.<module:model/Distribution>} distributions
    */
    distributions = undefined;








}


