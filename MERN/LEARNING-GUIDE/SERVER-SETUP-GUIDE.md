
# SERVER SETUP GUIDE

## FOLLOW THE STEPS.
**1. CREATE THE BACKEND FOLDER IN THE ROOT FOLDER.**

**2. NOW INSIDE THE BACKEND FOLDER CREATE 2 FILES**
**APP.JS AND SERVER.JS**

**3. NOW INSIDE THE TERMINAL WE WILL BE FIRST INITIALIZE THE PROJECT FOR NODE.JS**
TERMINAL COMMAND 
`npm init -y`

**4 NOW WE WILL INSTALL THE REQUIRED PACKAGES FOR THE SERVER SETUP {EXPRESS, CORS, DOTENV}**
TERMINAL COMMAND 
`npm i express cors dotenv`

**5 BASIC THINGS ARE DONE LETS CODE NOW**
## -----------------------------------------------------
 
##### INSIDE app.js
```bash
const dotenv=require('dotenv')
dotenv.config();
const express=require('express');
const app=express();
const cors=require('cors')
app.use(cors())

app.get("/", (req,res)=>{
   res.send("hello world !");
})


module.exports=app;


```

##### INSIDE server.js
```
const http=require('http');
const app=require('./app')
const port=process.env.PORT || 3000;
const server=http.createServer(app)

server.listen(port,()=>{
   console.log(`server stated at ${port}`)
})

```

##### INSIDE .env file
```
PORT=4000
```

##### INSIDE package.json file
```
"main": "app.js",
```
*change this app.js to main.js*
```
"main": "server.js",
```


**DONE WITH THE BASIC CODING SETUP OF SERVER**
****
**6. TO TEST THE SERVER RUN THE COMMAND**
`npx nodemon`
