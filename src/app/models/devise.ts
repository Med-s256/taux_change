export class Devise {
  codes!: String;
  rate!: Number;

  constructor(codes: String, rate:Number) {
    this.codes = codes;
    this.rate = rate;
  }
}

// export interface allElements {
//   code: string;
//   alphaCode: string;
//   numericCode: string;
//   name: string;
//   rate: Number;
//   inverseRate: Number;
// }
