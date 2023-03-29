const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes/routes");
const ConnectDb = require("./db/connect");
const session = require("express-session");
const sessions = require("cookie-parser");
const passport = require("passport");
const faker = require("@faker-js/faker");
const UserSchemaPassport = require("./models/passportUser");
const UserMail = require("./models/googleUserSchema");
const productSchema = require("./models/productSchema");
require("dotenv").config();

app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: true,
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
    secret: "nonesense",
  })
);

app.use(sessions());

app.use(passport.initialize());
app.use(passport.session());

/* passport.use(new passportLocal(UserSchemaPassport.authenticate()));

passport.serializeUser(UserSchemaPassport.serializeUser());
passport.deserializeUser(UserSchemaPassport.deserializeUser()); */

app.use(express.json());

app.use("/api/v1", router);

/* app.get("/Test", async (req, res) => {
  if (!req.session.user_Id) {
    return res.redirect("http://loaclhost:5173/auth");
  }
  res.render("Hello");
}); */

const product = {
  name: faker.faker.commerce.productName(),
  photo: [
    faker.faker.image.imageUrl(),
    faker.faker.image.imageUrl(),
    faker.faker.image.imageUrl(),
  ],
  id: "",
  price: faker.faker.commerce.price(),
  category: faker.faker.commerce.department(),
  description: faker.faker.commerce.productDescription(),
  Quantity: "10",
};
/* 
console.log(product); */
const options = {
  method: "GET",
  url: "https://shoes-collections.p.rapidapi.com/shoes",
  headers: {
    "X-RapidAPI-Key": "8d6796a13fmsh5b6b09d9f9ca34ep1262acjsnbbd1102f05aa",
    "X-RapidAPI-Host": "shoes-collections.p.rapidapi.com",
  },
};

fetch("https://shoes-collections.p.rapidapi.com/shoes", {
  headers: {
    "X-RapidAPI-Key": "8d6796a13fmsh5b6b09d9f9ca34ep1262acjsnbbd1102f05aa",
    "X-RapidAPI-Host": "shoes-collections.p.rapidapi.com",
  },
})
  .then((res) => res.json())
  .then((data) => {
    data.map(async (elem) => {
      await productSchema.create({
        name: elem.title,
        description: elem.description,
        price: elem.price,
        discountPercentage: elem.discountPercentage,
        rating: elem.rating,
        stock: Math.floor(Math.random() * 100),
        brand: elem.brand,
        category: elem.category,
        thumbnail: elem.image,
        images: elem.images,
      });
    });
  });

const Port = process.env.PORT || 5000;

const start = async () => {
  try {
    await ConnectDb(process.env.MONGO_URI);
    app.listen(Port, () => {
      console.log(`server is runing on port ${Port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
