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

const axios = require("axios");

//Sets up a POST route for "/authenticate" path.
app.post("/authenticate", async (req, res) => {
    //Destructures the username property from the request body.
    const { username } = req.body;
    
    try{
        const r = await axios.put(
            "https://api.chatengine.io/users/",
            //pass in all required data that this endpoint needs
            { username: username, secret: username, first_name: username },
            //create headers to authenticate the API call
            { headers: { "Private-Key": "26ee3b96-a1a7-4131-9dbd-a5765cee5ed3" } }
            );
            //if all goes well, return response status
            return res.status(r.status).json(r.data);
    } catch (e) {
        //if API call does not work, send error response
        return res.status(e.response.status).json(e.response.data);
    }
});

//Starts the Express application and listens on port 3001 for incoming requests.
app.listen(3001);