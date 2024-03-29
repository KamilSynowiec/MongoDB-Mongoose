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
  People.find({name: personName}, function(err, personFound){
    if(err){
      return console.log(err);
    }
    else
    {
      done(null, personFound);
    }
  });
};

const findOneByFood = (food, done) => {
  People.findOne({favoriteFoods: food}, function(err, personFound){
    if(err){
      return console.log(err);
    }
    else
    {
      done(null, personFound);
    }
  });
};

const findPersonById = (personId, done) => {
   Person.findById(personId, (err, personFound)=>{
     if(err) return console.log(err);
     done(null, personFound);
   })
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  // finding person using method .findById()
    Person.findById(personId, (error, personFound)=>{
    if(error) return console.log(error);
    done(null, personFound);
    
    //Array.push method to add hamburger to the list of favouriteFoods
    personFound.favoriteFoods.push(foodToAdd);
      
    //save the updated person
    personFound.save((error, updatedPerson)=>{
      if(error) return console.log(error);
      done(null, updatedPerson);
    });
    
    
  });
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  Person.findOneAndUpdate({name: personName}, {age: ageToSet}, {new: true}, (error, updatedDoc)=>{
    if(error) return console.log(error);
    done(null, updatedDoc);
  });
};

const removeById = (personId, done) => {
  Person.findByIdAndRemove(personId, (error, removedDoc)=>{
    if(error) return console.log(error);
    done(null, removedDoc);
  });
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";
  
  Person.remove({name: nameToRemove}, (error, response)=>{
    if(error) return console.log(error);
    done(null, response);
  });
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  Person.find({favoriteFoods: foodToSearch}).sort({name: 1}).limit(2).select({age: 0}).exec(function(error, people)=>{
       if(error) console.log(error);
       done(null, people);
  });
};

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
