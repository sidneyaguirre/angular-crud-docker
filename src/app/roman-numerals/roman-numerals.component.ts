import { Component, OnInit } from '@angular/core';
import { RomanNumeralsService } from '../services/roman-numerals.service'
@Component({
  selector: 'app-roman-numerals',
  templateUrl: './roman-numerals.component.html',
  styleUrls: ['./roman-numerals.component.css']
})
export class RomanNumeralsComponent implements OnInit {
  public romanNumber: String;

  constructor(private rn: RomanNumeralsService) { }

  toRoman(arabicNumber) {
    this.romanNumber = this.rn.covertToRoman(arabicNumber)
  }

  ngOnInit() {
  }

}
