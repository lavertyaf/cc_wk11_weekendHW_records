const Store = function (options) {
  this.name = options.name;
  this.funds = options.funds;
  this.collection = options.collection;
};




module.exports = Store;




//
// should have a name
// should start with no funds
// should be able to add funds
// should start with an empty collection of records
// should be able to add a record to its stock
// should be able to sell a record if it has the record
