const fs=require('fs');
const path=require('path'); 
const add=require('./addition');
const url=require('url');
const querystring=require('querystring');

function handleRequest(req,res){
    const parsedUrl=url.parse(req.url,true);
    const pathname=parsedUrl.pathname;

    if(pathname==='/' && req.method==='GET'){
        fs.readFile(path.join(__dirname,"views","index.html"),(err,data)=>{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end(data);
        });
    }else if(pathname==='/calculator' && req.method==='GET'){
        fs.readFile(path.join(__dirname,"views","calculator.html"),(err,data)=>{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end(data);
        });
    }else if(pathname==="/calculate-result" || pathname==="/calculator-result/" && req.method==='POST'){
        let body='';
        req.on('data',chunk=>{
            body+=chunk.toString();
        });
        req.on('end',()=>{
            const formsData=querystring.parse(body);
            const num1=parseFloat(formsData.num1);
            const num2=parseFloat(formsData.num2);
            const result=add(num1,num2);
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end(`<h1>Result: ${result}</h1><a href="/calculator">Go Back</a>`);
        });
    }else{
            res.writeHead(404,{'Content-Type':'text/html'});
            res.end('<h1>404 Not Found</h1>');
        }
}

module.exports=handleRequest;
