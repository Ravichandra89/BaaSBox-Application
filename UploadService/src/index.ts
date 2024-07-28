import express from "express";
import cors from "cors";
import SimpleGit from "simple-git";

// Initilizing Express App

const app = express();
app.use(cors());
app.use(express.json());

// Getting the GitHub URL
app.post("/deploy", (req, res) => {
    const repoUrl = req.body.repoUrl;
});

app.listen(3000);
