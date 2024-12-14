const express = require("express");
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => {
   res.sendFile(__dirname + "/index.html")
});

app.post('/', (req, res) => {
    console.log(req.body);
    const h = parseFloat(req.body.height);
    const w = parseFloat(req.body.weight);
    const bmi = w/((h/100)**2);
    res.send("Your BMI is " + bmi + ".")
});

app.listen(3000, () => {
    console.log('server started on port 3000!');
   });
   
