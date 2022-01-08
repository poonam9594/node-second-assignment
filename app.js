const express = require("express");
const app = express();
const {engine}=require("express-handlebars");

//Mongodb ddatabase
const data=[
    {
        name:"John",
        vaccinated:false

    },
    {
        name:"Lita",
        vaccinated:true

    }
]
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.set('views', './views');





// app.get("/home",(req,res)=>{
//    res.render('home')
// })
// app.get("/about",(req,res)=>{
//     res.render('about')
//  })


const portfolioPage=(req,res)=>{
    const name=(req.query.name)
    res.render("home",{name:name})
 
    }

app.get("/home",portfolioPage)



app.listen(9800, () => {
  console.log("Server Running At Port " + process.env.PORT);
});
