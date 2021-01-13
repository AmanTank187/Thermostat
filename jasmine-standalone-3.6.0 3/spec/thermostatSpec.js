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
      thermostat.increaseTemperature()
      expect(thermostat._temperature).toEqual(25);
    });
  });

  describe('Decrease function', function() {
    it('will be able to Decrease the temperature', function() {
      thermostat.decreaseTemperature()
      expect(thermostat._temperature).toEqual(15);
    });

    it('It cannot go below 10', function(){
      thermostat.decreaseTemperature()
      thermostat.decreaseTemperature()
      expect(function(){thermostat.decreaseTemperature();}).toThrowError('Cannot decrease below 10');
      expect(thermostat._temperature).toEqual(10);
    });
  });
});
