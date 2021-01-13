'use strict';

class Thermostat{
  constructor(){
    this._temperature = 20;
    this._minTemperature = 10;
  }

  increaseTemperature() {
    this._temperature += 5;
  }

  decreaseTemperature() {

  if(this._temperature == this._minTemperature){
    throw new Error('Cannot decrease below 10');
  } else {
    this._temperature -= 5;
    }
  }
}
