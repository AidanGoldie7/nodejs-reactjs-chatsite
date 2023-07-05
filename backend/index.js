//initialise express which runs the HTTP server
const express = require("express");
//cors allows us to call the server from any other origin on the web
const cors = require("cors");

// This line initializes an instance of the Express framework and assigns it to the variable app,
const app = express();
//Parses the incoming request body as JSON.
app.use(express.json());
// Enable Cross-Origin Resource Sharing (CORS) for all origins.
app.use(cors({ origin: true }));

//Sets up a POST route for "/authenticate" path.
app.post("/authenticate", async (req, res) => {
    //Destructures the username property from the request body.
    const { username } = req.body;
    //Sends a JSON response containing username and a placeholder secret
    return res.json({ username: username, secret: "sha256..." });
});

//Starts the Express application and listens on port 3001 for incoming requests.
app.listen(3001);