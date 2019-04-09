import { expect } from 'chai';
import sinon = require('sinon')

describe('Airport features', function() { 
  it('should store plane inside airport once plane is landed', function () {
    expect(this.airport.hasPlane(this.plane)).equals(true)
  })
})