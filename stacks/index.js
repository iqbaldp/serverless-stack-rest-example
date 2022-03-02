import TodoStack from "./TodoStack";

export default function main(app) {
  app.setDefaultFunctionProps({
    runtime: "nodejs14.x"
  });

  new TodoStack(app, "todo-stack");
}
