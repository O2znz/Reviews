var mongoose = require('mongoose');
const faker = require('faker');
const dateGenerator = require('random-date-generator');
const moment = require('moment');

mongoose.connect('mongodb://localhost/reviews', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to db')
});

var Schema = mongoose.Schema;

var reviewSchema = new Schema({
  housingId: Number,
  reviewId: Number,
  name: String,
  date: String,
  displayDate: String,
  comment: String,
  imgURL:String,
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
}

var save = () => {
  for (var i = 0; i < 10; i++) {
    const filter = {reviewId: i};
    const update = {
      housingId: 12345,
      reviewId: i,
      name: faker.fake("{{name.firstName}}"),
      date: 'July 2015',
      displayDate: 'June 2013',
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
      })
  };
};

save();