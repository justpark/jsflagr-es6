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





/**
* The EvaluationEntity model module.
* @module model/EvaluationEntity
* @version 1.0.10
*/
export default class EvaluationEntity {
    /**
    * Constructs a new <code>EvaluationEntity</code>.
    * @alias module:model/EvaluationEntity
    * @class
    * @param entityType {String} 
    */

    constructor(entityType) {
        

        
        

        this['entityType'] = entityType;

        
    }

    /**
    * Constructs a <code>EvaluationEntity</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/EvaluationEntity} obj Optional instance to populate.
    * @return {module:model/EvaluationEntity} The populated <code>EvaluationEntity</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EvaluationEntity();

            
            
            

            if (data.hasOwnProperty('entityID')) {
                obj['entityID'] = ApiClient.convertToType(data['entityID'], 'String');
            }
            if (data.hasOwnProperty('entityType')) {
                obj['entityType'] = ApiClient.convertToType(data['entityType'], 'String');
            }
            if (data.hasOwnProperty('entityContext')) {
                obj['entityContext'] = ApiClient.convertToType(data['entityContext'], Object);
            }
        }
        return obj;
    }

    /**
    * @member {String} entityID
    */
    entityID = undefined;
    /**
    * @member {String} entityType
    */
    entityType = undefined;
    /**
    * @member {Object} entityContext
    */
    entityContext = undefined;








}


