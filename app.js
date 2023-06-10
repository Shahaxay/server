const http=require('http');
//creating server
const server=http.createServer((req,res)=>{
    if(req.url=="/home"){
        res.write('<html><body><h1>Welcome Home</h1></body></html>');
        console.log("home");
    }else if(req.url=="/about"){
        res.write("Welcome to About Us page");
        
    }else if(req.url=="/node"){
        res.write("Welcome to my Node Js project");

    }
});

//listening to the port
server.listen(4000,()=>console.log("Akshay Kumar Sah"));