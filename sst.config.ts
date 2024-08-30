/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "sst-3-rpc-issue",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    const testFunction = new sst.aws.Function("TestFunction", {
      handler: "index.handler",
      url: true,
    });
    return {
      url: testFunction.url,
    };
  },
});
