
// require('dotenv').config()
const mongoose=require('mongoose')
const uri='mongodb://localhost:27017/sociallogin'

const options={
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    useFindAndModify: false,
}

mongoose.connect(uri,options).then((msg) => { 
     console.log("data is connected successfully",)
})
.catch((error) => {
    console.error('db is not connected:', error.toString());
  });