const http=require('http');
const handleRequest = require('./routes');
const server=http.createServer(handleRequest);

const port=3000;
server.listen(port,()=>{
    console.log(`Server is running on port http://localhost:${port}`);
});
