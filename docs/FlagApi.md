# Flagr.FlagApi

All URIs are relative to *http://localhost/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFlag**](FlagApi.md#createFlag) | **POST** /flags | 
[**deleteFlag**](FlagApi.md#deleteFlag) | **DELETE** /flags/{flagID} | 
[**findFlags**](FlagApi.md#findFlags) | **GET** /flags | 
[**getFlag**](FlagApi.md#getFlag) | **GET** /flags/{flagID} | 
[**getFlagSnapshots**](FlagApi.md#getFlagSnapshots) | **GET** /flags/{flagID}/snapshots | 
[**putFlag**](FlagApi.md#putFlag) | **PUT** /flags/{flagID} | 
[**setFlagEnabled**](FlagApi.md#setFlagEnabled) | **PUT** /flags/{flagID}/enabled | 


<a name="createFlag"></a>
# **createFlag**
> Flag createFlag(body)



### Example
```javascript
import Flagr from 'flagr';

let apiInstance = new Flagr.FlagApi();

let body = new Flagr.CreateFlagRequest(); // CreateFlagRequest | create a flag


apiInstance.createFlag(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateFlagRequest**](CreateFlagRequest.md)| create a flag | 

### Return type

[**Flag**](Flag.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteFlag"></a>
# **deleteFlag**
> deleteFlag(flagID)



### Example
```javascript
import Flagr from 'flagr';

let apiInstance = new Flagr.FlagApi();

let flagID = 789; // Number | numeric ID of the flag


apiInstance.deleteFlag(flagID, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **flagID** | **Number**| numeric ID of the flag | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="findFlags"></a>
# **findFlags**
> [Flag] findFlags(opts)



### Example
```javascript
import Flagr from 'flagr';

let apiInstance = new Flagr.FlagApi();

let opts = { 
  'limit': 789, // Number | the numbers of flags to return
  'enabled': true, // Boolean | return flags having given enabled status
  'description': "description_example", // String | return flags exactly matching given description
  'descriptionLike': "descriptionLike_example", // String | return flags partially matching given description
  'key': "key_example", // String | return flags matching given key
  'offset': 789 // Number | return flags given the offset, it should usually set together with limit
};

apiInstance.findFlags(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| the numbers of flags to return | [optional] 
 **enabled** | **Boolean**| return flags having given enabled status | [optional] 
 **description** | **String**| return flags exactly matching given description | [optional] 
 **descriptionLike** | **String**| return flags partially matching given description | [optional] 
 **key** | **String**| return flags matching given key | [optional] 
 **offset** | **Number**| return flags given the offset, it should usually set together with limit | [optional] 

### Return type

[**[Flag]**](Flag.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFlag"></a>
# **getFlag**
> Flag getFlag(flagID)



### Example
```javascript
import Flagr from 'flagr';

let apiInstance = new Flagr.FlagApi();

let flagID = 789; // Number | numeric ID of the flag to get


apiInstance.getFlag(flagID, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **flagID** | **Number**| numeric ID of the flag to get | 

### Return type

[**Flag**](Flag.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFlagSnapshots"></a>
# **getFlagSnapshots**
> [FlagSnapshot] getFlagSnapshots(flagID)



### Example
```javascript
import Flagr from 'flagr';

let apiInstance = new Flagr.FlagApi();

let flagID = 789; // Number | numeric ID of the flag to get


apiInstance.getFlagSnapshots(flagID, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **flagID** | **Number**| numeric ID of the flag to get | 

### Return type

[**[FlagSnapshot]**](FlagSnapshot.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putFlag"></a>
# **putFlag**
> Flag putFlag(flagID, body)



### Example
```javascript
import Flagr from 'flagr';

let apiInstance = new Flagr.FlagApi();

let flagID = 789; // Number | numeric ID of the flag to get

let body = new Flagr.PutFlagRequest(); // PutFlagRequest | update a flag


apiInstance.putFlag(flagID, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **flagID** | **Number**| numeric ID of the flag to get | 
 **body** | [**PutFlagRequest**](PutFlagRequest.md)| update a flag | 

### Return type

[**Flag**](Flag.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setFlagEnabled"></a>
# **setFlagEnabled**
> Flag setFlagEnabled(flagID, body)



### Example
```javascript
import Flagr from 'flagr';

let apiInstance = new Flagr.FlagApi();

let flagID = 789; // Number | numeric ID of the flag to get

let body = new Flagr.SetFlagEnabledRequest(); // SetFlagEnabledRequest | set flag enabled state


apiInstance.setFlagEnabled(flagID, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **flagID** | **Number**| numeric ID of the flag to get | 
 **body** | [**SetFlagEnabledRequest**](SetFlagEnabledRequest.md)| set flag enabled state | 

### Return type

[**Flag**](Flag.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

