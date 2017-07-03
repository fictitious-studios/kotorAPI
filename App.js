var express = require("express");
var app = express();

require("./_routes/ArmorsRoutes.js")(app);
require("./_routes/FeatsRoutes.js")(app);
require("./_routes/BeltsRoutes.js")(app);

// =======================================
//          START KOTOR SERVER
// =======================================
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("The KOTOR server is running.");
});