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
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/Xmeme', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
})


// mongoose.connect('mongodb+srv://KartikJaiswal:l13yFSWpb2YU1qR5@blog.smyeg.mongodb.net/Xmemev2?retryWrites=true&w=majority', {
//   useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
// })


// Route for home page (posting a new meme)
app.get("/", function(req, res){
   res.render("post");
});

// Route for redirecting to edit page of a particular meme
app.get('/update/:id', async (req, res) => {
  const memes = await Post.findById(req.params.id)
  res.status(200).render('edit', { memes })
})

// Patch method for updating a meme
// app.patch("updated/:id", function (res, res, next) {
//   var id=req.params.id;
//   var url = req.body.url;
//   var caption = req.body.caption;
//   console.log("kartik")
//   Post.findById(id, function (err, data) {
//     console.log(data)
//     data.url=url;
//     data.caption=caption;
//     data.save(function (err) {
//       if(err){
//         throw err
//       }
//       res.send("Done")      
//     })
//   })
// })

app.patch('/updated/:id', async (req, res) => {
  try{
    const memes = await Post.findById(req.params.id)
    if(memes === null){
      res.status(404).send("error",{error: 'Post not found!'})
      return
    }
    memes.caption = req.body.caption;
    memes.url = req.body.url;

    await memes.save();
    res.status(201).redirect('/show'); 
  }
  catch (err){
    res.status(400).render("error",{error: err})
  }
})

// Route for posting a meme
app.post("/add", async(req, res) => {  
  try{
    const name = req.body.name;
    const url = req.body.url;
    const caption = req.body.caption;

    const check = await Post.findOne({url : url})
    if( check !== null){
      res.render('error',{error:'Post already present!'})
      return;
    }

    const savePost = new Post({
      name,
      url,
      caption
    })
    await savePost.save()
    res.status(201).redirect("/show")
  }
  catch (err){
    res.status(400).render("error",{error: err})
  }

});

// ## Rendering meme

// Route for showing all memes
app.get("/show", async (req, res) => {
  const memes = await Post.find().sort({createdAt: 'desc'}).limit(100)
  res.status(200).render('results', {memes, error: undefined})
})

// Route for showing individual memes
app.get('/show/:id', async (req, res) => {
  const memes = await Post.findOne({ _id: req.params.id })
  if(memes === null){
    res.status(404).send("error",{error: 'Post not found!'});
    return;
  }
  res.status(200).render('single', { memes: memes })
})


// ## Routes set for checking

// Getting all posted memes in chronological order
app.get("/memes", async (req, res) => {
  const memes = await Post.find().sort({createdAt: 'desc'}).limit(100)
  res.status(200).send(memes)
})

app.get('/memes/:id', async (req, res) => {
  const memes = await Post.findOne({ _id: req.params.id })
  if(memes === null){
    res.status(404);
    return;
  }
  res.status(200).send(memes);
})

// Posting a meme
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
    res.status(201).send({id: saved.id})
  }
  catch(err){
    res.status(400).render("error",{error: 'Unable to post'})
  }

});


// updating a meme
app.patch('/memes/:id', async (req, res) => {
  try{
    const memes = await Post.findById(req.params.id)
    if(memes === null){
      res.status(404)
      return;
    }
    memes.caption = req.body.caption;
    memes.url = req.body.url;

    await memes.save();
    res.status(201)
    return;
  }
  catch (err){
    res.status(400).render("error",{error: 'Unable to post'})
  }
})

// Server listening
const port = process.env.PORT || 8081;
app.listen(port, () => {
    console.log('Server is up mate ' + port)
});