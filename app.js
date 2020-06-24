//jshints esversion:6
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitDB', {useNewUrlParser: true, useUnifiedTopology: true});

//create fruit basic Schema
const fruitSchema = new mongoose.Schema(
  {
    name : {
      type: String,
      required: true
    },
    rating : {
      type : Number,
      min : 1,
      max :10
    },
    review : String
  }
);

const Fruit = mongoose.model("Fruit", fruitSchema);
var apple = new Fruit(
   {
    name : "Apple",
    rating : 7,
    review : "Good"
  });

var orange = new Fruit(
  {
    name : "Orange",
    rating : 7,
    review : "Satisfied"
  }
);

var banana = new Fruit(
   {
     name : "Banana",
     rating : 9,
     review : "Very Good"
    }
 );

var grapes = new Fruit(
  {
    name : "Grapes",
    rating : 8,
    review : "Good"
  }
);

var pinapple = new Fruit({
  name : "pinapple",
  rating : 9,
  review : "Good Delicies"
});





var mango = new Fruit({
  name : "mango",
  rating : 6,
  review : "Sweet"
});

//mango.save();

/*
Fruit.insertMany([apple, orange, banana, grapes],function(error, docs){
    if(error){
      console.log(error);
    }else{
      console.log("Inserted Succesfully");
    }
  });
*/

const personSchema = new mongoose.Schema(
  {
      name: String,
      age: Number,
      favFruit: fruitSchema
  }
);

const Person = mongoose.model("Person", personSchema);

var person1 = new Person(
  {
  name : "Jhon",
  age : 37,
  favFruit: mango
});


//person1.save();

Person.updateOne({name: "Jhon"}, { favFruit: mango} ,function(err){
  if(err){
    console.log(err);
  }else{
    console.log("Updated Succesfully");
  }
});



// delete record
/*

Fruit.deleteOne({name: "Apple"},function(err){
  if(err){
    console.log(err);
  }else{
    console.log("Deleted Successfully");
  }
});
*/

/*
Fruit.deleteMany({rating: {$gte: 8}},function(err){
  if(err){
    console.log(err);
  }else{
    console.log("Deleted Successfully");
  }
});
// read the datas from the collections
*/
Fruit.find(function(err,docs){
  if(err){
    console.log(err);
  }else{

    console.log(docs);
  }
});



/*
Fruit.updateMany({rating: {$gte : 8}}, {review: "Exillent"}, function(err){
  if(err){
    console.log(err);
  }else{
    console.log("Update Successfully")
  }
});
*/

// read the datas from the collections
/*
Fruit.find(function(err,docs){
  if(err){
    console.log(err);
  }else{
    // terminate the connection
    mongoose.connection.close();
        console.log(docs);
  }
});
*/
