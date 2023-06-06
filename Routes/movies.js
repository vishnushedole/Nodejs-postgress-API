const express = require('express');
const router = express.Router();
const connection = require('../Database/connection.js');

router.post('/addMovie',(req,res,next)=>{
    console.log(req.body);
    const movie_id = req.body.id;
    const moive_name = req.body.name;
    const movie_genre = req.body.genre;
    const imdb_rating = req.body.imdb;
    connection(async(err,result)=>{
        if(!err)
        {
            await result.query(`insert into movies values (${movie_id},'${moive_name}','${movie_genre}',${imdb_rating});`);
            res.json({dataInserted:true});
        }
        else
        {
            console.log(err);
            res.json({dataInserted:false});
        }
    })
})

router.delete('/deleteMovie',(req,res,next)=>{
    const id = req.query.id;
    connection(async(err,result)=>{
        if(!err)
        {
             await result.query(`delete from movies where movie_id=${id};`);
             res.json({dataDeleted:true});
        }
        else
        { 
            console.log("data deleted");
            res.json({dataDeleted:true});
        }
    })
})

router.get('/getMovie',(req,res,next)=>{
    connection(async (err,result)=>{
         if(!err)
         {
            const data = await result.query(`select * from movies where movie_id=${req.query.id};`);
            res.json(data.rows[0]);
         }
    })
})

router.get('/getAllMovies',(req,res,next)=>{
    connection(async (err,result)=>{
         if(!err)
         {
            const data = await result.query(`select * from movies;`);
            res.json(data.rows);
         }
    })
})

module.exports = router;

