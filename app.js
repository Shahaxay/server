const http=require('http');
//creating server
const server=http.createServer((req,res)=>{
    if(req.url=="/home"){
        res.write("<p>Welcome Home</p>");
    }else if(req.url=="/about"){
        res.write("<p>Welcome to About Us page</p>");
        
    }else if(req.url=="/node"){
        res.write("<p>Welcome to my Node Js project</p>");

    }else console.log(req.url);
});

//listening to the port
server.listen(4000,()=>console.log("Akshay Kumar Sah"));