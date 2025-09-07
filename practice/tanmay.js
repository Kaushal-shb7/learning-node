const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html"); // tell browser it's HTML
    res.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <title>Personal Information</title>
      </head>
      <body>Enter your name, number, gender,age and email</body>
      <form action="/success" method="POST">
        <input type="text" name="name" placeholder="Enter your name" required><br>
        <input type="email" name="email" placeholder="Enter your email" required><br>
        <input type="number" name="number" placeholder="Enter your number" required><br>
        <input type="number" name="age" placeholder="Enter your age" required><br>
        <label for ="male">Male</label>
        <input type="radio" id="male" name="gender" value="male/><required>
        <label for ="Female">Female</label>
        <input type="radio" id="female" name="gender" value="female/><required>
        <input type="submit" name="submit" value="submit"/><br>  
        <button type="submit">Submit</button>
      </form>
      </body>
      </html>
  `);
  } else if (req.url.toLowerCase() === "/success" && req.method === "POST") {
    fs.writeFileSync("userData.txt", "Form Submitted Successfully");
    res.statusCode = 302;
    res.setHeader("Location", "/");
  }
  return res.end();
});
server.listen(3000, "localhost", () => {
  console.log("SERVER is running on port http://localhost:3000");
});
