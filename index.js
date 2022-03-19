const express = require("express");
const app = express();

// ***** Execution order ***** //
// Example route: http://localhost:8000/about-us
app.use((req, res, next) => {
    // #1
    console.log("First Middleware");
    // #2 Calls next middleware.
    // Note: Not calling next() will halt the app execution.
    next();
    // #7
    // Note: The response is already send to the client.
    // Referring to the response here, will throw an error.
    // To stop that, "return next()" can be used instead of "next()".
    // This will prevent executing code after "return next()".
    console.log("First Middleware - after next()");
});

app.use((req, res, next) => {
    // #3
    console.log("Second middleware");
    // #4
    next();
});

app.get('/', (req, res) => {
    res.send("Homepage");
});

// #5
app.get('/about-us', (req, res) => {
    // #6
    console.log("About us route handler");
    res.send("About us page")
});

app.listen(8000, () => {
    console.log("App is running on port 8000");
});