const mongoose = require('mongoose');
const express=require('express')

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });


const personSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: Number,
    favoriteFoods: [String]
  });

  const Person = mongoose.model('Person', personSchema);
  const person = new Person({
    name: 'John Doe',
    age: 30,
    favoriteFoods: ['Pizza', 'Burger']
  });

  person.save(function(err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
  const arrayOfPeople = [
    { name: 'John Doe', age: 30, favoriteFoods: ['Pizza', 'Burger'] },
    { name: 'Jane Doe', age: 25, favoriteFoods: ['Pasta', 'Pizza'] },
    { name: 'Alice', age: 30, favoriteFoods: ['Sushi', 'Pasta'] },
    { name: 'Bob', age: 22, favoriteFoods: ['Tacos', 'Ice Cream'] },
  ];

  Person.create(arrayOfPeople, function(err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
