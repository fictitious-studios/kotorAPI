var express = require("express");
var app = express();
var admin = express();

app.use("/admin", admin);

require("./Routes/ArmorsRoutes.js")(app, admin);
require("./Routes/FeatsRoutes.js")(app);
require("./Routes/BeltsRoutes.js")(app);
require("./Routes/ImplantsRoutes.js")(app);

// =======================================
//          START KOTOR SERVER
// =======================================
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("The KOTOR server is running.");
});