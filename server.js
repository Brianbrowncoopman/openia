const PORT = 8000;
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

//console.log("hola BBC");

const API_KEY = "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";

app.post("/completions", async (req, res) => {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "text-davinci-002",
      prompt: req.body.mes,
      max_tokens: 100,
    }),
  };

  try {
    const response = await fetch(
      "https://api.openai.com/v1/completions",
      options
    );
    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () =>
  console.log("mi servidor esta corriendo en el puerto " + PORT)
);
