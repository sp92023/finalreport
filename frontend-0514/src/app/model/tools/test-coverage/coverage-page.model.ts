export class CoveragePageModel {
  density: string;
  choose: boolean;

  constructor(density: string) {
    this.density = density;
    this.choose = false;
  }
}
