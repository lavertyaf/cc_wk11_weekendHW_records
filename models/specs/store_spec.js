const Record = require('../record.js');
const Store = require('../store.js');
const assert = require('assert');

describe('Store', function () {
  let store;

  beforeEach(function () {
    store = new Store({
      name: 'Mudd',
      funds: 0,
      stock: []
    });

    record1 = new Record({
      title: 'Midnight Organ Fight',
      artist: 'Frightened Rabbit',
      genre: 'alt-folk',
      price: 50
    });

    record2 = new Record({
      title: 'Heartbreaker',
      artist: 'Ryan Adams',
      genre: 'alt-folk',
      price: 25
    });

    record3 = new Record({
      title: 'New Gods',
      artist: 'Withered Hand',
      genre: 'folk',
      price: 30
    });
  });


  it('should have a name', function () {
    assert.strictEqual(store.name, 'Mudd');
  });

  it('should have zero funds', function () {
    assert.strictEqual(store.funds, 0);
  });

  it('should be able to add funds', function () {
    store.addFunds(50);
    assert.strictEqual(store.funds, 50);
  });

  it('should have empty collection', function () {
    assert.strictEqual(store.countRecords(), 0);
  });

  it('should be able to add to collection', function () {
    store.addARecord(record1);
    assert.strictEqual(store.countRecords(), 1);
    assert.deepStrictEqual(store.stock, [record1]);
  });

  it('should be able to remove from collection', function () {
    store.addARecord(record1);
    store.addARecord(record2);
    store.removeFromStock(record1);
    assert.strictEqual(store.countRecords(), 1);
    assert.deepStrictEqual(store.stock, [record2]);
  });


  it('should be able to sell if in stock', function () {
    store.addARecord(record1);
    store.addARecord(record2);
    store.addARecord(record3);
    store.sell(record2);
    assert.strictEqual(store.countRecords(), 2);
    assert.deepStrictEqual(store.stock, [record1, record3]);
    assert.strictEqual(store.funds, 25);
  });
});
