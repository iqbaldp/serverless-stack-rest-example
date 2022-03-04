import * as sst from "@serverless-stack/resources";

export default class TodoStack extends sst.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    const api = new sst.Api(this, "Api", {
      routes: {
        "GET /": "src/todo/lambda.handler",
      },
    });

    this.addOutputs({
      "ApiEndpoint": api.url,
    });
  }
}
