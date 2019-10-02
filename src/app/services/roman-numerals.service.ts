import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RomanNumeralsService {

  constructor() { }

  arabicToRoman(number){
    const roman = ''; 
    for (let i = 1; i <= number; i++) {
      roman.concat('I');  
    }
    console.log(roman);
    return roman;
  }

}
