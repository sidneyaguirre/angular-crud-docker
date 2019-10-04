import { TestBed } from '@angular/core/testing';
import { RomanNumeralsService } from './roman-numerals.service';

describe('RomanNumeralsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    expect(service).toBeTruthy();
  });

  it('should return I if number is 1', () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    expect(service.covertToRoman(1)).toEqual('I')
  });

  it('should return III if number is 3', () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    expect(service.covertToRoman(3)).toEqual('III')
  });

  it('should return IV if number is 4', () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    expect(service.covertToRoman(4)).toEqual('IV')
  });

  it('should return V if number is 5', () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    expect(service.covertToRoman(5)).toEqual('V')
  });

  it('should return IX if number is 9', () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    expect(service.covertToRoman(9)).toEqual('IX')
  });

  it('should return L if number is 50', () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    expect(service.covertToRoman(50)).toEqual('L')
  });

  it('should return XCV if number is 95', () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    expect(service.covertToRoman(95)).toEqual('XCV')
  });

  it('should return C if number is 100', () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    expect(service.covertToRoman(100)).toEqual('C')
  });

  it('should return D if number is 500', () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    expect(service.covertToRoman(500)).toEqual('D')
  });

  it('should return M if number is 1000', () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    expect(service.covertToRoman(1000)).toEqual('M')
  });

});
