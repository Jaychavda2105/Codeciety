const http = require("http")
const PORT = process.env.PORT
const fs = require("fs")

const home = fs.readFileSync("./index.html","utf-8")

const app = http.createServer((req,res) => {
    if (req.url === '/about') {
        return res.end("<h1>about Page</h1>")
    } 
    if (req.url === '/contact') {
        return res.end("<h1>Contact Page</h1>")

    } if (req.url === '/services') {
        return res.end("<h1>Service Page</h1>")
    }
    if (req.url === '/') {
        return res.end(home)
    } 
    else{
        res.end("ERROR 404 NOT FOUND")
    }
});
app.listen(PORT,() => {
    console.log(`Server Started`)
})