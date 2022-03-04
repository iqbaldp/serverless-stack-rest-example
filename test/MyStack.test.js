import { Template } from "aws-cdk-lib/assertions";
import * as sst from "@serverless-stack/resources";
import TodoStack from "../stacks/TodoStack";

test("ToDo Stack", () => {
  const app = new sst.App();
  
  const stack = new TodoStack(app, "todo-stack");
  
  const template = Template.fromStack(stack);
  template.resourceCountIs("AWS::Lambda::Function", 1);
});
