const express = require('express')
const articleRouter = require('./routes/article')
const mongoose = require('mongoose')
const Article = require('./models/article')
const app = express();
const methodOverride = require('method-override')

mongoose.connect('mongodb://localhost/blog', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
})

app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))
app.set('view engine', 'ejs')

app.get('/', async (req, res) => {
  const articles = await Article.find().sort({ createdAt: 'desc' })
  res.render('articles/index', { articles: articles })
})

app.use('/articles', articleRouter);


app.listen(5000)