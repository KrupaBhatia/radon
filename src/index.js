// const express = require('express');
// const bodyParser = require('body-parser');
// const route = require('./routes/route.js');
// const { default: mongoose } = require('mongoose');
// const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));


// mongoose.connect("mongodb+srv://functionup-cohort:G0Loxqc9wFEGyEeJ@cluster0.rzotr.mongodb.net/Pritesh87698-DB?retryWrites=true&w=majority", {
//     useNewUrlParser: true
// })
// .then( () => console.log("MongoDb is connected"))
// .catch ( err => console.log(err) )

// app.use('/', route);


// app.listen(process.env.PORT || 3000, function () {
//     console.log('Express app running on port ' + (process.env.PORT || 3000))
// });

const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');

const { default: mongoose } = require('mongoose'); //change
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// mongoose.connect("mongodb+srv://bushra:<password>@cluster0.nwfddcm.mongodb.net/test")
mongoose.connect("mongodb+srv://Krupa0521:JxGJp13b9ifxQZxP@cluster0.sshcjwm.mongodb.net/Krupa0521?retryWrites=true&w=majority",{

    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});