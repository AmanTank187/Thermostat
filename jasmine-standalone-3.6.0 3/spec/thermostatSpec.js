'use strict';

describe('thermostat', function(){
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat;
  });

  it('It has a starting temp of 20', function(){
    expect(thermostat._temperature).toEqual(20); 
  });
});
