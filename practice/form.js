const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<html>');
        res.write('<head><title>Tanmay Gupta</title></head>');
        res.write('<body><h1>Enter your details</h1>');
        res.write('<form action="/complete" method="POST">');
        res.write('<form>');
        res.write('<input type="text" name="name" placeholder="Enter your name"/><br>');
        res.write('<label for="male">Male</label>');
        res.write('<input type="radio" id="male" name="Gender" value=male/>');
        res.write('<label for="female">female</label>');
        res.write('<input type="radio" id="female" name="Gender" value=female/>');
        res.write('<input type=submit value="Submit"/>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
    }else if(req.method==='POST' && req.url.toLocaleLowerCase()==='/complete'){
        fs.writeFileSync('data.txt','Form Submitted Successfully');
        res.statusCode=302;
        res.setHeader('Location','/');
    }
    return res.end();
});

server.listen(3000,()=>{
    console.log('Server is running on port http://localhost:3000');
});