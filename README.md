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

In the server.js file, require the following at the top, then connect to the database.
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

