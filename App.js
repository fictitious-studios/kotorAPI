var express = require("express");
var app = express();
var admin = express();
var bodyParser = require("body-parser");

app.use("/admin", admin);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

admin.use(bodyParser.json());
admin.use(bodyParser.urlencoded({ extended: false }))

require("./_routes/ArmorsRoutes.js")(app, admin);
require("./_routes/FeatsRoutes.js")(app);
require("./_routes/BeltsRoutes.js")(app);

// =======================================
//          START KOTOR SERVER
// =======================================
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("The KOTOR server is running.");
});