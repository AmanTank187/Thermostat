'use strict';

describe('thermostat', function(){
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat;
  });

  it('It has a starting temp of 20', function(){
    expect(thermostat._temperature).toEqual(20); 
  });

  describe('Increase function', function() {
    it('will be able to increase the temperature', function() {
      thermostat.increaseTemperature(5)
      expect(thermostat._temperature).toEqual(25);
    });

  });

  
});
