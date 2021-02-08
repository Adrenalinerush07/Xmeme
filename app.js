const express = require("express");
const Post = require('./models/meme')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(methodOverride('_method'))

mongoose.connect('mongodb://localhost:27017/Xmeme', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
})

app.get("/", function(req, res){
   res.render("post");
});


app.post("/memes", async(req, res) => {  
  try{
    const name = req.body.name;
    const url = req.body.url;
    const caption = req.body.caption;

    const savePost = new Post({
      name,
      url,
      caption
    })
    const saved = await savePost.save()
    res.status(201).send(saved)
  }
  catch{
    res.status(400).send({error: 'Unable to post'})
  }

});

app.post("/add", async(req, res) => {  
  try{
    const name = req.body.name;
    const url = req.body.url;
    const caption = req.body.caption;

    const savePost = new Post({
      name,
      url,
      caption
    })
    const saved = await savePost.save()
    res.status(201).redirect("show")
  }
  catch{
    res.status(400).send({error: 'Unable to post'})
  }

});

app.get('/show/:id', async (req, res) => {
  console.log(req.params);
  console.log('kartik');
  const memes = await Post.findOne({ _id: req.params.id })
  console.log(memes)
  if (memes == null) res.redirect('/')
  res.render('single', { memes: memes })
})


app.get("/memes", async (req, res) => {
  const memes = await Post.find().sort({createdAt: 'desc'})
  res.status(200).send(memes)
})

app.get("/show", async (req, res) => {
  const memes = await Post.find().sort({createdAt: 'desc'})
  res.status(200).render('results', {memes, error: undefined})
})


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server is up mate ' + port)
});