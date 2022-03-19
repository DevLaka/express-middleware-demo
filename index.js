const express = require("express");
const app = express();

// ***** App.use middleware with path ***** //
app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next();
});

// App.use middleware with path
app.use('/about-us', (req, res, next) => {
    console.log("This middleware runs only for /about-us path");
    next();
});

app.get('/', (req, res) => {
    res.send("Homepage");
});

app.get('/about-us', (req, res) => {
    console.log(`REQUEST TIME: ${req.requestTime}`);
    res.send("About us page");
});

app.listen(8000, () => {
    console.log("App is running on port 8000");
});