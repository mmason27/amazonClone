//building an express app and hosting it on a cloud function
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51ImJqFHVWHaSjTzLnTXQ5Bnpu7QSS6ljFyPIKlaVcgKncD44DL3TDW1pkETy4acn0mP0gJzCU5FQQ0GmECDUyGSW00ZO09VFIq")
const admin = require('firebase-admin');
admin.initializeApp();
// Steps for: Setting up our API
// App config
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    
    console.log('Payment Request Received for this amount >>>', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //in subunits
        currency: "usd",
    });
    //201 means OK - created something (the payment intent)
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// Listen - setting up express on our cloud functions
exports.api = functions.https.onRequest(app);

//this is given by firebase as an example endpoint
//http://localhost:5001/reactsoloproject/us-central1/api











