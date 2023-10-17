const mongoose=require('mongoose')
mongoose.connect(process.env.BASE_URL,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("______MongoDB Atlas Connected");
}).catch((error)=>{
    console.log("connection error",error);
})
