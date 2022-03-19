const express = require("express");
const app = express();

// ***** Example : Protecting specific routes ***** //
app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next();
});

// Defining validateUser middleware
const validateUser = (req, res, next) => {
    const { password } = req.query;
    if (password === 'devlaka') {
        next();
    }
    res.send('PASSWORD REQUIRED!');
};

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

// Use validateUser middleware for private route
app.get('/private', validateUser, (req, res) => {
    res.send("Private Data");
});

// Use validateUser middleware for top-secret route
app.get('/top-secret', validateUser, (req, res) => {
    res.send("Top Secret Data");
});

app.use((req, res) => {
    res.status(404).send('Requested Resource Not Found!');
});

app.listen(8000, () => {
    console.log("App is running on port 8000");
});