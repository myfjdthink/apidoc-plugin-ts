import {expect} from 'chai';
import 'mocha';
import {parseElements} from '../src/';


/*tslint:disable*/
const fixtureJson = require('./fixture.json');
const outputJson = require('./out/api_data.json');
/*tslint:enable*/

describe('should compile', () => {

  it('should compile api data correctly', () => {
    expect(outputJson).to.deep.equal(fixtureJson);
  });

  it('parse directly', () => {
    const elements = [];
    parseElements(elements, {
      content: '(./test/interfaces.ts) { ArrayType }',
      name: 'apiinterface',
    }, {}, '');
    expect(elements).lengthOf(3);
  });

});
