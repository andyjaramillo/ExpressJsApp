#! /usr/bin/env node
const { MongoClient, ServerApiVersion } = require('mongodb');
var dotenv = require('dotenv');

  // Get arguments passed on command line
  dotenv.config();
  const Meat = require("./models/meat");
  const Vegetable = require("./models/vegetable");
  const Seasoning = require("./models/seasoning");
  
  const meats = [];
  const vegetables = [];
  const seasonings = [];
  
  const mongoose = require("mongoose");
  mongoose.set("strictQuery", false);


  const mongoDB = process.env.MONGOLAB_URI;
  main().catch((err) => console.log(err));
  
  async function main() {
    console.log("Debug: About to connect");
    await mongoose.connect(mongoDB);
    console.log("Debug: Should be connected?");
    await createMeats();
    await createVegetables();
    await createSeasonings();
    console.log("Debug: Closing mongoose");
    mongoose.connection.close();
  }
  
  // We pass the index to the ...Create functions so that, for example,
  // genre[0] will always be the Fantasy genre, regardless of the order
  // in which the elements of promise.all's argument complete.

  async function meatCreate(name, summary, price, index) {
    const meat = new Meat({name: name, summary: summary, price: price})
    await meat.save();
    meats[index] = meat;
    console.log("added" + name);
  }

  async function vegetableCreate(name, summary, price, listed, expiration_date, index) {
    const vegetable = new Vegetable({name: name, summary: summary, price: price, listed: listed, expiration_date: expiration_date})
    await vegetable.save();
    vegetables[index] = vegetable;
    console.log("added" + name);
  }

  async function seasoningCreate(name, summary, price, size, listed, index) {
    const seasoning = new Seasoning({name: name, summary: summary, price: price, size: size, listed: listed})
    await seasoning.save();
    seasonings[index] = seasoning;
    console.log("added" + name);
  }
  

  async function createMeats() {
    console.log("adding meats");
    await Promise.all([
        meatCreate("chorizo", "The best mexican sausage", 5, 0),
        meatCreate("steak", "The most expensive meat", 15, 1),
    ])
  }

  async function createVegetables() {
    console.log("adding vegetables");
    await Promise.all([
        vegetableCreate("bok choy", "best vegetable by far", 3, 0),
        vegetableCreate("spinach", "Good priced spinach", 2, 1),
    ])
  }
  

  async function createSeasonings() {
    console.log("adding seasonings");
    await Promise.all([
        seasoningCreate("paprika", "the best type is hungarian", 1, "small", 0),
        seasoningCreate("chili powder", "good on chinese dishes", 1, "medium", 1),
    ])
  }
