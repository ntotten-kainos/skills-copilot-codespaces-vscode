// Create web server
// Create a new route for POST /comments
// This route should receive a request with a comment in the request body
// Add the comment to the comments array
// Send the comment back to the client

const express = require('express');
const app = express();

app.use(express.json());

const comments = [];

app.post('/comments', (req, res) => {
    const comment = req.body.comment;
    comments.push(comment);
    res.send(comment);
});

app.listen(3000);