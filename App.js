var express = require('express');
var app = express();
var admin = express();

app.use('/admin', admin);
app.use(express.static('Public/Views/Styles'))

require('./_Routes/ArmorsRoutes.js')(app, admin);
require('./_Routes/FeatsRoutes.js')(app);
require('./_Routes/BeltsRoutes.js')(app);
require('./_Routes/ImplantsRoutes.js')(app);
require('./_Routes/GauntletsRoutes.js')(app);
require('./_Routes/MasksRoutes.js')(app);

app.get('/', function(req, res) {
    res.status(200);
    res.send('Welcome to the kotorAPI!');
});

app.get('*', function(req, res) {
    res.status(400);
    res.send('Endpoint not recognized.');
});

// =======================================
//          START KOTOR SERVER
// =======================================
app.listen(process.env.PORT, process.env.IP, function() {
    console.log('The KOTOR server is running.');
});