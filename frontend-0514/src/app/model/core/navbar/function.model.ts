export class FunctionModel {
  description: string;
  router: string;
  functions: FunctionModel[];

  constructor(description: string, router: string, functions: FunctionModel[]) {
    this.description = description;
    this.router = router;
    this.functions = functions;
  }
}
