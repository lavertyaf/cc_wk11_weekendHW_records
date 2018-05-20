const Record = require('../record.js');
const Collector = require('../collector.js');
const assert = require('assert');

describe('Collector', function () {
  let collector;
  let record1;
  let record2;
  let record3;

  beforeEach(function () {
    collector = new Collector({
      name: 'Steven Herd',
      wallet: 0,
      collection: [],

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

  it('should start with no funds', function () {
    assert.strictEqual(collector.wallet, 0);
  });

  it('should be able to add funds', function () {
    collector.addMoney(50);
    assert.strictEqual(collector.wallet, 50);
  });

  it('should be able to take away funds', function () {
    collector.addMoney(50);
    collector.takeAwayMoney(25);
    assert.strictEqual(collector.wallet, 25);
  });

  it('should start with no records', function () {
    assert.strictEqual(collector.countRecords(), 0);
  });

  it('should be able to add to collection', function () {
    collector.addARecord(record1);
    collector.addARecord(record2);
    assert.strictEqual(collector.countRecords(), 2);
  });

  it('should be able to find record by title', function () {
    collector.addARecord(record1);
    collector.addARecord(record2);
    assert.strictEqual(collector.findRecordByTitle('Midnight Organ Fight'), record1);
  });

  it('should be able to remove record', function () {
    collector.addARecord(record1);
    collector.addARecord(record2);
    collector.addARecord(record3);
    collector.removeARecord(record2);
    assert.strictEqual(collector.countRecords(), 2);
  });

  it('should be able to remove particlar record', function () {
    collector.addARecord(record1);
    collector.addARecord(record2);
    collector.addARecord(record3);
    collector.removeBytitle('Heartbreaker');
    assert.deepStrictEqual(collector.collection, [record1, record3]);
  });

  it('should be able to buy record if enough funds', function () {
    collector.addMoney(60);
    collector.buyARecord(record1);
    assert.strictEqual(collector.countRecords(), 1);
    assert.strictEqual(collector.wallet, 10);
  });

  it('should not be able to buy record if not enough funds', function () {
    collector.addMoney(5);
    collector.buyARecord(record1);
    assert.strictEqual(collector.countRecords(), 0);
  });

  it('should be able to sell record if it is in collection', function () {
    collector.addARecord(record1);
    collector.addARecord(record2);
    collector.addMoney(100);
    collector.sell('Heartbreaker');
    // assert.strictEqual(collector.countRecords(), 1);
    assert.deepStrictEqual(collector.collection, [record1]);
    assert.strictEqual(collector.wallet, 125);
  });

  it('should not be able to sell record if it is not in collection', function () {
    collector.addARecord(record1);
    collector.addARecord(record2);
    collector.sell('New Gods');
    // assert.strictEqual(collector.countRecords(), 2);
    assert.deepStrictEqual(collector.collection, [record1, record2]);
  });
});
