const cdk = require('aws-cdk-lib');
const s3 = require('aws-cdk-lib/aws-s3');
const lambda = require('aws-cdk-lib/aws-lambda');
const dynamodb = require('aws-cdk-lib/aws-dynamodb');

class CdkProject8960392Stack extends cdk.Stack {
  /**
   *
   * @param {Construct} scope
   * @param {string} id
   * @param {StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    const myBucket = new s3.Bucket(this, 'Bucket8960392', {
      versioned: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    const myLambda = new lambda.Function(this, 'Lambda8960392', {
      runtime: lambda.Runtime.NODEJS_20_X,
      handler: 'index.handler',
      code: lambda.Code.fromInline(`
        exports.handler = async function(event) {
          console.log('Lambda invoked!');
          return { statusCode: 200, body: 'Hello, World!' };
        }
      `),
      functionName: 'Lambda8960392',
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      environment: {
        BUCKET_NAME: myBucket.bucketName,
      }
    });

    const myTable = new dynamodb.Table(this, 'Table8960392', {
      partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING },
      tableName: 'Table8960392',
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

  }

}



module.exports = { CdkProject8960392Stack }
