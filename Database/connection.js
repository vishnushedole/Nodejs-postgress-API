const {Client} = require('pg');
const dotenv = require('dotenv');
dotenv.config();

const connection = async(cb)=>{
   try{
     const client = new Client({
        user: process.env.PGUSER,
            host: process.env.PGHOST,
            database: process.env.PGDATABASE,
            password: process.env.PGPASSWORD,
            port: process.env.PGPORT
     });
     await client.connect();
     console.log("database connected!")
     cb(null,client);
   }catch(err){
    console.log("error occured");
      cb(err,null);
   }
}

module.exports = connection;