console.log('1.Start of script');
Promise.resolve().then(() => console.log('2. microtask 1'));
setTimeout(() => console.log('3. Timeout 1'),0);

const fs=require('fs');
fs.readFile('example.txt',()=>{console.log('4. I/O operation complete')});

setImmediate(() => console.log('5. Immediate 1'));

process.on('exit', (code) => console.log('6. Process exit'));

console.log('7.End of script');


