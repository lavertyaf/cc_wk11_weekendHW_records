const Collector = function (options) {
  this.name = options.name;
  this.wallet = options.wallet;
  this.collection = options.collection;
};

Collector.prototype.addMoney = function (value) {
  this.wallet += value;
};

Collector.prototype.countRecords = function () {
  return this.collection.length;
};

Collector.prototype.addARecord = function (record) {
  this.collection.push(record);
};

Collector.prototype.findRecordByTitle = function (title) {
  return this.collection.find((record) => {
    return record.title === title;
  })
};

Collector.prototype.removeARecord = function (record) {
  this.collection.pop(record);
};

Collector.prototype.removeBytitle = function (title) {
  const newCollection = [];

  for (const record of this.collection) {
    if (record.title !== title) {
      newCollection.push(record);
    }
  }
  this.collection = newCollection;
};

Collector.prototype.buyARecord = function (record) {
  if (record.price <= this.wallet) {
  this.collection.push(record);
  };
};






// Cinema.prototype.filmByTitle = function (title) {
//   return this.films.find((film) => {
//     return film.title === title;
//   });
// };



module.exports = Collector;


// A record collector:
//
// should start with no funds

// should be able to add funds
// should start with an empty collection of records
// should be able to add a record to it's collection
// should be able to find a record by title
// should be able to remove a record from it's collection
// should be able to buy a record if it has enough funds
// should be able to sell a record if it has the record
