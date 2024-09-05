import express from "express";
const app = express();
const port = 3000;


app.get("/", (req, res) => {
    res.send("<h1>Name Page</h1>");
});

app.post("/register", (req,res) => {
    res.sendStatus(201);
});

app.put("/user/angela", (req, res) => {
    res.sendStatus(200);
});

app.patch('/user/angela', (req, res) => {
    res.sendStatus(200);
});

app.delete("/user/angela", (req, res) => {
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log('server started on port 3000')
});



