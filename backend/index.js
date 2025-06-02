const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3001;

const webpush = require("web-push");

webpush.setVapidDetails(
    "mailto:santiagocv@fakemeail123456.com",
    process.env.VAPID_PUBLIC_KEY,
    process.env.VAPID_PRIVATE_KEY
);

let subscriptions = [];

app.post("/subscribe", (req, res) => {
    const subscription = req.body;
    subscriptions.push(subscription);
    console.log("New subscription:", subscription);
    res.status(201).json({ message: "Subscribed!!! :D" });
});

app.post("/unsubscribe", (req, res) => {
    const endpoint = req.body.endpoint;
    subscriptions = subscriptions.filter((s) => s.endpoint !== endpoint);
    res.status(200).json({ message: "Unsubscribed! :((" });
});

app.post("/send-notification", (req, res) => {
    const payload = JSON.stringify({
        title: "New Alert!",
        body: "Check the latest notice on the website.",
    });

    subscriptions.forEach((sub, i) => {
        webpush.sendNotification(sub, payload).catch(err => {
            console.error("Error sending to subscriber!! :(", i, err);
        });
    });

    res.status(200).json({ message: "Notifications sent!!!!" });
});

app.listen(PORT, () => {
    console.log(`Backend server running in http://localhost:${PORT}`);
});