const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = async (event, context) => {
  var bucket;
  if (event.queryStringParameters && event.queryStringParameters.bucket) {
    bucket = event.queryStringParameters.bucket
  } else {
    bucket = event.bucket
  }
  
  var params = {
    Bucket: bucket
  }
  let s3Objects;
  
  try {
    s3Objects = await s3.listObjectsV2(params).promise();
    console.log(s3Objects)
  } catch(e) {
    console.log(e)
  }



    const response = {
        statusCode: 200,
        body: JSON.stringify(s3Objects || {message: 'No objects found in s3 bucket'})

    };
    return response;
};
