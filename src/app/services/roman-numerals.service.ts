import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class RomanNumeralsService {
  constructor() {}

  convertToRoman(num) {
    var i;
    var romans = ["I", "V", "X", "L", "C", "D", "M"];
    var ints = [];
    var romanNumber = [];
    while (num) {
      ints.push(num % 10);
      num = Math.floor(num / 10);
    }
    for (i = 0; i < ints.length; i++) {
      units(ints[i]);
    }

    function units(n) {
      var numeral = "";
      numeral = romans[i * 2];
      switch (n) {
        case 1:
          romanNumber.push(numeral);
          break;
        case 2:
          romanNumber.push(numeral.concat(numeral));
          break;
        case 3:
          romanNumber.push(numeral.concat(numeral).concat(numeral));
          break;
        case 4:
          romanNumber.push(numeral.concat(romans[i * 2 + 1]));
          break;
        case 5:
          romanNumber.push(romans[i * 2 + 1]);
          break;
        case 6:
          romanNumber.push(romans[i * 2 + 1].concat(numeral));
          break;
        case 7:
          romanNumber.push(romans[i * 2 + 1].concat(numeral).concat(numeral));
          break;
        case 8:
          romanNumber.push(
            romans[i * 2 + 1]
              .concat(numeral)
              .concat(numeral)
              .concat(numeral)
          );
          break;
        case 9:
          romanNumber.push(romans[i * 2].concat(romans[i * 2 + 2]));
      }
    }
    console.log(
      romanNumber
        .reverse()
        .join("")
        .toString()
    );

    return romanNumber
      .reverse()
      .join("")
      .toString();
  }
}
