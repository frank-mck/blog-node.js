const express = require('express')
const articleRouter = require('./routes/article')
const mongoose = require('mongoose')
const Article = require('./models/article')
const app = express();

mongoose.connect('mongodb://localhost/blog', {
  useNewUrlParser: true, useUnifiedTopology: true 
})

app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'ejs')

app.get('/', async (req, res) => {
  const articles = await Article.find()
  res.render('articles/index', { articles: articles })
})

app.use('/articles', articleRouter)


app.listen(5000)