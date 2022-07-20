require('dotenv').config();

const mongoose=require('mongoose');

//connecting to database
mongoose.connect(process.env.MONGO_URI);

//assign mongoose Schema to a variable
const Schema = mongoose.Schema;

//create new schema called personSchema
const personSchema = new Schema({
name: {type: String, required: true},
age: Number,
favoriteFoods: [String]
});

//create person model from the schema
const Person = mongoose.model("Person", personSchema);


const createAndSavePerson = (done) => {
  //creating document
  var kamilSynowiec = new Person({name: "Kamil", age: 21, favoriteFoods: ["Salmon", "Beans", "Yoghurt"]});
  kamilSynowiec.save(function(error, data){
    if(error){
      return console.error(error);
    }
    else
    {
      done(null, data);
    }
  });
};

//array of people
var arrayOfPeople = [
  {name: "Ann", age: 18, favoriteFoods: ["pomidor", "mleko", "sok"] }, 
  {name: "Piotr", age: 31, favoriteFoods: ["agawa", "zupy", "kość"]}, 
  {name: "Basia", age: 22, favoriteFoods: ["Barszcz", "jajo", "chleb"]}
];


const createManyPeople = (arrayOfPeople, done) => {
  People.create(arrayOfPeople, function(err, people){
    if(error){
      return console.error(err);
    }
    else
    {
      done(null, people);
    }
  });
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
