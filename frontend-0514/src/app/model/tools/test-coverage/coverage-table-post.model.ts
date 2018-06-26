export class CoverageTablePostModel {
  api: string;
  density: string;

  constructor(api: string, density: string) {
    this.density = density;
    this.api = api;
  }
}
