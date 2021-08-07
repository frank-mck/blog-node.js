# blog-node.js

This is a short exercise I have decided to do in preparation for the final project at Makers Academy.

I'll be using a tutorial created by Web Dev Simplified, to learn how to build a full stack web application using Node.js, Express and MongoDB.

-------------------------------------------------------------------------------------

## Setting up Node.js with dependencies

```
npm init -y

npm i express mongoose ejs
```

To automatically refresh and reload code in the browser
```
npm i --save-dev nodemon
```
Then in the package.json file under scripts, add `"devStart": "nodemon server.js"`

-------------------------------------------------------------------------------------

## Creating the server and routes

Create the `server.js file`, then require `express`, and the view engine, `ejs`.

```
const express = require('express')
const articleRouter = require('./routes/article')
const app = express();

app.set('view engine', 'ejs')
```

We can then create an index.ejs file in the views folder to render the index page.

```
app.get('/', (req, res) => {
  res.render('index');
}
```

## Connecting to mongoose

In the server.js file, require the following at the top, then connect to the database server `localhost` and name the database `blog`.
```
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/blog', {
  useNewUrlParser: true, useUnifiedTopology: true 
})

```
### Creating a Schema

Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.

If you want to add additional keys later, use the Schema#add method.

Creating a model

```
const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  markdown: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})
```

To use our schema definition, we need to convert our articleSchema into a Model we can work with. To do so, we pass it into mongoose.model(modelName, articleSchema):

`module.exports = mongoose.model('Article', articleSchema)`

## To access all parameters

To access all of the parameters from our article form, add this in the server.js file
```
app.use(express.urlencoded({ extended: false }))
```
This also needs to come first before using the articles router.

It's also best practice to put the article router at the bottom so that it comes after everyhing else.

## Sorting articles

Use the sort method to sort our createdAt field in descending order
`const articles = await Article.find().sort({ createdAt: 'desc' })`

## adding aditional libraries to our model

- marked (low-level compiler for parsing markdown without caching or blocking for long periods of time)
- slugify(slugify is able to turn a long string of text in the url into a slug)

In the terminal type `npm i marked slugify`

Then in our model require both libraries.
```
const marked = require('marked')
const slugify = require('slugify')
```
