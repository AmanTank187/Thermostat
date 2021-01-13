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
      expect(thermostat._temperature).toEqual(21);
    });
  });

  describe('Decrease function', function() {
    it('will be able to Decrease the temperature', function() {
      for (var i = 0; i < 5; i++) {
        thermostat.decreaseTemperature();
        }
      
      expect(thermostat._temperature).toEqual(15);
    });

    it('It cannot go below 10', function(){
      for (var i = 0; i < 10; i++) {
        thermostat.decreaseTemperature();
        }
      expect(function(){thermostat.decreaseTemperature();}).toThrowError('Cannot decrease below 10');
      expect(thermostat._temperature).toEqual(10);
    });
  });

  describe('Power Saving function', function() {
    it('has a maximum temp of 25 when on', function() {
      for (var i = 0; i < 5; i++) {
      thermostat.increaseTemperature();
      }
      expect(function(){thermostat.increaseTemperature();}).toThrowError('Power Saving On: Maximum Temperature of 25 Reached');
      expect(thermostat._temperature).toEqual(25);
    });

    it('has a maximum temperature of 32 degrees when off', function() {
      thermostat.powerSavingMode('off')
      for (var i = 0; i < 12; i++) {
        thermostat.increaseTemperature();
        }
      expect(function(){thermostat.increaseTemperature();}).toThrowError('Maximum Temperature of 32 Reached');
      expect(thermostat._temperature).toEqual(32);
    });
  });
});
