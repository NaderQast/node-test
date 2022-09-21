const path =require('path')
const express = require('express')
const hbs = require('hbs')
const app = express()

const publicPath = path.join(__dirname,'../public')
const partialsPath = path.join(__dirname ,'../templates/partials')
const viewsPath = path.join(__dirname, '../templates/views')


app.set('view engine','hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)
app.use(express.static(publicPath))


app.get('',(req, res) =>{
    res.render('index', {
        title:'Weather App', 
        name:'Nader'

    })
})

app.get('/about',(req , res) =>{
    res.render('about', {
        title:'this is about page',  name:'Nader'
    })
})

app.get('/help' ,(req, res)=>{
    res.render('help',{
        age:'24' ,
        city:'damascus',  name:'Nader'
    })
})
app.get('/weather', ( req, res)=>{
    if(!req.query.address){
        return res.send({error:'no address provided'})
    }
    res.send({
        location:'philadelphia' ,
        forecast:'it\'s 50 degree',
        address:req.query.address
     })
})

app.get('/help/*',(req , res)=>{
    res.render({errorMessage:'help article not found'})
})

app.get('*',(req, res)=>{
    res.render('what',{title:'404',name:'nader',
    errorMessage:'page not found'

    })
    
})


app.listen(3000,()=>{
    console.log('server is up on port 3000.')
})


console.log(__dirname)