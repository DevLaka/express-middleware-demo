const express = require("express");
const app = express();

// ***** Accessing and Setting properties to Request ***** //
// Example route: http://localhost:8000/about-us
app.use((req, res, next) => {
    // Adding properties to request
    req.requestTime = Date.now();
    // Accessing properties of request.
    // Logger like morgan
    console.log(req.method, req.path);
    next();
});

app.get('/', (req, res) => {
    res.send("Homepage");
});

app.get('/about-us', (req, res) => {
    // Accessing requestTime sat by the custom middleware.
    console.log(`REQUEST TIME: ${req.requestTime}`);
    res.send("About us page");
});

app.listen(8000, () => {
    console.log("App is running on port 8000");
});