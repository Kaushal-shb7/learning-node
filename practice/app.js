const http=require('http');
const server=http.createServer((req,res)=>{
    console.log(req.url,req.method);
    if(req.url==='/home'){
        res.write('<h1>This is home page</h1>');
        return res.end();
    } else if(req.url==='/men'){
        res.write('<h1>This is men page</h1>');
        return res.end();
    } else if(req.url==='/women'){
        res.write('<h1>This is women page</h1>');
        return res.end();
    } else if(req.url==='/kid'){
        res.write('<h1>This is kid page</h1>');
        return res.end();
    } else if(req.url==='/cart'){
        res.write('<h1>This is cart page</h1>');
        return res.end();
    }
    res.write(`<html lang="en">
<head>
  <title>Tanmay</title>
  </head>
  <body>
    <nav>
      <ul>
        <li><a href="home">HOME</a></li>
        <li><a href="men">MEN</a></li>
        <li><a href="women">WOMEN</a></li>
        <li><a href="kid">KID</a></li>
        <li><a href="cart">CART</a></li>
      </ul>
    </nav>
  </body>
</html>`);
    res.end();
});
server.listen(5000,()=>{
    console.log("Server is listening on port http://localhost:5000");
});