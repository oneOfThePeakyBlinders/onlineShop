const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 5555;

app.use(express.json());
app.use(require("./routes"));

mongoose
  .connect(
    `mongodb+srv://muskhab:Priora_77@cluster0.othtq.mongodb.net/Pharmacy?retryWrites=true&w=majority`
  )
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB"));

app.listen(PORT, () => {
  console.log(`Listrning http://localhost:${PORT}`);
});
