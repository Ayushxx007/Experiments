const  mongoose=require('mongoose');

async function connect(){
    try{
        await mongoose.connect("mongodb+srv://ayushkumawat77889:B8xFdwJTzOlwh3iY@ayush.kq1ew.mongodb.net/newx");
        console.log('Connected to MongoDB');
    }catch(err){
        console.error('Error connecting to MongoDB',err);
    }

}

module.exports=connect;