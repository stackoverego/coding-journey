
# MONGOOSE CONNECTION GUIDE

## FOLLOW THESE STEPS 
**1. CREATE THE DB FOLDER INSIDE THE ROOT DIRECTORY.**

**2.NOW INSIDE THE DB FOLDER CREATE THE FILE.**
**DB.JS**

**3.NOW INSIDE THE TERMINAL WE WILL FIRST INSTALL THE REQUIRED PACKAGE TO ESTABLISH THE CONNECTION WITH MONGOOSE WITH THE PROJECT**
```bash
npm i mongoose
```

**4.ONCE DONE WE WILL CODE INSIDE THE DB.JS FILE**
```javascript
const mongoose=require("mongoose")

function connectToDB(){
    mongoose.connect(url)
    .then(()=>console.log("connected to DATABASE"))
    .catch((error)=>console.log(error))
}


module.exports=connectToDB
```
**5.AFTER THAT WE HAVE TO CALL THIS FUNCTION INSIDE OF THE STARTPOINT FILE LIKE IT MAY BE APP.JS OR SERVER.JS**

**WE WILL BE CALLING THIS FUNCTION INSIDE APP.JS FILE**
```javascript
const connectToDB=require("../db/db")

connectToDB();
```

*and then simply use command to start the server:*
`` npx nodemon ``