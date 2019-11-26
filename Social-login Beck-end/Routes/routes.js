const fs = require("fs")
const express=require('express')
const router=express.Router();
const path=require('path')




class UserRouter{


    constructor() {
        this.call ={
        info : {}
        // this.router = router;
        }
        this.info = {};
        this.router = router;
    }


    loadUserClasses() {
        fs.readdirSync(path.resolve("./controllers/")).forEach(file => {
              let name = file.substr(0, file.indexOf("."));
              console.log("thisis my cofdknfd",name);
              this.info[name] = require(path.resolve(`./controllers/${name}`));
            //   this.router = router;
              console.log("hello all files",this.info[name])

              this.call[name] = new this.info[name]();
        });
    }

    userRoutes() {



        this.router.get('/social', this.call['socialUserController'].socialInfo);
        this.router.get('/table', this.call['socialUserController']. returnTable);

        // return [
        //       {
        //         url: "/social",
        //         method: this.call.socialUserController.socialInfo,
        //         type: "get"
        //     }]

        }

init() {
    this.loadUserClasses();
   this.userRoutes();
    return  this.router;
}
}
module.exports=
    UserRouter



//     const fs = require("fs")
// const express=require('express')
// const router=express.Router();
// const path=require('path')
// class UserRouter{
// constructor() {
// this.call = {
// info : {}
// }
// this.info = {};
// this.router = router;
// }
// loadUserClasses() {
// fs.readdirSync(path.resolve("./controllers/")).forEach(file => {
// let name = file.substr(0, file.indexOf("."));
// console.log("thisis my cofdknfd",name);
// this.info[name] = require(path.resolve(`./controllers/${name}`));
// // this.router = router;
// console.log("hello all files",this.info[name])
// this.call[name] = new this.info[name]();
// });
// }
// userRoutes() {
// this.router.get('/socialinfo', this.call['socialUserController'].socialInfo);
// }
// init() {
// this.loadUserClasses();
// this.userRoutes();
// return this.router;
// }
// }
module.exports=UserRouter