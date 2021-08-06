# blog-node.js

This is a short exercise I have decided to do in preparation for the final project at Makers Academy.

I'll be using a tutorial created by Web Dev Simplified, to learn how to build a full stack web application using Node.js, Express and MongoDB.

## Setting up Node.js with dependencies

```
npm init -y

npm i express mongoose ejs
```

Automatically refresh and reload code in the browser 
```
npm i --save-dev nodemon
```
In the package.json file under scripts, add `"devStart": "nodemon server.js"`

## Creating the server and routes

Create the `server.js file`, then require `express` and the view engine, `ejs`.

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