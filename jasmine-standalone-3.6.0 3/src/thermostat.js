'use strict';

class Thermostat{
  constructor(){
    this._temperature = 20;
    this._minTemperature = 10;
    this.maxTemperature = 25
    this.powerSaving = true
  }

  increaseTemperature() {
    if (this.powerSaving == true) {
      if (this._temperature == this.maxTemperature) {
        throw new Error('Power Saving On: Maximum Temperature of 25 Reached');
      } else {
        this._temperature += 1;
      }
    } else if (this.powerSaving == false)
      if (this._temperature == this.maxTemperature) {
        throw new Error('Maximum Temperature of 32 Reached')
      } else {
      this._temperature += 1;
      }
  }

  decreaseTemperature() {

  if(this._temperature == this._minTemperature){
    throw new Error('Cannot decrease below 10');
  } else {
    this._temperature -= 1;
    }
  }
 
  powerSavingMode(state) {
    if (state == 'on'){
      this.powerSaving = true
      this.maxTemperature = 25
    } else if (state == 'off') {
      this.powerSaving = false
      this.maxTemperature = 32
    }
  }
}
