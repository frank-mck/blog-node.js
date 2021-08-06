const express = require('express')
const articleRouter = require('./routes/article')
const mongoose = require('mongoose')
const app = express();

mongoose.connect('mongodb://localhost/blog', {
  useNewUrlParser: true, useUnifiedTopology: true 
})

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

app.get('/', (req, res) => {
  const articles = [{
    title: 'Test Article',
    createdAt: new Date(),
    description: 'Test description'
  }]
  res.render('articles/index', { articles: articles })
})



app.listen(5000)