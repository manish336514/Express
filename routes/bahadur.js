var express=require('express');
var app=express.Router();
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
//var moviess=require('./moviesmodel');
var schema=mongoose.Schema;
var movieSchema=new schema({
  Title:String,
  Year:String,
  Rated:String,
  Released:String,
  Runtime:String,
  Genre:String,
  Director:String,
  Writer:String,
  Actors:String,
  Plot:String,
  Language:String,
  Country:String,
  Awards:String,
  Poster:String,
  Metascore:String,
  imdbRating:String,
  imdbVotes:String,
  imdbID:String,
  Type:String,
  Response:String
});
var m=mongoose.model('hello',movieSchema);


var db='mongodb://localhost/test';
mongoose.connect(db);
/*
b.get('/moviedetails',function(req,res){
  res.send('my favrate movie is');
});*/

//creating moviedetails
app.post('/mpk',function(req,res){
var m1=new m(req.body);
console.log(m1);
console.log(req.body);
m1.save(function(err,a){
  if(err){
    console.log(err);
  }
  else {
    console.log('added');
    res.send(a);
  }
});
});

//displaying all movies that i added

app.get('/allmovies',function(req,res){
  m.find({},function(err,b){
    if(err){
      console.log(err);
    }
    else{
      console.log('added all movies');
      res.send(b);
    }
  })
})

//find movie details by any parameter

app.get('/findparameter',function(req,res){
  m.find({
    Title:''},function(err,b){
      if(err){
        console.log(err);
      }
      else{
        console.log('display any movie details');
        res.send(b);
      }
    });
});


app.get('/findparameters/:Title',function(req,res){
  m.find({
    Title:req.params.Title},function(err,b){
      if(err){
        console.log(err);
      }
      else{
        console.log('display any movie details');
        res.send(b);
      }
    });
});

//find movie details by id

app.get('/findbyid',function(req,res){
  m.findById('',function(err,c){
    if(err){
      console.log(err);
    }
    else{
      console.log('find movie by id');
      res.send(c);
    }
  });
});


app.get('/findbyids/:id',function(req,res){
  m.findById(req.params.id,function(err,c){
    if(err){
      console.log(err);
    }
    else{
      console.log('find movie by id');
      res.send(c);
    }
  });
});


//delete movie details by any parameter

app.get('/delete',function(req,res){
  m.findOneAndRemove({
    Title:''},function(err,d){
      if(err){
        console.log(err);
      }
      else{
        console.log('find any one and delete it');
        res.send(d);
      }
    });
});

app.get('/deletes/:Title',function(req,res){
  m.findOneAndRemove({
    Title:req.params.Title},function(err,d){
      if(err){
        console.log(err);
      }
      else{
        console.log('find any one and delete it');
        res.send(d);
      }
    });
});

//delete movie details by id

app.get('/deletebyid',function(req,res){
  m.findByIdAndRemove('',function(err,e){
    if(err){
      console.log(err);
    }
    else{
      console.log('deleting movie by id');
      res.send(e);
    }
  });
});

app.get('/deletebyids/:id',function(req,res){
  m.findByIdAndRemove(req.params.id,function(err,e){
    if(err){
      console.log(err);
    }
    else{
      console.log('deleting movie by id');
      res.send(e);
    }
  });
});

//findparameter and update it

app.get('/updateparameter',function(req,res){
  m.findOneAndUpdate({
    Title:''},{Title:''}, function(err,g){
      if(err){
        console.log(err);
      }
      else{
        console.log('find parameter and update it');
        res.send(g);
      }
    })
})

app.get('/updateparameters/:Title',function(req,res){
  m.findOneAndUpdate({
    Title:req.params.Title},{Title:''}, function(err,g){
      if(err){
        console.log(err);
      }
      else{
        console.log('find parameter and update it');
        res.send(g);
      }
    })
})


//findbyid and update it

app.get('/updatefindbyid',function(req,res){
  m.findByIdAndUpdate( '',{
    Title:''},function(err,h){
      if(err){
        console.log(err);
      }
      else{
        console.log('find by id and update it');
        res.send(h);
      }
    })
})


app.get('/updatefindbyids/:id',function(req,res){
  m.findByIdAndUpdate( req.params.id,{
    Title:'abcdefg'},function(err,h){
      if(err){
        console.log(err);
      }
      else{
        console.log('find by id and update it');
        res.send(h);
      }
    })
})





/*b.get('/',function(req,res){
  res.send('Hello World');
});*/

//reading json data
/*b.get('/hai',function(req,res){
  res.json({'name':'Bahadur',
  'roll no':'11691a0410',
  'qualification':'B-Tech',
  'college':'MITS',
  'city':'madanapalli'});*/


//reading data with routing
/*b.get('/index',function(req,res){
  res.send('reading data with routing')
});*/

//var port=8080;

module.exports = app;
