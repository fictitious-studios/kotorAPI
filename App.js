var express = require("express");
var app = express();
var admin = express();

app.use("/admin", admin);

require("./_routes/ArmorsRoutes.js")(app, admin);
require("./_routes/FeatsRoutes.js")(app);
require("./_routes/BeltsRoutes.js")(app);

// =======================================
//          START KOTOR SERVER
// =======================================
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("The KOTOR server is running.");
});