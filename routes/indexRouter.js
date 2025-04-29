const { Router } = require("express");

const indexRouter = Router();

let idIndex = 3;
let currentMessage = {};

let messages = [
  {
    id: 1,
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    id: 2,
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

indexRouter.get("/new", (req, res) => {
  res.render("form");
});

indexRouter.post("/new", (req, res) => {
  let { messageText, username } = req.body;

  messages.push({
    id: idIndex++,
    text: messageText,
    user: username,
    added: new Date(),
  });
  res.redirect("/");
});

indexRouter.get("/details/:id", (req, res) => {
  const { id } = req.params;
  for (let i = 0; i <= idIndex; i++) {
    if (messages[i].id == id) {
      currentMessage.id = messages[i].id;
      currentMessage.text = messages[i].text;
      currentMessage.user = messages[i].user;
      currentMessage.added = messages[i].added;
      break;
    }
  }
  res.render("message", { currentMessage: currentMessage });
});

module.exports = indexRouter;
