var mongoose = require('mongoose');
const faker = require('faker');

mongoose.connect('mongodb://localhost/reviews', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to db');
});

var Schema = mongoose.Schema;

var reviewSchema = new Schema({
  housingId: Number,
  reviewId: Number,
  name: String,
  date: Date,
  comment: String,
  imgURL: String,
  ratings: {
    communication: Number,
    accuracy: Number,
    location: Number,
    checkIn: Number,
    cleanliness: Number,
    value: Number
  }
});

var Review = mongoose.model('Reviews', reviewSchema);

var rating = () => {
  var ratings = [1, 2, 3, 4, 5];

  return ratings[Math.floor(Math.random() * ratings.length)];
};

var date = () => {
  return faker.date.between('2008-09-01', '2019-10-30');
};

var save = () => {
  for (var i = 0; i < 100; i++) {
    const filter = {reviewId: i};
    const update = {
      housingId: 12345,
      reviewId: i,
      name: faker.fake('{{name.firstName}}'),
      date: date(),
      comment: faker.lorem.paragraph(),
      imgURL: faker.image.avatar(),
      ratings: {
        communication: rating(),
        accuracy: rating(),
        location: rating(),
        checkIn: rating(),
        cleanliness: rating(),
        value: rating()
      }
    };

    Review.findOneAndUpdate(filter, update, {new: true, upsert: true}, function(err, doc) {
      if (err) {
        console.log(err);
      } else {
        console.log('Data saved!');
      }
    });
  }
};

save();

var getAll = (callback) => {
  Review.find().sort({date: -1}).exec(callback);
};


module.exports = {
  getAll: getAll
};