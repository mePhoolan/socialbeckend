
require('./mongoose')
const express= require('express'),
cors = require("cors"),
http            = require('http'),

UserRouter=require('./Routes/routes.js');

class Server {
constructor() {
this.app = express();
this.cors = cors();
this.server = http.createServer(this.app);
}




setAPIRoutes() {
this.app.use('/api', new UserRouter().init());

this.app.get('/robots.txt', function (req, res, next) {
res.json({message: 'hello'});
});
}


init() {
this.setAPIRoutes();
this.server.listen(5000, () => {
            console.log('listening on 5100');
        });
}
}
let application = new Server();
application.init();