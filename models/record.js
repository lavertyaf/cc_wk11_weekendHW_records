const Record = function (options) {
  this.title = options.title;
  this.artist = options.artist;
  this.genre = options.genre;
  this.price = options.price;
};

//options would be
//{
  //"title" : "Thriller",
  //"artist": "MJ",
  //"cover": "http://",
  // ...
//}

module.exports = Record;
