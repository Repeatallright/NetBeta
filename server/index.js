const express = require("express");
const app = express();
const WSserver = require("express-ws")(app);
const aWss = WSserver.getWss();
const cors = require("cors");
const PORT = process.env.PORT || 4001;
const fs = require("fs");
const path = require("path");
const fileMiddleware = require("./middleware/file");
const imageEdit = require("./middleware/imageEdit");
const { networkInterfaces } = require("os");
const nets = networkInterfaces();
app.use(express.json({ extendet: true }));
app.use("../client/src/imgs/", express.static(path.join(__dirname, "images")));
app.use("/api", require("./routes/upload.route"));

app.use(cors());

app.use(express.json());
app.ws("/", (ws, req) => {
  ws.on("message", (msg) => {
    msg = JSON.parse(msg);
    switch (msg.method) {
      case "message":
        printHandler(ws, msg);
      case "message_delete":
        deleteHandler(ws, msg);
    }
  });
});
app.listen(PORT, `${nets.Ethernet[0].address}`, () =>
  console.log(`Server works on port ${PORT}`)
);

const printHandler = (ws, msg) => {
  ws.id = 12342354;
  aWss.clients.forEach((client) => {
    client.send(JSON.stringify(msg));
  });
};
const deleteHandler = (ws, msg) => {
  ws.id = 12342354;

  if (msg.src) {
    const file = fs.readFileSync(
      path.resolve(__dirname, "files", `postsDate.json`)
    );
    console.log("../client/src/imgs/Posts/" + msg.src);
    if ("../client/src/imgs/Posts/" + msg.src) {
      if (imageEdit(JSON.parse(file.toString()), msg.src) == 1)
        fs.unlink("../client/src/imgs/Posts/" + msg.src, (e) => {
          if (e) {
            console.log("Error");
          } else {
            console.log("File deleted");
          }
        });
    }
  }
  aWss.clients.forEach((client) => {
    client.send(JSON.stringify(msg));
  });
};

app.get("/postsDate", (req, res) => {
  try {
    const file = fs.readFileSync(
      path.resolve(__dirname, "files", `postsDate.json`)
    );
    res.json(file.toString());
    console.log("sending data post");
  } catch (err) {
    console.log(err);
    return res.status(500).json("error");
  }
});

app.get("/usersDate", (req, res) => {
  try {
    const file = fs.readFileSync(
      path.resolve(__dirname, "files", `usersDate.json`)
    );
    res.json(file.toString());
  } catch (err) {
    console.log(err);
    return res.status(500).json("error");
  }
});
/////////////////////////////////
app.post("/postsDate", (req, res) => {
  try {
    const data = req.body.postsDate;
    fs.writeFileSync(path.resolve(__dirname, "files", `postsDate.json`), data);
    return res.status(200).json({ message: "loading success" });
  } catch (err) {
    console.log(err);
    return res.status(500).json("error");
  }
});
app.post("/usersDate", (req, res) => {
  try {
    const data = req.body.usersDate;
    fs.writeFileSync(path.resolve(__dirname, "files", `usersDate.json`), data);
    return res.status(200).json({ message: "loading success" });
  } catch (err) {
    console.log(err);
    return res.status(500).json("error");
  }
});

app.post("/upload", fileMiddleware.single("upload"), (req, res) => {
  res.json(req.file);
});

fs.writeFileSync(
  "../client/.env",
  `PORT=4000\nPORT=${nets.Ethernet[0].address}`
);
fs.writeFileSync(
  "../client/src/config.txt",
  `PORT=4000\nPORT=${nets.Ethernet[0].address}`
);
