const express = require('express');

const app = express();


app.get('/profile/:userId', (req,res)=>{
    if(!req.params.userId){
        res.status(404).send('Need userId!');
        return;
    }
    if(req.params.userId==='rajeshj11'){
        return res.send('found')
    }

    return res.status(404).send('not found');
})

app.listen(4000, ()=>{
    console.log("listening to port 4000!");
})