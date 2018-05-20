const Store = function (options) {
  this.name = options.name;
  this.funds = options.funds;
  this.stock = options.stock;
};

Store.prototype.addFunds = function (value){
  this.funds += value;
};


Store.prototype.countRecords = function (){
  return this.stock.length;
};


Store.prototype.addARecord = function (record){
  this.stock.push (record);
};

// Store.prototype.removeFromStock = function (title) {
//   const newCollection = [];
//
//   for (const record of this.collection) {
//     if (record.title !== title) {
//       newCollection.push(record);
//     }
//   }
//   this.collection = newCollection;
// };

Store.prototype.removeFromStock = function (record) {
  if (!this.hasRecord(record)) return;
  const index = this.stock.indexOf(record);
  this.stock.splice(index, 1);
};

Store.prototype.sell = function (record) {
  if (!this.hasRecord(record)) return;
  this.addFunds(record.price);
  this.removeFromStock(record);
};

Store.prototype.hasRecord = function (record) {
  return this.stock.includes(record);
};




module.exports = Store;




//
// should have a name
// should start with no funds
// should be able to add funds
// should start with an empty collection of records
// should be able to add a record to its stock
// should be able to sell a record if it has the record
