export interface RootController {
  run(request: any, response: any): Promise<void>;
}
